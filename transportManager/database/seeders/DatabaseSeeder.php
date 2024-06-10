<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            UserSeeder::class,
            GoodsSeeder::class,

            StateCitySeeder::class,
            PackagingSeeder::class,
            CrmLoaderSeeder::class,
            CrmLoaderTonnageSeeder::class,
            CarBrandSeeder::class,
            TypeFleetSeeder::class,
            InsurerSeeder::class,
            GoodsSeeder::class,
            BankSeeder::class,
        ]);
    }
}
