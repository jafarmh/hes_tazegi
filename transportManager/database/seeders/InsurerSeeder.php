<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class InsurerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */

    public function run(): void
    {
        Schema::disableForeignKeyConstraints();

        DB::table('insurers')->truncate();

        DB::table('insurers')->insert(['id' => 1,'title' => 'آسیا']);
        DB::table('insurers')->insert(['id' => 2,'title' => 'پارسیان']);
        DB::table('insurers')->insert(['id' => 3,'title' => 'پاسارگاد']);
        DB::table('insurers')->insert(['id' => 4,'title' => 'ایران']);

        Schema::enableForeignKeyConstraints();
    }

}
