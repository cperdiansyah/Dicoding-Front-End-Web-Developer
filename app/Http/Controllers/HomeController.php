<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    //

    public function index()
    {

        return view('costumers.home', [
            'title' => 'Home',
            'categories' => Category::limit(6)->get(),
            'recomendedProducts' => Product::limit(5)->get(),
            'user' => Auth::user(),
        ]);
    }
}
