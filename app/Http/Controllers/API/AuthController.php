<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Register;             
use Illuminate\Support\Facades\Hash;     

class AuthController extends Controller
{
   public function login(Request $request)
    {
       $data = $request->validate([
            'username' => ['required', 'string'],
            'password' => ['required', 'string'],
        ]);

        $user = Register::where('username', $data['username'])->first();

        if (!$user || !Hash::check($data['password'], $user->password)) {
            return response()->json([
                'message' => 'Invalid username or password'
            ], 401);
        }

        // ✅ Append full image URL for frontend
        $userData = [
            'id' => $user->id,
            'username' => $user->username,
            'email' => $user->email,
            'role' => $user->role,
            'status' => $user->status,
            'profile_image_url' => $user->profile_image
                ? asset('storage/' . $user->profile_image)
                : null,
        ];

        return response()->json([
           'message' => 'Login success',
           'user' => $userData,
        ]);
    }
}
