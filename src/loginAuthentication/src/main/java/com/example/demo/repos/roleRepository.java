package com.example.demo.repos;

import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.demo.models.ERole;
import com.example.demo.models.Role;

public interface roleRepository extends MongoRepository<Role, String> {

    Optional<Role> findByName(ERole name);
    
}
