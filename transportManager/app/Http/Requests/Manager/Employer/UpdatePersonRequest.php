<?php

namespace App\Http\Requests\Manager\Employer;

use App\Rules\Mobile;
use App\Rules\NationalCode;
use Illuminate\Foundation\Http\FormRequest;

class UpdatePersonRequest extends FormRequest
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
            "mobile"=>['sometimes','required',new Mobile,'unique:employers,mobile,'.$this->id],
            "name"=>"sometimes|required|string|min:3",
            "family"=>"sometimes|required|string|min:3",
            "national_code"=> ['sometimes','required',new NationalCode,'unique:people,national_code,'.$this->id],

        ];
    }
}
