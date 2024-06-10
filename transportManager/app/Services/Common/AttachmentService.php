<?php

namespace App\Services\Common;

use App\Models\Attachment;
use App\Repositories\AttachmentRepository;
use App\Repositories\ConstantRepository;
use Illuminate\Support\Facades\Storage;

class AttachmentService
{



    public static function GetBase64Content($file)
    {

        $type = $file->getMimeType();
        $content = base64_encode(file_get_contents($file->path()));
        $base64_decode = "data:$type;base64, $content";
        return $base64_decode;
    }

    public static function SaveStorage($file, $table, $model, $type,$type_name='',$description = '')
    {   
        //$filename= time().$file->getClientOriginalName();
        $filename = $file->hashName();
        $file->move(storage_path("app/public/files/$table"), $filename);
        $path = "files/$table/" . $filename;
  
        AttachmentRepository::Add($model, [
            "path" => $path,
            "name" => $filename,
            "type" => $type,
            "type_name" => $type_name,
            "description" => $description
        ]);
        return "files/$table/" . $filename;
    }

    public static function GetAddressSaveStorage($file, $table, $fileName = null)
    {
        if ($fileName === null) {
            $filename = $file->hashName();
        }
        $filename = $file->hashName();
        return "files/$table/" . $filename;
    }

    public static function RemoveStorage($filename, $table, $model, $type)
    {
        $fileName = explode("/", $filename);
        $fileName = $fileName[count($fileName) - 1];
        $path = "files/$table/$fileName";
        Storage::disk('public')->delete($path);
        AttachmentRepository::Remove($model, $path, $fileName, $type);
    }

    public static function RemoveStorageTypeDescription($model, $type,$type_name)
    {
        $files=$model->attach()
        ->where("type","=",$type)
        ->where("type_name","=",$type_name)
        ->get();
        foreach($files as $file){
            Storage::disk('public')->delete($file->path);
            AttachmentRepository::RemoveById($model,$file->id);
        }
    }


    public static function GetFileLink($path)
    {
        return Storage::disk("public")->url($path) ?? "";
    }


    static function CheckHaveAllAttachments($model,$type)
    {
        $attachmentTypes = ConstantRepository::FindByType( $type);
        $valid = true;
        foreach ($attachmentTypes as $attachType) {
            $attachmentRecord = $model->attach()->where("type_name", "=", $attachType->name)->first();
            if ($attachmentRecord === null) {
                $valid = false;
                break;
            }
        }

        return $valid;
    }

    static function GetAllAttachments($request,$type)
    {
        $attachmentTypes = ConstantRepository::FindByType( $type);
        $attachments=[];

        foreach ($attachmentTypes as $attachType) {
            foreach($request as $key=>$value){
                if (str_contains($key, $attachType->name)) { 
                    $attachments[$key]=$value;
                } 
            }
          
        }

        return $attachments;
    }
}
