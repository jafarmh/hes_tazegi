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
        Schema::create('crm_driver_transport_assistants', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("crm_driver_id");
            $table->unsignedBigInteger("company_id");
            $table->timestamps();

            $table->foreign("crm_driver_id")->references('id')->on("crm_drivers")->cascadeOnDelete();
            $table->foreign("company_id")->references('id')->on("companies")->cascadeOnDelete();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('crm_driver_transport_assistants');
    }
};
