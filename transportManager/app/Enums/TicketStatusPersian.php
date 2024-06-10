<?php declare(strict_types=1);

namespace App\Enums;

use BenSampo\Enum\Enum;

/**
 * @method static static OptionOne()
 * @method static static OptionTwo()
 * @method static static OptionThree()
 */
final class TicketStatusPersian extends Enum
{
    const open = 'فعال';
    const answered = 'پاسخ داده شده';
    const closed = 'بسته شده';
}
