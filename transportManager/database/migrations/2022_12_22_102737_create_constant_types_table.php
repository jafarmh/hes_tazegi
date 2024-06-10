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
        Schema::create('constant_types', function (Blueprint $table) {
            $table->id();
            $table->string("title","150");
            $table->string("title_p","150")->nullable()->comment("عنوان فارسی");
            $table->timestamps();
        });

        $data=[
            ["id"=>"1","title"=>"certificateType","title_p"=>"نوع گواهی نامه"],
            ["id"=>"2","title"=>"basculeType","title_p"=>"نوع باسکول"],
            ["id"=>"3","title"=>"packageType","title_p"=>"نوع بسته بندی"],
            ["id"=>"4","title"=>"projectTaskType","title_p"=>"نوع تسک پروژه"],
            ["id"=>"5","title"=>"projectTaskPrerequisiteType","title_p"=>""],
            ["id"=>"6","title"=>"companyBranchType","title_p"=>"نوع شعبه"],
            ["id"=>"7","title"=>"userType","title_p"=>"نوع کاربر"],
            ["id"=>"8","title"=>"companyRole","title_p"=>""],
            ["id"=>"9","title"=>"fleetType","title_p"=>""],
            ["id"=>"10","title"=>"carBrand","title_p"=>"برند ناوگان"],
            ["id"=>"11","title"=>"companyType","title_p"=>"نوع شرکت"],

        ];
        DB::table("constant_types")->insert($data);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::disableForeignKeyConstraints();
        Schema::dropIfExists('constant_types');
        Schema::enableForeignKeyConstraints();
    }
};
