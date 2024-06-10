<?php
namespace App\Services\Common;

use Illuminate\Support\Facades\DB;

class GoodsService
{
    function getList()  {
        //For fetching faster, we have used the query instead of eloquent
        $query = "SELECT a.id,a.title,a.parent_id,b.code,a.comment
                  FROM goods a
                  INNER JOIN transportation_codes b on (a.id = b.recordable_id and b.recordable_type LIKE '%Goods')";
        $data = DB::select($query);
        return successResponse ($data);
    }

}
