<?php

namespace App\Filter;

class Title extends Filter
{

    protected function applyFilter($builder)
    {
        return $builder->where('title','like', '%' . request($this->filterName()) . '%');

    }
}
