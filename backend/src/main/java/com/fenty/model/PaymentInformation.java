package com.fenty.model;

import jakarta.persistence.Column;

public class PaymentInformation {
	
	@Column(name="cardholder_name")
	private String cardholderName;
	
	@Column(name="card_number")
	private String cardNumber;
	
	@Column(name="expiration_date")
	private String expiration_Date;
	
	@Column(name="cvv")
	private String cvv;

}
