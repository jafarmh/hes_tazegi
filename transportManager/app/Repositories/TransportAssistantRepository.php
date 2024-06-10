<?php

namespace App\Repositories;

use App\Models\TransportAssistant;
use Illuminate\Database\Eloquent\Builder;

class TransportAssistantRepository
{
    private function query(): \Illuminate\Database\Eloquent\Builder
    {
        return TransportAssistant::query();
    }

    static function Builder() : Builder {
        return (new self)->query()->select('*');
    }


    static function getCompanyByTokenAndIp($ip,$token) {
        return (new self)->query()->where('ip','=',$ip)->where('token','=',$token)->first();
    }

}
