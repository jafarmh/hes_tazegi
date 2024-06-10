<?php


namespace App\Services\Common;

use Illuminate\Support\Facades\Schema;

class ApiCall
{

    public static function InquiryPost($url, $headers, $type = 'default', $post = [])
    {
        if ($type == 'default') {
            $url = "https://seebarname.com/api/ServiceEstelams/Estelams?shenasemelliSherkatHaml=14009998806&Token=@QwErTy%$&" . $url;
        }
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $post);
        $result = curl_exec($ch);
        $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $result = json_decode($result, true);
        curl_close($ch);
        return $result;
        if ($http_code == 200) {
            return $result;
        } else {
            return 0;
        }
    }
}
