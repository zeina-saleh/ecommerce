<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cart;
use App\Models\Product;
use App\Models\Favorite;

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

        $wish_item = new Favorite;
        $wish_item->product_id = $request->product_id;
        $wish_item->user_id = $request->user_id;
        $wish_item->save();

        return json_encode(["wish_item"=>$wish_item]);
    }

    function getFavorites($id){
        
        $items = Favorite::where('user_id', $id)->get();
            foreach ($items as $item) {
                $product_id = $item->product_id;
                $product = Product::find($product_id);
                $item->product_id = $product->title;
            }
        return json_encode(["items" => $items]);
    }

    function deleteFromWishlist($id){
        Favorite::where('id', $id)->delete();
    }

}
