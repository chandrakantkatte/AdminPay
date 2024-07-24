package com.practice.Repository;

import org.springframework.stereotype.Repository;

import com.practice.Entity.EmailRecord;
import com.practice.Entity.Employee;
import com.practice.Entity.Vendor;

import java.util.*;
import java.util.stream.Collectors;

@Repository
public class InMemoryRepository {
    private final Map<String, Employee> employees = new HashMap<>();
    private final Map<String, Vendor> vendors = new HashMap<>();
    private final List<EmailRecord> emailRecords = new ArrayList<>();

    public void saveEmployee(Employee employee) {
        employees.put(employee.getEmail(), employee);
    }

    public void saveVendor(Vendor vendor) {
        vendors.put(vendor.getEmail(), vendor);
    }

    public void addEmailRecord(EmailRecord emailRecord) {
        emailRecords.add(emailRecord);
    }

    public List<EmailRecord> getEmailRecords() {
    	
        return emailRecords;
    }

    public Collection<Employee> getAllEmployees() {
        return employees.values();
    }
    
 // InMemoryRepository.java
    public Collection<Vendor> getUnsentVendors() {
        return vendors.values().stream()
                .filter(vendor -> "False".equals(vendor.getStatus()))
                .collect(Collectors.toList());
    }


    public Collection<Vendor> getAllVendors() {
        return vendors.values();
    }

    public Vendor getVendorByEmail(String email) {
        return vendors.get(email);
    }
}
