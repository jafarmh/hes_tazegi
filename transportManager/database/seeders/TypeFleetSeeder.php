<?php

namespace Database\Seeders;

use App\Models\ConstantType;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class TypeFleetSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */

    public function run(): void
    {
        Schema::disableForeignKeyConstraints();
        $type = ConstantType::query()->where('title' ,'=','fleetType')->first()->id;

        DB::table('constants')->insert(['constant_type_id' => $type,'title' => 'ملکی']);
        DB::table('constants')->insert(['constant_type_id' => $type,'title' => 'عبوری']);
        DB::table('constants')->insert(['constant_type_id' => $type,'title' => 'تحت پیمان']);

        Schema::enableForeignKeyConstraints();
    }

}
