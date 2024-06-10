<?php

namespace App\Http\Controllers\Manager;

use App\Enums\ResponseCode;
use App\Http\Controllers\Controller;
use App\Http\Requests\Manager\Auth\LoginRequest;
use App\Http\Requests\Manager\Auth\UserAddRequest;
use App\Repositories\UserRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{


    /**
     * @OA\Get(
     *   path="/manager/user",
     *   tags={"Manager"},
     *   summary="all users",
     *   security={{"bearerAuth":{}}},
     *   @OA\Response(response=200,description="Success"),
     *   @OA\Response(response=404,description="not found"),
 
     *)
     **/

    function list()
    {
        return successResponse(UserRepository::Index());
    }


    /**
     * @OA\Post(
     *     path="/manager/user/add",
     *     tags={"Manager"},
     *     security={{"bearerAuth":{}}},
     *     @OA\Response(response="200", description="An example resource",@OA\JsonContent()),
     *     @OA\Response(response="401", description="unAutosize",@OA\JsonContent()),
     *     @OA\RequestBody(
     *     required=true,
     *     @OA\JsonContent(
     *     required={"name", "email","password"},
     *      @OA\Property(
     *          property="name",
     *          type="string",
     *          ),
     *      @OA\Property(
     *          property="email",
     *          type="string",
     *          ),
     *      @OA\Property(
     *          property="password",
     *          type="string"
     *          )
     *      )))
     * )
     */



    function store(UserAddRequest $request): JsonResponse
    {
        $request->merge([
            'password' => Hash::make($request->password),
        ]);

        $user = UserRepository::NewItem([
            "name" => $request->name,
            "email" => $request->email,
            "password" => $request->password,
        ]);


        $token = $user->createToken('authTokenUser')->plainTextToken;
        $user['token'] = $token;

        return  successResponse($user);
    }







    /**
     * @OA\Get(path="/manager/login",
     *     tags={"Manager"},
     *     summary="Logs user into the system",
     *     description="",
     *     operationId="loginUser",
     *     @OA\Parameter(
     *         name="email",
     *         required=true,
     *         in="query",
     *         description="The user name for login",
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="password",
     *         in="query",
     *         @OA\Schema(
     *             type="string",
     *         ),
     *         description="The password for login in clear text",
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="successful operation",
     *         @OA\Schema(type="string"),
     *         @OA\Header(
     *             header="X-Rate-Limit",
     *             @OA\Schema(
     *                 type="integer",
     *                 format="int32"
     *             ),
     *             description="calls per hour allowed by the user"
     *         ),
     *     ),
     *     @OA\Response(response=400, description="Invalid username/password supplied")
     * )
     */

    function login(LoginRequest $request): JsonResponse
    {
        $user = UserRepository::FindByField("email", $request->email);
        if (!$user) {
            return failedResponse(__("common.notFound"), ResponseCode::NOT_FOUND_DATA);
        }
        if (!Hash::check($request->password, $user->password)) {
            return failedResponse(__("common.notFound"), ResponseCode::NOT_FOUND_DATA);
        }
        $token = $user->createToken('authTokenUser')->plainTextToken;
        $user['token'] = $token;

        return  successResponse($user);
    }
}
