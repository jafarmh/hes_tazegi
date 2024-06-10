<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphMany;

class TransportAssistant extends Model
{
    use HasFactory;
    protected $guarded=[];


    public function tickets(): MorphMany
    {
        return $this->morphMany(Ticket::class, 'creatortable')->orderBy('status', 'asc');
    }

}
