<?php

namespace App\Http\Requests\Manager\Driver;

use App\Rules\Mobile;
use App\Rules\NationalCode;
use Illuminate\Database\Query\Builder;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class AddDriverRequest extends FormRequest
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
            "mobile" => ['required', new Mobile, 'unique:crm_drivers,mobile'],
            "name" => "required|string|min:3",
            "family" => "required|string|min:3",
            "smartNumber" => ['required', 'min:3'],
            "certifcateNumber" => ['required', 'min:3'],
            "national_code" => ['required', new NationalCode, 'unique:crm_drivers,national_code'],
            "fatherName" => "required|string|min:3",
            "birthCity" => "required|exists:cities,id",
            "certificateType" => "required|exists:constants,id",
            "isActiveDriver" => "required|in:0,1",
            "isActive" => "required|in:0,1",
            "verification" => "required|in:0,1",
            "healthCardDate" => "required|date_format:Y-m-d",
            "cardValidationDate" => "required|date_format:Y-m-d",
            "insurancecode" => "required",
            "insuranceBranch" => "required",

            "personnelImg" => "sometimes|required|mimes:jpeg,jpg,png|max:15000",
            "birthCertificateImg" => "sometimes|required|mimes:jpeg,jpg,png|max:15000",
            "nationalImg" => "sometimes|required|mimes:jpeg,jpg,png|max:15000",
            "certificateImg" => "sometimes|required|mimes:jpeg,jpg,png|max:15000",
            "smartCardImg" => "sometimes|required|mimes:jpeg,jpg,png|max:15000",
            "healthImg" => "sometimes|required|mimes:jpeg,jpg,png|max:15000",


        ];
    }
}
