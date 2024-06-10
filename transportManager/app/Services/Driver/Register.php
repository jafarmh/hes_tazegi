<?php
namespace App\Services\Driver;

use App\Repositories\CrmDriverRepository;
use App\Services\Common\AttachmentService;

class Register
{

    function register($params)  {
        $attachments=[];
        $data=[];

        foreach($params as $key=>$value){
            if (str_contains($key, 'Img')) { 
                $attachments[$key]=$value;
            }else{
                $data[$key]=$value;
            }
        }
       
        $driver=CrmDriverRepository::NewItem($data);
        foreach($attachments as $key=>$value){
            AttachmentService::SaveStorage($value, "drivers", $driver, "image",$key);
        }

        return successResponse([ 'driver' => $driver]);
    }
    
}
