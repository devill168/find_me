<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Village;
use App\Models\Province;
use App\Models\District;
use App\Models\Commune;
use App\Models\Od;
use App\Models\Hc;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class VillageController extends Controller
{
    public function index()
    {
        $villages = Village::with([
            'province',
            'district',
            'commune',
            'od',
            'hc',
        ])->latest()->get();

        return response()->json([
            'success' => true,
            'data' => $villages
        ]);
    }

    public function nextCode($hc_code)
    {
        $hc = Hc::where('hc_code', $hc_code)->first();

        if (!$hc) {
            return response()->json([
                'success' => false,
                'message' => 'HC not found'
            ], 404);
        }

        $lastVillage = Village::where('hc_code', $hc_code)
            ->orderBy('village_code', 'desc')
            ->first();

        $nextNumber = 1;

        if ($lastVillage) {
            $lastNumber = (int) substr($lastVillage->village_code, -2);
            $nextNumber = $lastNumber + 1;
        }

        $nextCode = $hc_code . str_pad($nextNumber, 2, '0', STR_PAD_LEFT);

        return response()->json([
            'success' => true,
            'village_code' => $nextCode
        ]);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'province_code'   => ['required', 'exists:provinces,province_code'],
            'district_code'   => ['required', 'exists:districts,district_code'],
            'commune_code'    => ['required', 'exists:communes,commune_code'],
            'od_code'         => ['required', 'exists:ods,od_code'],
            'hc_code'         => ['required', 'exists:hcs,hc_code'],
            'village_name_en' => ['required', 'string', 'max:255'],
            'village_name_kh' => ['required', 'string', 'max:255'],
            'latitude'        => ['nullable', 'numeric'],
            'longitude'       => ['nullable', 'numeric'],
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $province = Province::where('province_code', $request->province_code)->first();
        $district = District::where('district_code', $request->district_code)->first();
        $commune  = Commune::where('commune_code', $request->commune_code)->first();
        $od       = Od::where('od_code', $request->od_code)->first();
        $hc       = Hc::where('hc_code', $request->hc_code)->first();

        if (!$province || !$district || !$commune || !$od || !$hc) {
            return response()->json([
                'success' => false,
                'message' => 'Related data not found'
            ], 404);
        }

        if ($district->province_code !== $province->province_code) {
            return response()->json([
                'success' => false,
                'message' => 'District does not belong to selected province'
            ], 422);
        }

        if ($commune->district_code !== $district->district_code) {
            return response()->json([
                'success' => false,
                'message' => 'Commune does not belong to selected district'
            ], 422);
        }

        if ($od->commune_code !== $commune->commune_code) {
            return response()->json([
                'success' => false,
                'message' => 'OD does not belong to selected commune'
            ], 422);
        }

        if ($hc->od_code !== $od->od_code) {
            return response()->json([
                'success' => false,
                'message' => 'HC does not belong to selected OD'
            ], 422);
        }

        $villageCode = $this->generateVillageCode($request->hc_code);

        $village = Village::create([
            'province_code'   => $request->province_code,
            'district_code'   => $request->district_code,
            'commune_code'    => $request->commune_code,
            'od_code'         => $request->od_code,
            'hc_code'         => $request->hc_code,
            'village_name_en' => $request->village_name_en,
            'village_name_kh' => $request->village_name_kh,
            'village_code'    => $villageCode,
            'latitude'        => $request->latitude,
            'longitude'       => $request->longitude,
            'visit'           => 0,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Village created successfully',
            'data' => $village->load(['province', 'district', 'commune', 'od', 'hc'])
        ], 201);
    }

    public function show($id)
    {
        $village = Village::with(['province', 'district', 'commune', 'od', 'hc'])->find($id);

        if (!$village) {
            return response()->json([
                'success' => false,
                'message' => 'Village not found'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $village
        ]);
    }

    public function update(Request $request, $id)
    {
        $village = Village::find($id);

        if (!$village) {
            return response()->json([
                'success' => false,
                'message' => 'Village not found'
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'province_code'   => ['required', 'exists:provinces,province_code'],
            'district_code'   => ['required', 'exists:districts,district_code'],
            'commune_code'    => ['required', 'exists:communes,commune_code'],
            'od_code'         => ['required', 'exists:ods,od_code'],
            'hc_code'         => ['required', 'exists:hcs,hc_code'],
            'village_name_en' => ['required', 'string', 'max:255'],
            'village_name_kh' => ['required', 'string', 'max:255'],
            'latitude'        => ['nullable', 'numeric'],
            'longitude'       => ['nullable', 'numeric'],
            'village_code'    => [
                'required',
                'string',
                'max:20',
                Rule::unique('villages', 'village_code')->ignore($id),
            ],
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $province = Province::where('province_code', $request->province_code)->first();
        $district = District::where('district_code', $request->district_code)->first();
        $commune  = Commune::where('commune_code', $request->commune_code)->first();
        $od       = Od::where('od_code', $request->od_code)->first();
        $hc       = Hc::where('hc_code', $request->hc_code)->first();

        if (!$province || !$district || !$commune || !$od || !$hc) {
            return response()->json([
                'success' => false,
                'message' => 'Related data not found'
            ], 404);
        }

        if ($district->province_code !== $province->province_code) {
            return response()->json([
                'success' => false,
                'message' => 'District does not belong to selected province'
            ], 422);
        }

        if ($commune->district_code !== $district->district_code) {
            return response()->json([
                'success' => false,
                'message' => 'Commune does not belong to selected district'
            ], 422);
        }

        if ($od->commune_code !== $commune->commune_code) {
            return response()->json([
                'success' => false,
                'message' => 'OD does not belong to selected commune'
            ], 422);
        }

        if ($hc->od_code !== $od->od_code) {
            return response()->json([
                'success' => false,
                'message' => 'HC does not belong to selected OD'
            ], 422);
        }

        $village->update([
            'province_code'   => $request->province_code,
            'district_code'   => $request->district_code,
            'commune_code'    => $request->commune_code,
            'od_code'         => $request->od_code,
            'hc_code'         => $request->hc_code,
            'village_name_en' => $request->village_name_en,
            'village_name_kh' => $request->village_name_kh,
            'village_code'    => $request->village_code,
            'latitude'        => $request->latitude,
            'longitude'       => $request->longitude,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Village updated successfully',
            'data' => $village->load(['province', 'district', 'commune', 'od', 'hc'])
        ]);
    }

    public function destroy($id)
    {
        $village = Village::find($id);

        if (!$village) {
            return response()->json([
                'success' => false,
                'message' => 'Village not found'
            ], 404);
        }

        $village->delete();

        return response()->json([
            'success' => true,
            'message' => 'Village deleted successfully'
        ]);
    }

    private function generateVillageCode($hcCode)
    {
        $lastVillage = Village::where('hc_code', $hcCode)
            ->orderBy('village_code', 'desc')
            ->first();

        $nextNumber = 1;

        if ($lastVillage) {
            $lastNumber = (int) substr($lastVillage->village_code, -2);
            $nextNumber = $lastNumber + 1;
        }

        return $hcCode . str_pad($nextNumber, 2, '0', STR_PAD_LEFT);
    }
}