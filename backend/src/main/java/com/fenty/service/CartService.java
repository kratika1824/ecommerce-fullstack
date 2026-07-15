package com.fenty.service;

import com.fenty.exception.ProductException;
import com.fenty.model.Cart;
import com.fenty.model.User;
import com.fenty.request.AddItemRequest;

public interface CartService {
	
	public Cart createCart(User user);

	public String addCartItem(Long userId,AddItemRequest req)throws ProductException;
	
	public Cart findUserCart(Long userId);
}
