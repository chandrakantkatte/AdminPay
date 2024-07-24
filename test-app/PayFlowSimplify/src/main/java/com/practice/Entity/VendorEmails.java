package com.practice.Entity;

import java.util.List;

public class VendorEmails {

	  private List<String> emails;

	public List<String> getEmails() {
		return emails;
	}

	public void setEmails(List<String> emails) {
		this.emails = emails;
	}

	public VendorEmails(List<String> emails) {
		super();
		this.emails = emails;
	}

	@Override
	public String toString() {
		return "VendorEmails [emails=" + emails + "]";
	}

	public VendorEmails() {
		super();
	}
	  
	  
}
