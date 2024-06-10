<?php

namespace App\Http\Requests\Employer\Signup;

use App\Rules\Mobile;
use App\Rules\NationalCode;
use Illuminate\Foundation\Http\FormRequest;

class SignupCompanyRequest extends FormRequest
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
            "economic_code"=>"required|string|min:3",
            "registration_number"=>"required|string|min:3",
            "national_code"=> ['required','unique:companies,national_code'],

        ];
    }
}
