<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('crm_waybill_cost_types', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('title');

            $table->integer('receive_from_driver')->default(0)->comment('مبلغ از راننده کسر میشود؟');
            $table->integer('add_to_total_amount')->default(0)->comment('به مبلغ کل اضافه شود؟');
            $table->integer('is_computational')->default(0)->comment('آیا محاسباتی است؟');
            $table->string('calculate_field')->nullable()->default(0)->comment('فیلد محاسبه');
            $table->integer('is_visible')->default(0)->comment('آیا فیلد نمایش داده شود؟');
        });

        $data=[
            ["id"=>"1","title"=>"کرایه پایه","receive_from_driver" => 0,"add_to_total_amount" => 1,"is_computational" => 1,"calculate_field" => "wage_basic",'is_visible' => 0],
            ["id"=>"2","title"=>"حق سازمان","receive_from_driver" => 1,"add_to_total_amount" => 1,"is_computational" => 1,"calculate_field" => "transportation_percent*wage_basic/100",'is_visible' => 1],
            ["id"=>"3","title"=>"مبلغ بیمه","receive_from_driver" => 1,"add_to_total_amount" => 1,"is_computational" => 0,"calculate_field" => NULL,'is_visible' => 0],
            ["id"=>"4","title"=>"ارزش افزوده بیمه","receive_from_driver" => 1,"add_to_total_amount" => 1,"is_computational" => 1,"calculate_field" => "(tax_percent*insurance_amount/100)",'is_visible' => 1],
            ["id"=>"5","title"=>"هزینه بارگیری","receive_from_driver" => 0,"add_to_total_amount" => 1,"is_computational" => 0,"calculate_field" => NULL,'is_visible' => 1],
            ["id"=>"6","title"=>"هزینه باسکول","receive_from_driver" => 0,"add_to_total_amount" => 1,"is_computational" => 0,"calculate_field" => NULL,'is_visible' => 1],
            ["id"=>"7","title"=>"کمیسیون بارنامه","receive_from_driver" => 1,"add_to_total_amount" => 0,"is_computational" => 1,"calculate_field" => "commission_percent*wage_basic/100",'is_visible' => 1],
            ["id"=>"8","title"=>"م ا کمیسیون","receive_from_driver" => 1,"add_to_total_amount" => 0,"is_computational" => 1,"calculate_field" => "(tax_percent/100)*(commission_percent*wage_basic/100)",'is_visible' => 1],
            ["id"=>"9","title"=>"هزینه تخلیه و انبارداری","receive_from_driver" => 0,"add_to_total_amount" => 1,"is_computational" => 0,"calculate_field" => NULL,'is_visible' => 1],
            ["id"=>"10","title"=>"حق خواب راننده","receive_from_driver" => 0,"add_to_total_amount" => 1,"is_computational" => 0,"calculate_field" => NULL,'is_visible' => 1],
            ["id"=>"11","title"=>"خدمات سالن اعلام بار","receive_from_driver" => 1,"add_to_total_amount" => 1,"is_computational" => 0,"calculate_field" => NULL,'is_visible' => 1],
            ["id"=>"12","title"=>"هزینه کد رهگیری","receive_from_driver" => 1,"add_to_total_amount" => 1,"is_computational" => 0,"calculate_field" => NULL,'is_visible' => 1],
            ["id"=>"13","title"=>"بیمه تکمیلی","receive_from_driver" => 1,"add_to_total_amount" => 1,"is_computational" => 0,"calculate_field" => NULL,'is_visible' => 1],
            ["id"=>"14","title"=>"مازاد بار ترافیکی","receive_from_driver" => 0,"add_to_total_amount" => 1,"is_computational" => 0,"calculate_field" => NULL,'is_visible' => 1],

        ];
        DB::table("crm_waybill_cost_types")->insert($data);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::disableForeignKeyConstraints();
        Schema::dropIfExists('crm_waybill_cost_types');
        Schema::enableForeignKeyConstraints();
     }
};
