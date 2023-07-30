<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class AdminController extends Controller
{
    function addProduct(Request $request){
        $product = new Product;

        $product->title = $request->title;
        $product->price = $request->price;
        $product->qty = $request->qty;
        $product->brand_id = $request->brand_id;
        $product->screen = $request->screen;
        $product->battery = $request->battery;
        $product->description = $request->description;
        $product->image = $request->battery;
        $product->save();

        return json_encode(["product" => $product]);
    }
}
