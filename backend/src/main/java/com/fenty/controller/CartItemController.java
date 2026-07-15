package com.fenty.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fenty.exception.CartItemException;
import com.fenty.exception.UserException;
import com.fenty.model.CartItem;
import com.fenty.response.ApiResponse;
import com.fenty.service.CartItemService;
import com.fenty.service.UserService;

@RestController
@RequestMapping("/api/cart_item")
public class CartItemController {

    @Autowired
    private CartItemService cartItemService;

    @Autowired
    private UserService userService;

    @DeleteMapping("/{cartItemId}/remove")
    public ResponseEntity<ApiResponse> deleteCartItem(
            @PathVariable Long cartItemId,
            @RequestHeader("Authorization") String jwt) 
            throws CartItemException, UserException {

        cartItemService.removeCartItem(userService
            .findUserProfileByJwt(jwt).getId(), cartItemId);

        ApiResponse res = new ApiResponse();
        res.setMessage("Item Removed From Cart");
        res.setStatus(true);

        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @PutMapping("/{cartItemId}")
    public ResponseEntity<CartItem> updateCartItem(
            @PathVariable Long cartItemId,
            @RequestBody CartItem cartItem,
            @RequestHeader("Authorization") String jwt) 
            throws CartItemException, UserException {

        CartItem updatedCartItem = cartItemService.updateCartItem(
            userService.findUserProfileByJwt(jwt).getId(), 
            cartItemId, cartItem);

        return new ResponseEntity<>(updatedCartItem, HttpStatus.OK);
    }
}