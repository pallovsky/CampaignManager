package pl.edu.agh.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.edu.agh.backend.model.Emerald;

public interface EmeraldRepository extends JpaRepository<Emerald, Long> {
}
