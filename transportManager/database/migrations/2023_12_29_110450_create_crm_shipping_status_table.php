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
        Schema::create('crm_shipping_statuses', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->foreignId("type")->nullable()->references("id")->on("crm_shipping_types")->cascadeOnDelete();
            $table->string('title');
            $table->string("driver_title");
            $table->string("employer_title");
            $table->foreignId("next")->nullable()->references("id")->on("crm_shipping_statuses")->cascadeOnDelete();
             
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('crm_shipping_statuses');
    }
};
