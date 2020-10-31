package pl.edu.agh.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.edu.agh.backend.exception.ResourceNotFoundException;
import pl.edu.agh.backend.model.Campaign;
import pl.edu.agh.backend.repository.CampaignRepository;
import javax.validation.Valid;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

    @GetMapping("campaigns/{id}")
    public ResponseEntity<Campaign> getCampaignById(@PathVariable(value = "id") Long campaignId) throws ResourceNotFoundException {
        Campaign campaign = campaignRepository.findById(campaignId)
                .orElseThrow(() -> new ResourceNotFoundException("Campaign not found for this id :: " + campaignId));
        return ResponseEntity.ok().body(campaign);
    }

    @PostMapping("/campaigns")
    public Campaign createCampaign(@Valid @RequestBody Campaign campaign) {
        return campaignRepository.save(campaign);
    }

    @PutMapping("/campaigns/{id}")
    public ResponseEntity<Campaign> updateCampaign(@PathVariable(value = "id") Long campaignId,
                                                   @Valid @RequestBody Campaign campaignDetails) throws ResourceNotFoundException {
        Campaign campaign = campaignRepository.findById(campaignId)
                .orElseThrow(() -> new ResourceNotFoundException("Campaign not found for this id :: " + campaignId));

        campaign.setName(campaignDetails.getName());
        campaign.setKeywords(campaignDetails.getKeywords());
        campaign.setBid(campaignDetails.getBid());
        campaign.setFund(campaignDetails.getFund());
        campaign.setRadius(campaignDetails.getRadius());
        campaign.setStatus(campaignDetails.getStatus());
        campaign.setTown(campaignDetails.getTown());

        final Campaign updatedEmployee = campaignRepository.save(campaign);
        return ResponseEntity.ok(updatedEmployee);
    }

    @DeleteMapping("/campaigns/{id}")
    public Map<String, Boolean> deleteEmployee(@PathVariable(value = "id") Long campaignId)
            throws ResourceNotFoundException {
        Campaign campaign = campaignRepository.findById(campaignId)
                .orElseThrow(() -> new ResourceNotFoundException("Campaign not found for this id :: " + campaignId));

        campaignRepository.delete(campaign);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

}
