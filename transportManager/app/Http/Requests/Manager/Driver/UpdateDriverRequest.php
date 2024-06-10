<?php

namespace App\Http\Requests\Manager\Driver;

use App\Rules\Mobile;
use App\Rules\NationalCode;
use Illuminate\Database\Query\Builder;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateDriverRequest extends FormRequest
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
            "mobile"=>['sometimes','required',new Mobile,'unique:crm_drivers,mobile,'.$this->id],
            "name"=>"sometimes|required|string|min:3",
            "family"=>"sometimes|required|string|min:3",
            "smartNumber"=>['sometimes','required','min:3'],
            "certifcateNumber"=>['sometimes','required','min:3'],
            "national_code"=> ['sometimes','required',new NationalCode,'unique:crm_drivers,national_code,'.$this->id],
            "fatherName"=>"sometimes|required|string|min:3",
            "birthCity"=>"sometimes|required|exists:cities,id",
            "certificateType"=>"sometimes|required|exists:constants,id",
            "isActiveDriver"=>"sometimes|required|in:0,1",
            "isActive"=>"sometimes|required|in:0,1",
            "verification"=>"sometimes|required|in:0,1",
            "healthCardDate"=>"sometimes|required|date_format:Y-m-d",
            "cardValidationDate"=>"sometimes|required|date_format:Y-m-d",
            "insurancecode"=>"sometimes|required",
            "insuranceBranch"=>"sometimes|required",

            "personnelImg" => "sometimes|required|mimes:jpeg,jpg,png|max:15000",
            "birthCertificateImg" => "sometimes|required|mimes:jpeg,jpg,png|max:15000",
            "nationalImg" => "sometimes|required|mimes:jpeg,jpg,png|max:15000",
            "certificateImg" => "sometimes|required|mimes:jpeg,jpg,png|max:15000",
            "smartCardImg" => "sometimes|required|mimes:jpeg,jpg,png|max:15000",
            "healthImg" => "sometimes|required|mimes:jpeg,jpg,png|max:15000",
        ];
    }
}
