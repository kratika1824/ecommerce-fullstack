package com.fenty.service;

import com.fenty.exception.UserException;
import com.fenty.model.User;

public interface UserService {

	public User findUserById(Long userId)throws UserException;
	
	public User findUserProfileByJwt(String jwt)throws UserException;
	
	
}
