<?php

namespace App\Http\Controllers\Driver;

use App\Http\Controllers\Controller;
use App\Http\Requests\Driver\Information\ProfileAttachmentRequest;
use App\Http\Requests\Driver\Information\ProfileEditRequest;
use App\Http\Requests\Driver\Information\TransportInquiryRequest;
use App\Http\Resources\Driver\DriverResource;
use App\Repositories\CrmDriverRepository;
use App\Services\Common\ApiCall;
use App\Services\Driver\Information;
use Illuminate\Http\Request;

class InformationController extends Controller
{

    private Information $Information;
 
    public function __construct(Information $Information)
    {
        $this->Information = $Information;
    }
    function profile() {
        return successResponse(new DriverResource(CrmDriverRepository::FindById(auth('driver')->user()->id)));
    }
    
    function profileUpdate(ProfileEditRequest $request)  {
        return $this->Information->updateDriverInformation($request->validated(),auth("driver")->user()->id);
    }

    function profileUpdateAttachment(ProfileAttachmentRequest $request)  {
        $this->Information->updateDriverAttachment($request->validated(),auth("driver")->user());
    }

    function transportInquiry(TransportInquiryRequest $request)  {
        $headers = array("Content-Type: application/json");
        $url =  "Mash=".$request->smartNumber;
    
        return successResponse(ApiCall::InquiryPost($url,$headers));
    }

}
