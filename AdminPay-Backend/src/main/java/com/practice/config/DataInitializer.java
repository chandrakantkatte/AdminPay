//package com.practice.config;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.stereotype.Component;
//
//import com.practice.Entity.Vendor;
//import com.practice.Repository.InMemoryRepository;
//
//@Component
//public class DataInitializer implements CommandLineRunner {
//
//    @Autowired
//    private InMemoryRepository repository;
//
//    @Override
//    public void run(String... args) throws Exception {
//        Vendor vendor1 = new Vendor("Anil Garje", "anil.garje97@gmail.com", "upi123");
//        Vendor vendor2 = new Vendor("Omkar Landge", "omkar.landge04@gmail.com", "upi456");
//        
//        Vendor vendor3 = new Vendor("Shrinivas DJ", "shrinivasdj18@gmail.com", "upi789");
//
//        repository.saveVendor(vendor1);
//        repository.saveVendor(vendor2);
//        repository.saveVendor(vendor3);
//
//        // Debug: Print all vendors to verify they are added
//        System.out.println("All vendors:");
//        repository.getAllVendors().forEach(v -> System.out.println(v));
//    }
//}
