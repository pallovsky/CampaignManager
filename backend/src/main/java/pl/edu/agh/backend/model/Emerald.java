package pl.edu.agh.backend.model;

import javax.persistence.*;

@Entity
@Table(name = "emerald")
public class Emerald {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "funds")
    private long funds;

    public Emerald() {
    }

    public Emerald(long funds) {
        this.funds = funds;
    }

    public long getFunds() {
        return funds;
    }

    public void setFunds(long funds) {
        this.funds = funds;
    }
}
