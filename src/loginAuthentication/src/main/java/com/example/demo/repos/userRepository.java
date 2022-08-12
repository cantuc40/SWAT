package com.example.demo.repos;
import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.demo.models.User;

public interface userRepository extends MongoRepository<User, String> {

    Optional<User> findByUsername(String username);
    Boolean usernameExists(String username);
    Boolean emailExists(String email);
    
}
