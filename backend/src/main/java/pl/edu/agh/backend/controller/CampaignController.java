package pl.edu.agh.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.edu.agh.backend.model.Campaign;
import pl.edu.agh.backend.repository.CampaignRepository;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("api/")
public class CampaignController {
    @Autowired
    private CampaignRepository campaignRepository;

    @GetMapping("campaigns")
    public List<Campaign> getCampaigns(){
        return this.campaignRepository.findAll();
    }
}
