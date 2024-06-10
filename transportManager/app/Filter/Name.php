<?php

namespace App\Filter;

class Name extends Filter
{

    protected function applyFilter($builder)
    {
        return $builder->where('name','like', '%' . request($this->filterName()) . '%');

    }
}
