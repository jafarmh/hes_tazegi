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
        Schema::create('crm_shippings', function (Blueprint $table) {
            $table->id();
            $table->foreignId("type")->nullable()->references("id")->on("crm_shipping_types")->cascadeOnDelete();
            
            $table->unsignedBigInteger("crm_driver_id");
            $table->foreign("crm_driver_id")->references('id')->on("crm_drivers")->cascadeOnDelete();
            
            $table->unsignedBigInteger("origin_city_id");
            $table->foreign("origin_city_id")->references('id')->on("cities")->cascadeOnDelete();
            
            $table->unsignedBigInteger("destination_city_id");
            $table->foreign("destination_city_id")->references('id')->on("cities")->cascadeOnDelete();
            

            $table->integer('is_done')->default(0)->comment('حمل به پایان رسیده است');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::disableForeignKeyConstraints();
        Schema::dropIfExists('crm_shippings');
        Schema::enableForeignKeyConstraints();
    }
};
