<?php

namespace App\Models;

use App\Services\Common\DateService;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphOneOrMany;

class TicketMessage extends Model
{
    use HasFactory;
    protected $guarded=[];
    protected $appends = ['createdAtP'];
    public function getCreatedAtPAttribute()
    {
        return DateService::ChangeDateToPersian($this->created_at)??"";
    }
    
    public function attach(): MorphOneOrMany
    {
        return $this->morphMany(Attachment::class, 'attachtable');
    }
    
}
