package com.fenty.service;

import java.util.List;

import com.fenty.exception.OrderException;
import com.fenty.model.Address;
import com.fenty.model.Order;
import com.fenty.model.User;


public interface OrderService {
	
	public Order createOrder(User user, Address shippingAdress);
	
	public Order findOrderById(Long orderId)throws OrderException;
	
	public List<Order> usersOrderHistory(Long userId);
	
	public Order placeOrder(Long orderId)throws OrderException;
	
	public Order confirmedOrder(Long orderId)throws OrderException;
	
	public Order shippedOrder(Long orderId)throws OrderException;
	
	public Order deliveredOrder(Long orderId)throws OrderException;
	
	public Order cancledOrder(Long orderId)throws OrderException;
	
	public List<Order> getAllOrders();

	public void deleteOrder(Long orderId) throws OrderException;
}
