package pl.edu.agh.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.edu.agh.backend.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
