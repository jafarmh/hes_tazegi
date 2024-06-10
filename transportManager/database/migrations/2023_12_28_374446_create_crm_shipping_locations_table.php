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
        Schema::create('crm_shipping_locations', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->unsignedBigInteger("crm_shipping_id");
            $table->foreign("crm_shipping_id")->references('id')->on("crm_shippings")->cascadeOnDelete();

            $table->unsignedBigInteger("city_id");
            $table->foreign("city_id")->references('id')->on("cities")->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('crm_shipping_locations');
    }
};
