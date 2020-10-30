package pl.edu.agh.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.edu.agh.backend.model.Campaign;

public interface CampaignRepository extends JpaRepository<Campaign, Long> {
}
