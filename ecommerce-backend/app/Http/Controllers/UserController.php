<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cart;

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
        return json_encode(["items" => $items]);
    }
}
