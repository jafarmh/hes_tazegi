<?php

namespace App\Http\Requests\Driver\Information;

use App\Rules\Mobile;
use App\Rules\NationalCode;
use Illuminate\Foundation\Http\FormRequest;

class ProfileEditRequest extends FormRequest
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
            "mobile"=>['sometimes','required',new Mobile,'unique:crm_drivers,mobile,'.auth('driver')->user()->id],
            "name"=>"sometimes|required|string|min:3",
            "family"=>"sometimes|required|string|min:3",
            "smartNumber"=>['sometimes','required','min:3'],
            "certifcateNumber"=>['sometimes','required','min:3'],
            "certifcateIssueCity"=>['sometimes','required','exists:cities,id'],
            "national_code"=> ['sometimes','required',new NationalCode,'unique:crm_drivers,national_code,'.auth('driver')->user()->id],
            "fatherName"=>"sometimes|required|string|min:3",
            "birthCity"=>"sometimes|required|exists:cities,id",
            "certificateType"=>"sometimes|required|exists:constants,id",
            "healthCardDate"=>"sometimes|required|date_format:Y-m-d",
            "cardValidationDate"=>"sometimes|required|date_format:Y-m-d",
            "insurancecode"=>"sometimes|required",
            "insuranceBranch"=>"sometimes|required",
        ];
    }
}
