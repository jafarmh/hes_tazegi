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
        Schema::create('crm_order_driver_requests', function (Blueprint $table) {
            $table->id();
            $table->foreignId("crm_driver_id")->references("id")->on("crm_drivers")->cascadeOnDelete();
            $table->foreignId("crm_order_id")->references("id")->on("crm_orders")->cascadeOnDelete();
            $table->decimal("price",16);
            $table->integer("active")->default(1);
            $table->enum("status",["Accept","Reject","Reservation","Pending"])->default('Pending');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('crm_order_driver_requests');
    }
};
