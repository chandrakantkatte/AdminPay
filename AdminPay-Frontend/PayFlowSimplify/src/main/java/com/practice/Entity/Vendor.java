package com.practice.Entity;


public class Vendor {
    private String name;
    private String email;
    private String upi;
    private String status;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getUpi() {
		return upi;
	}
	
	public Vendor(String name, String email, String upi, String status) {
		super();
		this.name = name;
		this.email = email;
		this.upi = upi;
		this.status = status;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public void setUpi(String upi) {
		this.upi = upi;
	}
	
	public Vendor() {
		super();
	}
	@Override
	public String toString() {
		return "Vendor [name=" + name + ", email=" + email + ", upi=" + upi + ", status=" + status + "]";
	}
	
    
}
