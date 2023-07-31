<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Brand;

class AdminController extends Controller
{
    function addOrUpdateProduct(Request $request, $id = "add")
    {
        if ($id == "add") {
            $product = new Product;
        } else {
            $product = Product::find($id);
        }

        $product->title = $request->title;
        $product->price = $request->price;
        $product->qty = $request->qty;
        $product->brand_id = $request->brand_id;
        $product->screen = $request->screen;
        $product->battery = $request->battery;
        $product->description = $request->description;
        $product->image = $request->description;
        $product->save();

        return json_encode(["product" => $product]);
    }

    function findProduct($id)
    {
        $product = Product::find($id);
        return json_encode(["product" => $product]);
    }

    function deleteProduct($id)
    {
        Product::where('id', $id)->delete();
    }

    function getProducts($id = null)
    {
        if ($id) {
            $products = Product::find($id);
        } else {
            $products = Product::all();
            foreach ($products as $product) {
                $brand_id = $product->brand_id;
                $brand = Brand::find($brand_id);
                $product->brand_id = $brand->brand_name;
            }
        }

        return json_encode(["products" => $products]);
    }
}
