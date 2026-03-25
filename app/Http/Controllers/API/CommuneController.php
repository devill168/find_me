<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Commune;
use App\Models\District;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class CommuneController extends Controller
{
    public function index()
    {
        $communes = Commune::with(['province', 'district'])
            ->orderBy('id', 'desc')
            ->get();

        return response()->json([
            'status' => true,
            'data' => $communes
        ]);
    }

    public function nextCode($district_code)
    {
        $lastCommune = Commune::where('district_code', $district_code)
            ->orderBy('commune_code', 'desc')
            ->first();

        if ($lastCommune) {
            $lastNumber = (int) substr($lastCommune->commune_code, -2);
            $nextNumber = $lastNumber + 1;
        } else {
            $nextNumber = 1;
        }

        $nextCode = $district_code . str_pad($nextNumber, 2, '0', STR_PAD_LEFT);

        return response()->json([
            'status' => true,
            'commune_code' => $nextCode
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'province_code' => ['required', 'exists:provinces,province_code'],
            'district_code' => ['required', 'exists:districts,district_code'],
            'commune_name_en' => ['required', 'string', 'max:255'],
            'commune_name_kh' => ['required', 'string', 'max:255'],
            'latitude' => ['nullable', 'numeric'],
            'longitude' => ['nullable', 'numeric'],
        ]);

        $district = District::where('district_code', $request->district_code)->first();

        if (!$district) {
            return response()->json([
                'status' => false,
                'message' => 'District not found'
            ], 404);
        }

        if ($district->province_code !== $request->province_code) {
            return response()->json([
                'status' => false,
                'message' => 'District does not belong to selected province'
            ], 422);
        }

        $lastCommune = Commune::where('district_code', $request->district_code)
            ->orderBy('commune_code', 'desc')
            ->first();

        if ($lastCommune) {
            $lastNumber = (int) substr($lastCommune->commune_code, -2);
            $nextNumber = $lastNumber + 1;
        } else {
            $nextNumber = 1;
        }

        $communeCode = $request->district_code . str_pad($nextNumber, 2, '0', STR_PAD_LEFT);

        $commune = Commune::create([
            'province_code' => $request->province_code,
            'district_code' => $request->district_code,
            'commune_name_en' => $request->commune_name_en,
            'commune_name_kh' => $request->commune_name_kh,
            'commune_code' => $communeCode,
            'latitude' => $request->latitude,
            'longitude' => $request->longitude,
            'visit' => 0,
        ]);

        return response()->json([
            'status' => true,
            'message' => 'Commune created successfully',
            'data' => $commune->load(['province', 'district'])
        ], 201);
    }

    public function update(Request $request, $id)
    {
        $commune = Commune::find($id);

        if (!$commune) {
            return response()->json([
                'status' => false,
                'message' => 'Commune not found'
            ], 404);
        }

        $request->validate([
            'province_code' => ['required', 'exists:provinces,province_code'],
            'district_code' => ['required', 'exists:districts,district_code'],
            'commune_name_en' => ['required', 'string', 'max:255'],
            'commune_name_kh' => ['required', 'string', 'max:255'],
            'latitude' => ['nullable', 'numeric'],
            'longitude' => ['nullable', 'numeric'],
        ]);

        $district = District::where('district_code', $request->district_code)->first();

        if (!$district) {
            return response()->json([
                'status' => false,
                'message' => 'District not found'
            ], 404);
        }

        if ($district->province_code !== $request->province_code) {
            return response()->json([
                'status' => false,
                'message' => 'District does not belong to selected province'
            ], 422);
        }

        // If district changed, regenerate commune_code from new district_code
        if ($commune->district_code !== $request->district_code) {
            $lastCommune = Commune::where('district_code', $request->district_code)
                ->where('id', '!=', $commune->id)
                ->orderBy('commune_code', 'desc')
                ->first();

            if ($lastCommune) {
                $lastNumber = (int) substr($lastCommune->commune_code, -2);
                $nextNumber = $lastNumber + 1;
            } else {
                $nextNumber = 1;
            }

            $commune->commune_code = $request->district_code . str_pad($nextNumber, 2, '0', STR_PAD_LEFT);
        }

        $commune->update([
            'province_code' => $request->province_code,
            'district_code' => $request->district_code,
            'commune_name_en' => $request->commune_name_en,
            'commune_name_kh' => $request->commune_name_kh,
            'latitude' => $request->latitude,
            'longitude' => $request->longitude,
            'commune_code' => $commune->commune_code,
        ]);

        return response()->json([
            'status' => true,
            'message' => 'Commune updated successfully',
            'data' => $commune->load(['province', 'district'])
        ]);
    }

    public function destroy($id)
    {
        $commune = Commune::find($id);

        if (!$commune) {
            return response()->json([
                'status' => false,
                'message' => 'Commune not found'
            ], 404);
        }

        $commune->delete();

        return response()->json([
            'status' => true,
            'message' => 'Commune deleted successfully'
        ]);
    }
}