<?php

namespace Database\Seeders;

use App\Models\City;
use App\Models\State;
use App\Models\TransportationCode;
use App\Repositories\CityRepository;
use App\Repositories\StateRepository;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Maatwebsite\Excel\Facades\Excel;


class StateCitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Schema::disableForeignKeyConstraints();
        State::truncate();
        City::truncate();
        TransportationCode::where('recordable_type','=',"App\Models\State")->delete();
        TransportationCode::where('recordable_type','=',"App\Models\City")->delete();

        $data =  Excel::toArray([],base_path("database/data/city.xlsx"));
        if(!empty($data[0]))
        {
            foreach ($data[0] as $i => $row)
            {
                $start = 2;
                $cityCode = trim($row[0]);
                $cityTitle = trim($row[1]);
                $stateCode = trim($row[2]);
                $stateTitle = trim($row[3]);


                if($i >= $start && !empty($cityTitle) && $cityTitle != '----' && is_numeric($cityCode))
                {
                    $stateId = $this->getStateId($stateTitle,$stateCode);
                    if(!$this->isExistsCity($cityCode))
                    {
                        $this->insertCity($stateId,$cityTitle,$cityCode);
                    }
                }
            }
        }

        Schema::enableForeignKeyConstraints();
    }

    public function isExistsCity($code)
    {
        return CityRepository::Builder()->whereHas('transportationCode', function($q) use ($code){
                $q->where('code','=',$code);
                $q->where('recordable_type','=',"App\Models\City");
        })->count();
    }

    public function insertCity($state_id,$title,$code)
    {
        $id = DB::table('cities')->insertGetId(['state_id' => $state_id,'city' => $title]);
        $item = City::find($id);
        CityRepository::AddCode($item,['code' => $code]);
    }

    public function getStateId($title,$code)
    {
        $state = StateRepository::Builder()->whereHas('transportationCode', function($q) use ($code){
                                            $q->where('code','=',$code);
                                            $q->where('recordable_type','=',"App\Models\State");
                                    })->first();
        if(isset($state->id)) return $state->id;
        else
        {
            $id = DB::table('states')->insertGetId(['state' => $title]);
            $item = State::find($id);
            StateRepository::AddCode($item,['code' => $code]);
            return $item->id;
        }
    }

}
