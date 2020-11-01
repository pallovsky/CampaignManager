package pl.edu.agh.backend.model;

import javax.persistence.*;

@Entity
@Table(name= "campaigns")
public class Campaign {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "keywords")
    private String keywords;

    @Column(name = "bid")
    private Integer bid;

    @Column(name = "fund")
    private Integer fund;

    @Column(name = "status")
    private String status;

    @Column(name = "town")
    private String town;

    @Column(name = "radius")
    private Integer radius;

    @ManyToOne
    @JoinColumn(name="product_id", nullable=false)
    private Product product;

    public Campaign() {}

    public Campaign(String name, String keywords, Integer bid, Integer fund, String status, String town, Integer radius) {
        this.name = name;
        this.keywords = keywords;
        this.bid = bid;
        this.fund = fund;
        this.status = status;
        this.town = town;
        this.radius = radius;
    }

    public Campaign(String name, String keywords, Integer bid, Integer fund, String status, String town, Integer radius, Product product) {
        this.name = name;
        this.keywords = keywords;
        this.bid = bid;
        this.fund = fund;
        this.status = status;
        this.town = town;
        this.radius = radius;
        this.product = product;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getKeywords() {
        return keywords;
    }

    public void setKeywords(String keywords) {
        this.keywords = keywords;
    }

    public Integer getBid() {
        return bid;
    }

    public void setBid(Integer bid) {
        this.bid = bid;
    }

    public Integer getFund() {
        return fund;
    }

    public void setFund(Integer fund) {
        this.fund = fund;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getTown() {
        return town;
    }

    public void setTown(String town) {
        this.town = town;
    }

    public Integer getRadius() {
        return radius;
    }

    public void setRadius(Integer radius) {
        this.radius = radius;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}