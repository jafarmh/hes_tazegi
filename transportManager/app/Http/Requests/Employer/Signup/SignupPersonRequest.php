<?php

namespace App\Http\Requests\Employer\Signup;

use App\Rules\Mobile;
use App\Rules\NationalCode;
use Illuminate\Foundation\Http\FormRequest;

class SignupPersonRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {

        return [
            "mobile"=>['required',new Mobile,'unique:employers,mobile'],
            "name"=>"required|string|min:3",
            "family"=>"required|string|min:3",
            "national_code"=> ['required',new NationalCode,'unique:people,national_code'],

        ];
    }
}
