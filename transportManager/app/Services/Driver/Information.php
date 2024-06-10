<?php
namespace App\Services\Driver;

use App\Models\CrmDriver;
use App\Repositories\CrmDriverRepository;
use App\Services\Common\AttachmentService;

class Information
{

    function updateDriverInformation($params,$id)  {
      
        $driver=CrmDriverRepository::UpdateItem($params,$id);
        return successResponse([ 'driver' => $driver]);
    }
    function updateDriverAttachment($params,CrmDriver $driver)  {
      
        $attachments=[];

        foreach($params as $key=>$value){
            if (str_contains($key, 'Img')) { 
                $attachments[$key]=$value;
            }
        }
       
        foreach($attachments as $key=>$value){
            AttachmentService::RemoveStorageTypeDescription($driver,"image",$key);
            AttachmentService::SaveStorage($value, "drivers", $driver, "image",$key);
        }
        return successResponse([ 'driver' => $driver]);
    }
    
}
