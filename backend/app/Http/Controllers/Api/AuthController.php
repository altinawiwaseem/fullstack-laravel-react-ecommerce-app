<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $req)
    {
        $validator = Validator::make($req->all(),[
            "name"=> "required|max:191",
            "email"=> "required|email|max:191|unique:users,email",
            "password"=> "required",
           
        ]);
        if( $validator->fails())
        {
    return response()->json([
    "validation_errors"=>$validator->messages(), 
    ]);
        }
        else{
            $user = User::create([
                "name"=>$req->name,
                "email"=>$req->email,
                "password"=>Hash::make($req->password)
            ]);
            $token = $user->createToken($user->email.'_token')->plainTextToken;
            return response()->json([
                "status"=>200,
                "username"=>$user->name,
                "token"=>$token,
                "message"=>"Register Successfully",
            ]);
        }
    }


    public function login(Request $req)
    {
        $validator = Validator::make($req->all(),[
           "email"=> "required|max:191",
           "password"=> "required" 
        ]);
        if($validator->fails())
        {
            return response()->json([
                "validation_errors"=>$validator->messages(), 
                ]);
        }
        else
        {
            $user = User::where('email', $req->email)->first();
 
            if (! $user || ! Hash::check($req->password, $user->password)) {
                return response()->json([
                    "status"=>401,
                    "message"=>"Invalid Credentials"
                    ]);
            }
            else
            {
                $token = $user->createToken($user->email.'_token')->plainTextToken;
                return response()->json([
                    "status"=>200,
                    "username"=>$user->name,
                    "token"=>$token,
                    "message"=>"Logged In Successfully",
                ]);   
            }
            }
        }
    }

