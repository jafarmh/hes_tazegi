<?php
namespace Database\Seeders;

use App\Models\Insurer;
use App\Repositories\InsurerRepository;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Maatwebsite\Excel\Facades\Excel;

class InsurerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */

    public function run(): void
    {
        Schema::disableForeignKeyConstraints();

        DB::table('insurers')->truncate();

        $data =  Excel::toArray([],base_path("database/data/insurer.xlsx"));
        if(!empty($data[0]))
        {
            foreach ($data[0] as $i => $row)
            {
                $start = 1;
                $param = [];
                $param['code'] = trim($row[0]);
                $param['title'] = trim($row[1]);
                $param['title_en'] = trim($row[2]);

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
        return InsurerRepository::Builder()->where('title','=',$title)->count();
    }

    public function insertItem($param)
    {
        $id = DB::table('insurers')->insertGetId(['title' => $param['title'], 'title_en' => $param['title_en']]);
        $item = Insurer::find($id);
        InsurerRepository::AddCode($item,['code' => $param['code']]);
    }

}
