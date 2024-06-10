<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('crm_waybills', function (Blueprint $table) {
            $table->id();
            
            $table->date('waybill_date')->nullable();
            $table->time('waybill_time')->nullable();
            $table->string('waybill_number')->nullable()->comment('شماره بارنامه');
            $table->string('waybill_serial')->nullable()->comment('سریال بارنامه');
            $table->string('insurance_number')->nullable()->comment('شماره قراردااد بیمه');
            $table->string('transportation_org_number')->comment('کد سازمان حمل  نقل');
            
            $table->unsignedBigInteger('crm_shipping_id')->comment('حمل');
            $table->foreign("crm_shipping_id")->references('id')->on("crm_shippings")->cascadeOnDelete();
            
            $table->unsignedBigInteger('first_crm_driver_id');
            $table->foreign("first_crm_driver_id")->references('id')->on("crm_drivers")->cascadeOnDelete();
            
            $table->unsignedBigInteger('second_crm_driver_id')->nullable();
            $table->foreign("second_crm_driver_id")->references('id')->on("crm_drivers")->cascadeOnDelete();
            
            $table->unsignedBigInteger('freight_company_id')->nullable()->comment('شرکت باربری');
            $table->foreign("freight_company_id")->references('id')->on("companies")->cascadeOnDelete();
            
            $table->unsignedBigInteger('packaging_id')->nullable()->comment('بسته بندی');
            $table->foreign("packaging_id")->references('id')->on("packagings")->cascadeOnDelete();
            
            $table->unsignedBigInteger('goods_id')->nullable()->comment('کالا');
            $table->foreign("goods_id")->references('id')->on("goods")->cascadeOnDelete();
            
            $table->unsignedBigInteger('goods_item_id')->nullable()->comment('ریز کالا');
            $table->foreign("goods_item_id")->references('id')->on("goods")->cascadeOnDelete();
            
            $table->unsignedBigInteger('insurer_id')->nullable()->comment('بیمه گر');
            $table->foreign("insurer_id")->references('id')->on("insurers")->cascadeOnDelete();
            
            $table->integer('packaging_count')->nullable()->comment('تعداد بسته');
            $table->integer('net_weight')->nullable()->comment('وزن خالص');
            $table->integer('goods_value')->nullable()->comment('ارزش کالا');
            
            $table->integer('transportation_percent')->nullable()->comment('حق سازمان');
            $table->integer('tax_percent')->nullable()->comment('درصد مالیات بر ارزش افزوده');
            $table->integer('commission_percent')->nullable()->comment('درصد کمیسیون');
            $table->integer('insurance_amount')->nullable()->comment('مبلغ بیمه');
            
            $table->integer('is_dangerous_cargo')->nullable()->comment('بار خطرناک');
            $table->integer('is_traffic_cargo')->nullable()->comment('بار ترافیکی');
            
            $table->integer('wage_basic')->nullable()->comment('کرایه پایه');
            $table->integer('wage_first_part')->nullable()->comment('پیش کرایه');
            $table->date('wage_second_part_date')->nullable()->comment('زمان تسویه پس کرایه');
            $table->integer('wage_with_cost')->nullable()->comment('مبلغ کل کرایه و هزینه ها - آپدیت خودکار');
            $table->integer('received_cost_from_driver')->nullable()->comment('هزینه دریافتی از راننده - آپدیت خودکار');
            $table->timestamps();


        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::disableForeignKeyConstraints();
        Schema::dropIfExists('crm_waybills');
        Schema::enableForeignKeyConstraints();
    }
};
