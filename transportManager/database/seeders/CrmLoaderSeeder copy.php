<?php

namespace Database\Seeders;

use App\Models\CrmLoader;
use App\Repositories\CrmLoaderRepository;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Maatwebsite\Excel\Facades\Excel;


class CrmLoaderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Schema::disableForeignKeyConstraints();
        CrmLoader::truncate();

        $data =  Excel::toArray([],base_path("database/data/loader.xlsx"));
        if(!empty($data[0]))
        {
            foreach ($data[0] as $i => $row)
            {
                $start = 1;
                $param = [];
                $param['code'] = trim($row[0]);
                $param['name'] = trim($row[1]);
                $param['priority'] = ($param['code'] == 999) ? 1 : 100; //سایر

                if($i >= $start && !empty($param['name']) && $param['name'] != '----------' && is_numeric($param['code']))
                {
                    if(!$this->isExistsItem($param))
                    {
                        $this->insertItem($param);
                    }
                }
            }
        }

        Schema::enableForeignKeyConstraints();
    }

    public function isExistsItem($param)
    {
        return CrmLoaderRepository::Builder()->where('name','=',$param['name'])->count();
    }

    public function insertItem($param)
    {
        $id = DB::table('crm_loaders')->insertGetId(['name' => $param['name'],'priority' => $param['priority']]);
        $item = CrmLoader::find($id);
        CrmLoaderRepository::AddCode($item,['code' => $param['code']]);
    }

}
