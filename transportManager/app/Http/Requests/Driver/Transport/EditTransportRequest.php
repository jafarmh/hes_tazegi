<?php

namespace App\Http\Requests\Driver\Transport;

use App\Rules\Mobile;
use App\Rules\NationalCode;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class EditTransportRequest extends FormRequest
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

    
    public function rules()
    {
        $national_code = $this->request->get("national_code");
        $mobile = $this->request->get("mobile");

        return [
            "smart_number"=>['sometimes','required','min:7','max:7'],
            "smart_date"=>['sometimes','required','date_format:Y-m-d'],
            "car_construction_year"=>['sometimes','required','min:4','max:4'],
            "insurance_number"=>['sometimes','required','min:7','max:7'],
            "certificate_type"=>['sometimes','required','exists:constants,id'],
            "car_number"=>['sometimes','required'],
            "car_vin"=>['sometimes','required'],
            "insurer_id"=>['sometimes','required','exists:constants,id'],
            "insurance_date"=>['sometimes','required','date_format:Y-m-d'],
            "technical_check_date"=>['sometimes','required','date_format:Y-m-d'],
            "crm_loader_id"=>['sometimes','required','exists:crm_loaders,id'],
            "brand"=>['sometimes','required','exists:constants,id'],
            "name"=>['sometimes','required','string'],
            "national_code"=> ['sometimes','required',new NationalCode,Rule::unique('crm_owners')->ignore($national_code,'national_code')],
            "mobile"=> ['sometimes','required',new Mobile,Rule::unique('crm_owners')->ignore($mobile,'mobile')],
            "ownerView"=> ['sometimes','required',"in:0,1"],

        ];
    }
}
