package com.practice.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.practice.Entity.EmailRecord;
import com.practice.Entity.Employee;
import com.practice.Entity.Vendor;
import com.practice.Repository.InMemoryRepository;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class AdminService {
    @Autowired
    private InMemoryRepository repository;

    @Autowired
    private JavaMailSender mailSender;

    public void createEmployee(Employee employee) {
    	
        repository.saveEmployee(employee);
    }
    public boolean isEmployeeEmailPresent(String email) {
        return repository.getAllEmployees().stream()
                         .anyMatch(e -> e.getEmail().equalsIgnoreCase(email));
    }

    
    public List<Vendor> getVendorsWithUnsentEmails() {
        return repository.getAllVendors().stream()
            .filter(vendor -> "False".equalsIgnoreCase(vendor.getStatus()))
            .collect(Collectors.toList());
    }


    
    

    public void createVendor(Vendor vendor) {
        System.out.println("Adding Vendor: " + vendor.getEmail());
        vendor.setStatus("False");
        repository.saveVendor(vendor);
        System.out.println(vendor.toString());
    }


    
    
    public void sendEmailToVendors(List<String> vendorEmails) {
        System.out.println("Sending emails to: " + vendorEmails);
        for (String email : vendorEmails) {
            System.out.println("Checking email: " + email);
            Vendor vendor = repository.getAllVendors().stream()
                    .filter(v -> v.getEmail().equalsIgnoreCase(email))
                    .findFirst().orElse(null);

            System.out.println(vendor);
            if (vendor != null) {
                String message = String.format("Sending payments to vendor %s at upi %s", vendor.getName(), vendor.getUpi());

                // Create and send the email
                SimpleMailMessage mailMessage = new SimpleMailMessage();
                mailMessage.setTo(email);
                mailMessage.setSubject("Payment Notification");
                mailMessage.setText(message);

                try {
                    mailSender.send(mailMessage);
                    System.out.println("Email sent successfully to: " + email);
                } catch (Exception e) {
                    System.err.println("Failed to send email to: " + email);
                    e.printStackTrace();
                }

                // Record the email with the current date and time
                EmailRecord emailRecord = new EmailRecord();
                emailRecord.setVendorName(vendor.getName());
                emailRecord.setUpi(vendor.getUpi());
                emailRecord.setMessage(message);
                emailRecord.setDate(LocalDateTime.now()); // Set the current date and time

                repository.addEmailRecord(emailRecord);

                // Update vendor status to "True"
                vendor.setStatus("True");
                repository.saveVendor(vendor);
            } else {
                System.err.println("Vendor not found for email: " + email);
            }
        }
    }


    public List<EmailRecord> viewEmailRecords() {
        return repository.getEmailRecords();
    }

    public Collection<Employee> viewAllEmployees() {
        return repository.getAllEmployees();
    }

//    public Collection<Vendor> viewAllVendors() {
//        return repository.getAllVendors().stream()
//        .filter(vendor -> "False".equalsIgnoreCase(vendor.getStatus()))
//        .collect(Collectors.toList());
//    }
    
    public Collection<Vendor> viewAllVendors() {
        return repository.getAllVendors();
    }
}
