<?php
namespace App\Services\Driver;

use App\Repositories\CrmDriverRepository;
use App\Services\Common\AttachmentService;

class DriverService
{

    function add($params)  {
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

    function update($params,$id)  {
        $attachments=[];
        $data=[];
        $driver=CrmDriverRepository::FindById($id);
        foreach($params as $key=>$value){
            if (str_contains($key, 'Img')) { 
                $attachments[$key]=$value;
            }else{
                $data[$key]=$value;
            }
        }
       
        CrmDriverRepository::UpdateItem($data,$id);
        foreach($attachments as $key=>$value){
            AttachmentService::RemoveStorageTypeDescription($driver,"image",$key);
            AttachmentService::SaveStorage($value, "drivers", $driver, "image",$key);
            
        }

        return successResponse([ 'driver' => $driver]);
    }
    
}
