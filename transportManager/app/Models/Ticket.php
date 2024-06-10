<?php

namespace App\Models;

use App\Enums\TicketStatusPersian;
use App\Services\Common\DateService;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class Ticket extends Model
{
    use HasFactory;
    protected $guarded=[];
    protected $appends = ['createdAtP','statusTitle'],$hidden=['creatortable_type','creatortable_id','created_at','updated_at'];

    public function getCreatedAtPAttribute()
    {
        return DateService::ChangeDateToPersian($this->created_at)??"";
    }

    public function getStatusTitleAttribute()
    {
        return TicketStatusPersian::getValue($this->status);
    }

    public function creatortable(): MorphTo
    {
        return $this->morphTo();
    }

    function message() : HasMany {
        return $this->hasMany(TicketMessage::class);
    }

}
