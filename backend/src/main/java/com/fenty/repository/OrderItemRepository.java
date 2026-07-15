package com.fenty.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fenty.model.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

	
}
