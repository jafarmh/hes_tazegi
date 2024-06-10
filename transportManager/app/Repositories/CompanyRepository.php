<?php

namespace App\Repositories;

use App\Interfaces\RepositoryInterface;
use App\Models\Company;
use App\Models\CompanyBranch;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Pipeline\Pipeline;
use Illuminate\Support\Facades\DB;

class CompanyRepository implements RepositoryInterface
{
    private function query(): \Illuminate\Database\Eloquent\Builder
    {
        $query=Company::query();
        return $query;
    }

    public static function SearchByField($field, $value):\Illuminate\Database\Eloquent\Builder
    {
        return (new self)->query()->where($field,"like", "%".$value."%");
    }

    public static function FindByField($field, $value)
    {
        return (new self)->query()->where($field, $value)->first();
    }

    public static function GetByField($field, $value)
    {
        return (new self)->query()->where($field, $value)->get();
    }

    public static function FindById($id)
    {

        return (new self)->query()->where('id', $id)->first();
    }

    static function NewItem($data,$addUserCreatorId=true): \Illuminate\Database\Eloquent\Model
    {
        return Company::create($data);
    }
    static function UpdateItem($data, $id): int
    {
        $record = (new self )->FindByField("id",$id);
        foreach ($data as $key=>$value){
            $record->{$key}=$value;
        }
        return $record->save();
    }
    public static function Index()
    {
        return app(Pipeline::class)
            ->send(
                (new self)->query()
                //
            )
            ->through(

            )
            ->thenReturn()
            ->orderByDesc('created_at')
            ->get();
    }
    static function Builder() : Builder {
        return (new self)->query()->select('*');
    }
    static function Remove($id)
    {
        $record = (new self )->FindByField("id",$id);
        return $record ->delete();
    }

    public static function SearchWithCompanyTitleAndBranch($search = ''):Builder
    {
        $result=CompanyBranch::query()->select('company_branches.id',DB::raw('CONCAT_WS(" - ",companies.name,company_branches.title) as title') );
        $result->join('companies', 'companies.id', '=', 'company_branches.company_id');

        $result->when($search !=='', function ($q) use($search) {
            return $q->where(DB::raw('CONCAT_WS(" - ",companies.name,company_branches.address)'), 'like', '%'.$search.'%');
        });

        return  $result;
    }


    public static function SearchWithCompanyTitle($search = ''):Builder
    {
        $result=(new self)->query()->select('id',DB::raw('CONCAT_WS(" - ",name,national_code) as title'));
        $result->when($search !=='', function ($q) use($search) {
            return $q->where(DB::raw('CONCAT_WS(" - ",name,national_code)'), 'like', '%'.$search.'%');
        });

        return  $result;
    }
}
