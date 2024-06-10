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
        Schema::create('crm_orders', function (Blueprint $table) {
            $table->id();

            
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
            $table->decimal('goods_value',12)->nullable()->comment('ارزش کالا');

            $table->decimal("base_price",12)->comment('قیمت پایه برای حمل');
            $table->foreignId("origin_city_id")->references("id")->on("cities")->cascadeOnDelete();
            $table->foreignId("destination_city_id")->references("id")->on("cities")->cascadeOnDelete();
            $table->foreignId("employer_id")->references("id")->on("employers")->cascadeOnDelete();

            $table->text("description")->nullable();
        
                
            $table->unsignedBigInteger('crm_shipping_id')->nullable()->comment('حمل');
            $table->foreign("crm_shipping_id")->references('id')->on("crm_shippings")->cascadeOnDelete();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('crm_orders');
    }
};
