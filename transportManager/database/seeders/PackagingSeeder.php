<?php

namespace Database\Seeders;

use App\Models\Packaging;
use App\Models\TransportationCode;
use App\Repositories\PackagingRepository;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Maatwebsite\Excel\Facades\Excel;


class PackagingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Schema::disableForeignKeyConstraints();
        Packaging::truncate();
        TransportationCode::where('recordable_type','=',"App\Models\Packaging")->delete();

        $data =  Excel::toArray([],base_path("database/data/packaging.xlsx"));
        if(!empty($data[0]))
        {
            foreach ($data[0] as $i => $row)
            {
                $start = 1;
                $code = trim($row[0]);
                $title = trim($row[1]);


                if($i >= $start && !empty($title) && $title != '----' && is_numeric($code))
                {
                    if(!$this->isExistsItem($title))
                    {
                        $this->insertItem($title,$code);
                    }
                }
            }
        }

        Schema::enableForeignKeyConstraints();
    }

    public function isExistsItem($title)
    {
        return PackagingRepository::Builder()->where('title','=',$title)->count();
    }

    public function insertItem($title,$code)
    {
        $id = DB::table('packagings')->insertGetId(['title' => $title]);
        $item = Packaging::find($id);
        PackagingRepository::AddCode($item,['code' => $code]);
    }

}
