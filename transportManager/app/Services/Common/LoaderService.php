<?php
namespace App\Services\Common;

use Illuminate\Support\Facades\DB;

class LoaderService
{
    function getList()  {
        //For fetching faster, we have used the query instead of eloquent
        $query = "SELECT a.id,a.name as title,a.alias,b.code,a.start_tonnage,a.end_tonnage
                  FROM crm_loaders a
                  INNER JOIN transportation_codes b on (a.id = b.recordable_id and b.recordable_type LIKE '%CrmLoader')";
        $data = DB::select($query);
        return successResponse ($data);
    }
}
