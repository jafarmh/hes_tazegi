<?php

namespace App\Http\Requests\Driver\Information;


use Illuminate\Foundation\Http\FormRequest;

class TransportInquiryRequest extends FormRequest
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
      
            "smartNumber"=>['sometimes','required','min:7','max:7'],
        ];
    }
}
