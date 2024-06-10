<?php

namespace App\Http\Requests\Manager\Constant;

use Illuminate\Foundation\Http\FormRequest;

class AddConstantTypeRequest extends FormRequest
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
            "title_p"=>"required|string|min:3",
            "title"=>"required|string|min:3",
    
        ];
    }
}
