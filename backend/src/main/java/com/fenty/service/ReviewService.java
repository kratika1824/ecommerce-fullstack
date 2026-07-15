package com.fenty.service;

import java.util.List;

import com.fenty.exception.ProductException;
import com.fenty.model.Review;
import com.fenty.model.User;
import com.fenty.request.ReviewRequest;

public interface ReviewService {

	public Review createReview(ReviewRequest req, User user)throws ProductException;
	public List<Review>getAllReview(Long productId);
}
