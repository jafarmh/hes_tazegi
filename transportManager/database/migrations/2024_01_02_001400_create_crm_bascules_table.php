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
        Schema::create('crm_bascules', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->softDeletes();

            $table->unsignedBigInteger('crm_shipping_id')->comment('حمل مربوطه');
            $table->foreign("crm_shipping_id")->references('id')->on("crm_shippings")->cascadeOnDelete();

            $table->unsignedBigInteger('basculeType')->comment("نوع باسکول");
            $table->foreign("basculeType")->references('id')->on("constants")->cascadeOnDelete();

            $table->unsignedBigInteger('goods_id')->comment('کالا');
            $table->foreign("goods_id")->references('id')->on("goods")->cascadeOnDelete();

            $table->integer("first_weighing")->comment('توزین اول');
            $table->date("first_weighing_date")->comment('تاریخ توزین اول');
            $table->time("first_weighing_time")->comment('ساعت توزین اول');

            $table->integer("second_weighing")->comment('توزین دوم');
            $table->date("second_weighing_date")->comment('تاریخ توزین دوم');
            $table->time("second_weighing_time")->comment('ساعت توزین دوم');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('crm_bascules');
    }
};
