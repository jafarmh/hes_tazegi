<?php

namespace Database\Seeders;

use App\Models\CrmLoader;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Maatwebsite\Excel\Facades\Excel;


class CrmLoaderTonnageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Schema::disableForeignKeyConstraints();

        $data =  Excel::toArray([],base_path("database/data/bargir_tonnage.xlsx"));
        if(!empty($data[0]))
        {
            foreach ($data[0] as $i => $row)
            {
                $start = 1;
                $code = trim($row[0]);
                // $name = trim($row[1]);
                $start_tonnage = (int)(str_replace('k','',$row[2]));
                $end_tonnage = (int)(str_replace('k','',$row[3]));
                $alias = trim($row[5]);

                if($i >= $start && !empty($code) && is_numeric($code))
                {
                    $item = CrmLoader::query()
                            ->whereHas('TransportationCode', function($q) use ($code){
                                $q->where('code','=',$code);
                            })
                            ->first();


                    if(isset($item->id))
                    {
                        DB::table('crm_loaders')->where('id','=',$item->id)->update(
                            [
                                'start_tonnage' => ($start_tonnage != NULL) ? $start_tonnage : 0,
                                'end_tonnage' => $end_tonnage,
                                'alias' => $alias
                            ]
                        );
                    }
                }
            }
        }

        Schema::enableForeignKeyConstraints();
    }


}
