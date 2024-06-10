<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CrmShippingStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Schema::disableForeignKeyConstraints();
        DB::table('crm_shipping_statuses')->insert([
            "id" => 100,
            "name" => "",
            "title" => "صدور حواله",
            "driver_title" => "صدور حواله",
            "employer_title" => "صدور حواله",
            "next" => 101


        ]);

        DB::table('crm_shipping_statuses')->insert([
            "id" => 101,
            "title" => "در انتظار نوبت",
            "driver_title" => "در انتظار نوبت",
            "employer_title" => "در انتظار نوبت",
            "next" => 102,

        ]);

        DB::table('crm_shipping_statuses')->insert([
            "id" => 102,
            "title" => "انجام کنترل کیفی",
            "driver_title" => "انجام کنترل کیفی",
            "employer_title" => "انجام کنترل کیفی",
            "next" => 103

        ]);

        DB::table('crm_shipping_statuses')->insert([
            "id" => 103,
            "title" => "ابطال حواله",
            "driver_title" => "ابطال حواله",
            "employer_title" => "ابطال حواله",
            "next" => 104


        ]);


        DB::table('crm_shipping_statuses')->insert([
            "id" => 104,
            "title" => "تایید کنترل کیفی توسط نماینده",
            "driver_title" => "تایید کنترل کیفی توسط نماینده",
            "employer_title" => "تایید کنترل کیفی توسط نماینده",
            "next" => 105

        ]);

        DB::table('crm_shipping_statuses')->insert([
            "id" => 105,
            "title" => "انجام باسکول مبدا توسط راننده",
            "driver_title" => "انجام باسکول مبدا توسط راننده",
            "employer_title" => "انجام باسکول مبدا توسط راننده",
            "next" => 106
        ]);

        DB::table('crm_shipping_statuses')->insert([
            "id" => 106,
            "title" => "تایید و صدور بارنامه",
            "driver_title" => "تایید و صدور بارنامه",
            "employer_title" => "تایید و صدور بارنامه",
            "next" => 107

        ]);


        DB::table('crm_shipping_statuses')->insert([
            "id" => 107,
            "title" => "منتظر صدور بارنامه",
            "driver_title" => "منتظر صدور بارنامه",
            "employer_title" => "منتظر صدور بارنامه",
            "next" => 108
        ]);

        DB::table('crm_shipping_statuses')->insert([
            "id" => 108,
            "title" => "صدور بارنامه",
            "driver_title" => "صدور بارنامه",
            "employer_title" => "صدور بارنامه",
            "next" => 109
        ]);

        DB::table('crm_shipping_statuses')->insert([
            "id" => 109,
            "title" => "شروع حرکت",
            "driver_title" => "شروع حرکت",
            "employer_title" => "شروع حرکت",
            "next" => 110
        ]);

        DB::table('crm_shipping_statuses')->insert([
            "id" => 110,
            "title" => "ثبت مسیر",
            "driver_title" => "ثبت مسیر",
            "employer_title" => "ثبت مسیر",
            "next" =>111
        ]);

        DB::table('crm_shipping_statuses')->insert([
            "id" => 111,
            "title" => "پایان مسیر",
            "driver_title" => "پایان مسیر",
            "employer_title" => "پایان مسیر",
            "next" => 112
        ]);

        DB::table('crm_shipping_statuses')->insert([
            "id" => 112,
            "title" => "انجام باسکول مقصد توسط راننده",
            "driver_title" => "انجام باسکول مقصد توسط راننده",
            "employer_title" => "انجام باسکول مقصد توسط راننده",
            "next" => 114

        ]);


        DB::table('crm_shipping_statuses')->insert([
            "id" => 114,
            "title" => "تایید فرم باسکول مقصد توسط نماینده",
            "driver_title" => "تایید فرم باسکول مقصد توسط نماینده",
            "employer_title" => "تایید فرم باسکول مقصد توسط نماینده",
            "next" => 115
        ]);


        DB::table('crm_shipping_statuses')->insert([
            "id" => 115,
            "title" => "تحویل بار و آرشیو",
            "driver_title" => "تحویل بار و آرشیو",
            "employer_title" => "تحویل بار و آرشیو",
            "next" => Null

        ]);


        Schema::enableForeignKeyConstraints();
    }
}
