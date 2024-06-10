<?php

namespace App\Http\Requests\Manager\StateCity;

use Illuminate\Foundation\Http\FormRequest;

class UpdateCityRequest extends FormRequest
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
            "city"=>"sometimes|required|string|min:3",
            "lat"=>"sometimes|required|string|min:3",
            "lng"=>"sometimes|required|string",
            "state_id"=>"sometimes|required|exists:states,id",
    
        ];
    }
}
