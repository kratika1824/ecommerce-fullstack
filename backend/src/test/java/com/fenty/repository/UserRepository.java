package com.fenty.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.fenty.model.User;
public interface UserRepository extends JpaRepository<User,Long> {
	
	public User findByEmail(String email);
	
}