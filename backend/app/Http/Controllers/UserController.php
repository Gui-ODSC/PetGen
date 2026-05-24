<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function list()
    {
        return User::all();
    }

    public function create(Request $request)
    {

        $validator = Validator::make(
            $request->all(),
            [
                'name' => 'required|string|max:255',
                'email' => 'required|email|unique:users,email',
                'password' => [
                    'required',
                    'regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/',
                ],
            ]
        );

        $validated = $validator->validated();

        if ($validated['password']) {
            $validated['password'] = Hash::make($validated['password']);
        }

        User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => $validated['password'],
            'created_at' => now(),
        ]);
    }

    public function update(Request $request, int $id)
    {
        $user = User::findOrFail($id);

        $validator = Validator::make(
            $request->all(),
            [
                'name' => 'sometimes|required|string|max:255',
                'email' => 'sometimes|required|email|unique:users,email,' . $user->id,
                'password' => [
                    'sometimes',
                    'required',
                    'regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/',
                ],
            ]
        );

        $validated = $validator->validated();

        if (isset($validated['password'])) {
            $validated['password'] = Hash::make($validated['password']);
        }

        $user->update($validated);
    }
}
