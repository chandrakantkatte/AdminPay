package com.practice.Entity;

import java.time.LocalDateTime;

import javax.xml.crypto.Data;

public class EmailRecord {
	    private String vendorName;
	    private String upi;
	    private String message;
	    private LocalDateTime date; 
		public String getVendorName() {
			return vendorName;
		}
		public EmailRecord(String vendorName, String upi, String message, LocalDateTime date) {
			super();
			this.vendorName = vendorName;
			this.upi = upi;
			this.message = message;
			this.date = date;
		}
		public LocalDateTime getDate() {
			return date;
		}
		public void setDate(LocalDateTime date) {
			this.date = date;
		}
		public void setVendorName(String vendorName) {
			this.vendorName = vendorName;
		}
		public String getUpi() {
			return upi;
		}
		public void setUpi(String upi) {
			this.upi = upi;
		}
		public String getMessage() {
			return message;
		}
		public void setMessage(String message) {
			this.message = message;
		}
		public EmailRecord(String vendorName, String upi, String message) {
			super();
			this.vendorName = vendorName;
			this.upi = upi;
			this.message = message;
		}
		public EmailRecord() {
			super();
		}
		@Override
		public String toString() {
			return "EmailRecord [vendorName=" + vendorName + ", upi=" + upi + ", message=" + message + ", date=" + date
					+ "]";
		}
		

	   
	    
	

}
