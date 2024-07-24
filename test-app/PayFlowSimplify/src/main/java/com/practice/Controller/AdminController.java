package com.practice.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.practice.Entity.EmailRecord;
import com.practice.Entity.Employee;
import com.practice.Entity.Vendor;
import com.practice.Entity.VendorEmails;
import com.practice.Service.AdminService;

import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {
    @Autowired
    private AdminService adminService;

    
    @PostMapping("/employee")
    public ResponseEntity<String> createEmployee(@RequestBody Employee employee) {
        // Check if the employee's email already exists
        boolean emailExists = adminService.isEmployeeEmailPresent(employee.getEmail());
        
        if (emailExists) {
            // If the email already exists, return a response indicating so
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Employee with this email already exists.");
        } else {
            // If the email does not exist, save the new employee
            adminService.createEmployee(employee);
            System.out.println("Employee added successfully: " + employee.toString());
            return ResponseEntity.ok("Employee added successfully.");
        }
    }


    @PostMapping("/vendor")
    public ResponseEntity<String> createVendor(@RequestBody Vendor vendor) {
        try {
            adminService.createVendor(vendor);
            return ResponseEntity.ok("Vendor successfully added.");
        } catch (Exception e) {
            // Assuming the exception is for a duplicate email
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Vendor with this email already exists.");
        }
    }

    
        @PostMapping("/send-emails")
        public ResponseEntity<String> sendEmails(@RequestBody VendorEmails vendorEmails) {
        	adminService.sendEmailToVendors(vendorEmails.getEmails());
        	System.out.println("sucessfully send the mail to +"+vendorEmails.toString());
            return ResponseEntity.ok("Emails sent successfully.");
        }
    


    @GetMapping("/email-records")
    public List<EmailRecord> viewEmailRecords() {
    	List<EmailRecord> list1=adminService.viewEmailRecords();
    	list1.forEach(e->System.out.println(" thid is for time "+e));
    	return list1;
    }

    @GetMapping("/employees")
    public Collection<Employee> viewAllEmployees() {
        return adminService.viewAllEmployees();
    }
    
    @GetMapping("/vendors-unsent-emails")
    public ResponseEntity<List<Vendor>> getVendorsWithUnsentEmails() {
        List<Vendor> vendors = adminService.getVendorsWithUnsentEmails();
        System.out.println("This is the unsent list: " + vendors.toString());
        return ResponseEntity.ok(vendors);
    }

    



    @GetMapping("/vendors")
    public Collection<Vendor> viewAllVendors() {
        return adminService.viewAllVendors();
    }
}

