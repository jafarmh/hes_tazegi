<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class Mobile implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {

        if (!preg_match('/^(09)[0-9]/',$value)) {
            $fail('validation.regex')->translate();
        }
        if (strlen($value)!=11) {
            $fail('validation.size.string')->translate(['size' => 11]);
        }
    }
}
