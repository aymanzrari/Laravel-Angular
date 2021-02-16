<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employe extends Model
{
    use HasFactory;

    protected $fillable =['name','phone','job'];

    public function scopeApplyFilters($query, array $filters = [])
    {
        $filters = collect($filters);

        if ($filters->get('id')) {
            $query->where('id', 'LIKE', '%'.$filters->get('id').'%');
        }

        if ($filters->get('name')) {
            $query->where('name', 'LIKE', '%'.$filters->get('name').'%');
        }

        if ($filters->get('phone')) {
            $query->where('phone', 'LIKE', '%'.$filters->get('phone').'%');
        }

        if ($filters->get('job')) {
            $query->where('job', 'LIKE', '%'.$filters->get('job').'%');
        }
    }
}
