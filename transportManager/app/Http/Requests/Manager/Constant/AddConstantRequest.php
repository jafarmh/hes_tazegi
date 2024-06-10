<?php

namespace App\Http\Requests\Manager\Constant;

use App\Rules\Mobile;
use App\Rules\NationalCode;
use Illuminate\Foundation\Http\FormRequest;

class AddConstantRequest extends FormRequest
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
            "name"=>"required|string|min:3",
            "title"=>"required|string|min:3",
            "priority"=>"sometimes|required|string",
            "constant_type_id"=>"required|exists:constant_types,id",
    
        ];
    }
}
