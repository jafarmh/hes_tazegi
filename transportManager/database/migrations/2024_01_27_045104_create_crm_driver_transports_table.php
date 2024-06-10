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
        Schema::create('crm_driver_transports', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("crm_driver_id");
            $table->unsignedBigInteger("crm_transport_id");
            $table->integer("ownerView")->default(0)->comment("نمایش اطلاعات به مالک");
            $table->string("ownerCode")->nullable()->comment("کد نمایش اطلاعات به مالک");
            $table->integer("active")->default(1);

            $table->foreign("crm_driver_id")->references('id')->on("crm_drivers")->cascadeOnDelete();
            $table->foreign("crm_transport_id")->references('id')->on("crm_transports")->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('crm_driver_transports');
    }
};
