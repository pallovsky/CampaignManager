DROP TABLE IF EXISTS campaigns;

 	CREATE TABLE campaigns (
 	  id INT AUTO_INCREMENT  PRIMARY KEY,
 	  name VARCHAR(250) NOT NULL,
 	  keywords VARCHAR(250) NOT NULL,
 	  bid INT NOT NULL,
 	  fund INT NOT NULL,
 	  status VARCHAR(250) NOT NULL,
 	  town VARCHAR(250) DEFAULT NULL,
 	  radius INT NOT NULL,
 	  product_id INT NOT NULL
 	);

 	INSERT INTO campaigns (name, keywords, bid, fund, status, town, radius, product_id) VALUES
 	  ('Campaign name 1','key 1', 20000, 10000, 'ON', 'Warsaw', 200, 1),
 	  ('Campaign name 2','key 2', 30000, 8000, 'OFF', 'Warsaw', 150, 1),
 	  ('Campaign name 3','key 3', 30000, 20000, 'ON', 'Cracow', 100, 2);

DROP TABLE IF EXISTS products;

CREATE TABLE products (
 	id INT AUTO_INCREMENT  PRIMARY KEY,
 	name VARCHAR(250) NOT NULL
);

 	INSERT INTO products (name) VALUES
 	  ('Product 1'),
 	  ('Product 2'),
 	  ('Product 3');