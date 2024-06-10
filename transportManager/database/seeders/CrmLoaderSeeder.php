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

        $data =  Excel::toArray([],base_path("database/data/bargir.xlsx"));
        if(!empty($data[0]))
        {
            foreach ($data[0] as $i => $row)
            {
                $start = 1;
                $code = trim($row[0]);
                $name = trim($row[1]);

                if($i >= $start && !empty($name) && $name != '----------' && is_numeric($code))
                {
                    if(!$this->isExistsItem($name))
                    {
                        $this->insertItem($name,$code);
                    }
                }
            }
        }

        Schema::enableForeignKeyConstraints();
    }

    public function isExistsItem($name)
    {
        return CrmLoaderRepository::Builder()->where('name','=',$name)->count();
    }

    public function insertItem($name,$code)
    {
        $id = DB::table('crm_loaders')->insertGetId(['name' => $name]);
        $item = CrmLoader::find($id);
        CrmLoaderRepository::AddCode($item,['code' => $code]);
    }

}
