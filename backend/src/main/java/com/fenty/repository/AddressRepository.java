package com.fenty.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fenty.model.Address;

public interface AddressRepository extends JpaRepository<Address, Long> {

	
	
}
