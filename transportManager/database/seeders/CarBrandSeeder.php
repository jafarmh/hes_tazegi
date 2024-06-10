<?php
namespace Database\Seeders;

use App\Models\Constants;
use App\Models\ConstantType;
use App\Repositories\ConstantRepository;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Maatwebsite\Excel\Facades\Excel;

class CarBrandSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */

    public function run(): void
    {
        Schema::disableForeignKeyConstraints();
        $type = ConstantType::query()->where('title' ,'=','carBrand')->first()->id;

        $data =  Excel::toArray([],base_path("database/data/carBrand.xlsx"));
        if(!empty($data[0]))
        {
            foreach ($data[0] as $i => $row)
            {
                $start = 1;
                $param = [];
                $param['code'] = trim($row[0]);
                $param['title'] = trim($row[1]);
                $param['type'] = trim($type);
                $param['priority'] = ($param['code'] == 63) ? 1 : 100; //سایر

                if($i >= $start && !empty($param['code']) && is_numeric($param['code']))
                {
                    if(!$this->isExistsItem($param['title']))
                    {
                        $this->insertItem($param);
                    }
                }
            }
        }

        Schema::enableForeignKeyConstraints();
    }


    public function isExistsItem($title)
    {
        return ConstantRepository::Builder()->where('title','=',$title)->count();
    }

    public function insertItem($param)
    {
        $id = DB::table('constants')->insertGetId(['title' => $param['title'],'constant_type_id' => $param['type'],'priority' => $param['priority']]);
        $item = Constants::find($id);
        ConstantRepository::AddCode($item,['code' => $param['code']]);
    }


}
