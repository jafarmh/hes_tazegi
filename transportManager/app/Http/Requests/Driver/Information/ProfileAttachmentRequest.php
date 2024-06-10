<?php

namespace App\Http\Requests\Driver\Information;

use App\Rules\Mobile;
use App\Rules\NationalCode;
use Illuminate\Database\Query\Builder;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProfileAttachmentRequest extends FormRequest
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
            "personnelImg"=>"sometimes|required|mimes:jpeg,jpg,png|max:15000",
            "birthCertificateImg"=>"sometimes|required|mimes:jpeg,jpg,png|max:15000",
            "nationalImg"=>"sometimes|required|mimes:jpeg,jpg,png|max:15000",
            "certificateImg"=>"sometimes|required|mimes:jpeg,jpg,png|max:15000",
            "smartCardImg"=>"sometimes|required|mimes:jpeg,jpg,png|max:15000",
            "healthImg"=>"sometimes|required|mimes:jpeg,jpg,png|max:15000",

        ];
    }
}
