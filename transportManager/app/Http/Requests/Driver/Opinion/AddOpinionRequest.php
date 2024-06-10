<?php

namespace App\Http\Requests\Driver\Opinion;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class AddOpinionRequest extends FormRequest
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
            "crm_shipping_id"=>['required','exists:crm_shippings,id'],
            "comment"=>["required","string","min:3"],
            "rate"=>["required","in:1,2,3,4,5"]
        ];
    }
}
