<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cart;
use App\Models\Product;

class UserController extends Controller
{
    function addToCart(Request $request){

        $cart_item = new Cart;
        $cart_item->product_id = $request->product_id;
        $cart_item->user_id = $request->user_id;
        $cart_item->save();

        return json_encode(["cart_item"=>$cart_item]);
    }

    function getCartItems($id){
        
        $items = Cart::where('user_id', $id)->get();
            foreach ($items as $item) {
                $product_id = $item->product_id;
                $product = Product::find($product_id);
                $item->product_id = $product->title;
            }
        return json_encode(["items" => $items]);
    }

    function deleteFromCart($id){
        Cart::where('id', $id)->delete();
    }

    function addToWishlist(Request $request){

        $cart_item = new Cart;
        $cart_item->product_id = $request->product_id;
        $cart_item->user_id = $request->user_id;
        $cart_item->save();

        return json_encode(["cart_item"=>$cart_item]);
    }

    function getfavorites($id){
        
        $items = Cart::where('user_id', $id)->get();
            foreach ($items as $item) {
                $product_id = $item->product_id;
                $product = Product::find($product_id);
                $item->product_id = $product->title;
            }
        return json_encode(["items" => $items]);
    }

}
