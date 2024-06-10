<?php

namespace App\Http\Requests\Manager\StateCity;

use Illuminate\Foundation\Http\FormRequest;

class AddStateRequest extends FormRequest
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
            "state"=>"required|string|min:3",
            "lat"=>"required|string|min:3",
            "lng"=>"required|string",
    
        ];
    }
}
