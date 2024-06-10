<?php

namespace App\Http\Requests\Driver\Transport;

use App\Rules\Mobile;
use App\Rules\NationalCode;
use Illuminate\Foundation\Http\FormRequest;

class AddTransportRequest extends FormRequest
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

        return [
            "smart_number"=>['required','min:7','max:7'],
            "smart_date"=>['required','date_format:Y-m-d'],
            "car_construction_year"=>['required','min:4','max:4'],
            "insurance_number"=>['required','min:7','max:7'],
            "certificate_type"=>['required','exists:constants,id'],
            "car_number"=>['required'],
            "car_vin"=>['required'],
            "insurer_id"=>['required','exists:constants,id'],
            "insurance_date"=>['required','date_format:Y-m-d'],
            "technical_check_date"=>['required','date_format:Y-m-d'],
            "crm_loader_id"=>['required','exists:crm_loaders,id'],
            "brand"=>['required','exists:constants,id'],
            //"type_fleet"=>['required','exists:constants,id'],
            "name"=>['required','string'],
            "national_code"=> ['required',new NationalCode],
            "mobile"=> ['required',new Mobile],
            "ownerView"=> ['required',"in:0,1"],

        ];
    }
}
