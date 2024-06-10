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
        Schema::create('crm_order_loaders', function (Blueprint $table) {
            $table->id();
            $table->foreignId("crm_loader_id")->references("id")->on('crm_loaders')->cascadeOnDelete();
            $table->foreignId("crm_order_id")->references("id")->on('crm_orders')->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('crm_order_loaders');
    }
};
