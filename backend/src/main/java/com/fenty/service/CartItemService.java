package com.fenty.service;

import com.fenty.exception.CartItemException;
import com.fenty.exception.UserException;
import com.fenty.model.Cart;
import com.fenty.model.CartItem;
import com.fenty.model.Product;

public interface CartItemService {
	
	public CartItem createCartItem(CartItem cartItem);
	
	public CartItem updateCartItem(Long userId,Long id, CartItem cartItem)throws CartItemException,UserException;

	public CartItem isCartItemExist(Cart cart, Product product, String size,Long userId);
	
	public void removeCartItem(Long userId, Long cartItemId) throws CartItemException, UserException;
	
	public CartItem findCartItemById(Long cartItemId)throws CartItemException;
}
