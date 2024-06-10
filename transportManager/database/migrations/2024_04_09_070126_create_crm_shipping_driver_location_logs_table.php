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
        Schema::create('crm_shipping_driver_location_logs', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger("crm_shipping_id");
            $table->foreign("crm_shipping_id")->references('id')->on("crm_shippings")->cascadeOnDelete();
            $table->string("lat");
            $table->string("lng");
 
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('crm_shipping_driver_location_logs');
    }
};
