package com.fenty.model;

import jakarta.persistence.Column;
import com.fasterxml.jackson.annotation.JsonIgnore;

public class PaymentInformation {
	
	@Column(name="cardholder_name")
	private String cardholderName;
	
	@Column(name="card_number")
@JsonIgnore
private String cardNumber;
	
	@Column(name="expiration_date")
	private String expiration_Date;
	
	@Column(name="cvv")
@JsonIgnore
private String cvv;

}
