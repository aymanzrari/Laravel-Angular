<?php

namespace App\Http\Controllers;

use App\Models\Employe;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EmployeController extends Controller
{

    public function index(Request $request)
    {
        $employes = Employe::applyFilters($request->all())->get();

        return response()->json([
            'error' => false,
            'employes'  => $employes,
        ], Response::HTTP_ACCEPTED);
    }

    public function store(Request $request)
    {
        $this->validate($request, [ 
            'name' => 'required',
            'phone' => 'required',
            'job' => 'required'
        ]);

        $employe = Employe::create($request->only('name', 'phone', 'job'));

        return response()->json([
            'error' => false,
            'employe' => $employe,
            'messages'=> 'User Successfully Addedd'
        ], Response::HTTP_ACCEPTED);
    }

    public function update(Request $request, Employe $employe)
    {
        $this->validate($request, [
            'name' => 'required',
            'phone' => 'required',
            'job' => 'required'
        ]);

        $employe->update($request->only('name', 'phone', 'job'));

        return response()->json([
            'error' => false,
            'employe' => $employe,
            'messages'=> 'Employe Successfully Updated'
        ], Response::HTTP_ACCEPTED);
    }
}
