<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CrmShippingTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('crm_shipping_types')->insert(['title' => 'دستیار حمل']);
        DB::table('crm_shipping_types')->insert(['title' => 'بازارگاه-ترانزیت']);
        DB::table('crm_shipping_types')->insert(['title' => 'بازارگاه-وانت']);
        DB::table('crm_shipping_types')->insert(['title' => 'بازارگاه-حمل اساسیه']);
    }
}
