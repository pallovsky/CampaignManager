DROP TABLE IF EXISTS campaigns;

 	CREATE TABLE campaigns (
 	  id INT AUTO_INCREMENT  PRIMARY KEY,
 	  name VARCHAR(250) NOT NULL,
 	  keywords VARCHAR(250) NOT NULL,
 	  bid INT NOT NULL,
 	  fund INT NOT NULL,
 	  status VARCHAR(250) NOT NULL,
 	  town VARCHAR(250) DEFAULT NULL,
 	  radius INT NOT NULL
 	);

 	INSERT INTO campaigns (name, keywords, bid, fund, status, town, radius) VALUES
 	  ('Campaign name 1','key 1', 20000, 10000, 'ON', 'Warsaw', 200),
 	  ('Campaign name 2','key 2', 30000, 8000, 'OFF', 'Warsaw', 150),
 	  ('Campaign name 3','key 3', 30000, 20000, 'ON', 'Cracow', 100);
