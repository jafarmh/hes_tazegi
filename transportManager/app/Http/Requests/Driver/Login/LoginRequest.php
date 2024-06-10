<?php

namespace App\Http\Requests\Driver\Login;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class LoginRequest extends FormRequest
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
            "mobile"=>['required','regex:/^(09)[0-9]/','max:11','min:11'],
            "code"=>['required','min:5','max:5'],
           
        ];
    }
}
