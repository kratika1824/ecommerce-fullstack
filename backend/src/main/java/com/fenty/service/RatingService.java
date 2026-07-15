package com.fenty.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.fenty.exception.ProductException;
import com.fenty.model.Rating;
import com.fenty.model.User;
import com.fenty.request.RatingRequest;


public interface RatingService {
	
	public Rating createRating(RatingRequest req, User user)throws ProductException;
	public List<Rating>getProductsRating(Long productId);

}
