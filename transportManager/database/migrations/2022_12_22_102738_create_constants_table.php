<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('constants', function (Blueprint $table) {
            $table->id();

            $table->string("title","150");
            $table->integer("priority")->default(1);
            $table->string("name");

            $table->unsignedBigInteger('constant_type_id')->comment('نوع');
            $table->foreign("constant_type_id")->references('id')->on("constant_types")->cascadeOnDelete();
            $table->softDeletes();

            $table->timestamps();
        });

        $datas=[
            ["id"=>"1","title"=>"پایه یک","constant_type_id"=> 1],
            ["id"=>"2","title"=>"پایه دو","constant_type_id"=> 1],
            ["id"=>"3","title"=>"پایه سه","constant_type_id"=> 1],

            ["id"=>"4","title"=>"مبدا","constant_type_id"=> 2],
            ["id"=>"5","title"=>"مقصد","constant_type_id"=> 2],

            ["id"=>"6","title"=>"ثبت درصد","constant_type_id"=> 4],
            ["id"=>"7","title"=>"ثبت فرم","constant_type_id"=> 4],
            ["id"=>"8","title"=>"ثبت فرآیند","constant_type_id"=> 4],

            ["id"=>"9","title"=>"بعد از پایان پیش نیاز","constant_type_id"=> 5],
            ["id"=>"10","title"=>"بعد از مرحله ی فرآیند","constant_type_id"=> 5],

            ["id"=>"11","title"=>"شعبه مرکزی","constant_type_id"=> 6],
            ["id"=>"12","title"=>"نمایندگی","constant_type_id"=> 6],

            ["id"=>"13","title"=>"کاربر سامانه","constant_type_id"=> 7],
            ["id"=>"14","title"=>"راننده","constant_type_id"=> 7],

            ["id"=>"15","title"=>"مدیرعامل","constant_type_id"=> 8],
            ["id"=>"16","title"=>"رئیس هیئت مدیره","constant_type_id"=> 8],
            ["id"=>"17","title"=>"دارنده حق امضا","constant_type_id"=> 8],

            ["id"=>"18","title"=>"سهامی عام","constant_type_id"=> 11],
            ["id"=>"19","title"=>"سهامی خاص","constant_type_id"=> 11],
            ["id"=>"20","title"=>"مسئولیت محدود","constant_type_id"=> 11],
            ["id"=>"21","title"=>"تعاونی","constant_type_id"=> 11],

        ];
        DB::table("constants")->insert($datas);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::disableForeignKeyConstraints();
        Schema::dropIfExists('constants');
        Schema::enableForeignKeyConstraints();
    }
};
