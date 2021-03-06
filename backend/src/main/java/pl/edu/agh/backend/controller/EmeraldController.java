package pl.edu.agh.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.edu.agh.backend.exception.ResourceNotFoundException;
import pl.edu.agh.backend.model.Emerald;
import pl.edu.agh.backend.repository.EmeraldRepository;

import javax.validation.Valid;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("api/")
public class EmeraldController {
    @Autowired
    private EmeraldRepository emeraldRepository;

    @GetMapping("emerald/funds")
    public ResponseEntity<Emerald> getFunds()
        throws ResourceNotFoundException {
            Long emeraldId = 1L;
            Emerald emerald = emeraldRepository.findById(emeraldId)
                    .orElseThrow(() -> new ResourceNotFoundException("Emerald not found for this id :: " + emeraldId));
            return ResponseEntity.ok().body(emerald);
    }

    @PutMapping("/emerald/{id}")
    public ResponseEntity<Emerald> updateCampaign(@PathVariable(value = "id") Long emeraldId,
                                                   @Valid @RequestBody Emerald emeraldDetails) throws ResourceNotFoundException {
        Emerald emerald = emeraldRepository.findById(emeraldId)
                .orElseThrow(() -> new ResourceNotFoundException("Emerald not found for this id :: " + emeraldId));

        emerald.setFunds(emeraldDetails.getFunds());

        final Emerald updatedEmerald = emeraldRepository.save(emerald);
        return ResponseEntity.ok(updatedEmerald);
    }
}
