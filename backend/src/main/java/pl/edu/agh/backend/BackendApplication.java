package pl.edu.agh.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import pl.edu.agh.backend.repository.CampaignRepository;
import pl.edu.agh.backend.repository.EmeraldRepository;
import pl.edu.agh.backend.repository.ProductRepository;

@SpringBootApplication
public class BackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

    @Autowired
    private CampaignRepository campaignRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private EmeraldRepository emeraldRepository;
}
