<?php

namespace App\Services\Common;

use Carbon\Carbon;
use Illuminate\Support\Facades\Schema;
use Morilog\Jalali\Jalalian;

class DateService
{



    static function ChangeDateToGregorian($date): string
    {
        $newDate = str_replace("/", "-", $date);
        $correctDate = date('Y-m-d', strtotime($newDate));
        return Jalalian::fromFormat('Y-m-d', $correctDate)->toCarbon()->format('Y-m-d');
    }

    static function ChangeDateToPersian($date): string
    {
        $newDate = str_replace("/", "-", $date);
        
        return Jalalian::fromCarbon(Carbon::parse($newDate))->format('Y/m/d');
        
       
    }
}
