<?php
namespace App\Services\Common;

use App\Repositories\CityRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;

class StateCityService
{
    function getCityList()  {
        //For fetching faster, we have used the query instead of eloquent
        $query = "SELECT a.id,a.city as title,a.state_id,b.code
                  FROM cities a
                  INNER JOIN transportation_codes b on (a.id = b.recordable_id and b.recordable_type LIKE '%City')";
        $data = DB::select($query);
        return successResponse ($data);
    }

    function getStateList()  {
        //For fetching faster, we have used the query instead of eloquent
        $query = "SELECT a.id,a.state as title,b.code
        FROM states a
        INNER JOIN transportation_codes b on (a.id = b.recordable_id and b.recordable_type LIKE '%State')";
        $data = DB::select($query);
        return successResponse ($data);
    }


    function getAllStateList() : JsonResponse {
        return successResponse (CityRepository::Index());  
    }

}
