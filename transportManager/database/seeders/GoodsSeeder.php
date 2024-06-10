<?php

namespace Database\Seeders;

use App\Models\Goods;
use App\Models\TransportationCode;
use App\Repositories\GoodsRepository;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Maatwebsite\Excel\Facades\Excel;


class GoodsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Schema::disableForeignKeyConstraints();
        Goods::truncate();
        TransportationCode::where('recordable_type','=',"App\Models\Goods")->delete();

        $data =  Excel::toArray([],base_path("database/data/kala.xlsx"));
        if(!empty($data[0]))
        {
            foreach ($data[0] as $i => $row)
            {
                $start = 1;
                $code = trim($row[0]);
                $title = trim($row[1]);
                $comment = trim($row[2]);

                if($i >= $start && !empty($title) && $title != '----------' && is_numeric($code))
                {
                    if(!$this->isExistsItem($title))
                    {
                        $this->insertItem($title,$code,$comment);
                    }
                }
            }


            GoodsRepository::UpdateAllParent();
        }

        Schema::enableForeignKeyConstraints();
    }

    public function isExistsItem($title)
    {
        return GoodsRepository::Builder()->where('title','=',$title)->count();
    }

    public function insertItem($title,$code,$comment)
    {
        $id = DB::table('goods')->insertGetId(['title' => $title,'comment' => $comment]);
        $item = Goods::find($id);
        GoodsRepository::AddCode($item,['code' => $code]);
    }

}
