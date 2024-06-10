<?php

namespace App\Services\Common;

use Illuminate\Support\Facades\Schema;

class ArabicTpPershion
{



    static function change($title): string
    {

        $title = str_replace("آ", "ا", $title);
        $title = str_replace("ﻚ", "ك", $title);
        $title = str_replace("ک", "ك", $title);
        $title = str_replace("ﮐ", "ك", $title);
        $title = str_replace("ﺊ", "ﻱ", $title);
        $title = str_replace("ی", "ﻱ", $title);
        $title = str_replace("ﻩ", "ه", $title);
        $title = str_replace("ﻪ", "ه", $title);
        $title = str_replace("ﻬ", "ه", $title);
        $title = str_replace("ﯹ", "ﻱ", $title);
        $title = str_replace("ئ", "ﻱ", $title);
        return  $title;
    }
}
