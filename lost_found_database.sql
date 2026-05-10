-- Create users table
CREATE TABLE IF NOT EXISTS users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(100) UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create locations table
CREATE TABLE IF NOT EXISTS locations (
  location_id SERIAL PRIMARY KEY,
  location_name VARCHAR(255) NOT NULL,
  building_code VARCHAR(50),
  description TEXT
);

-- Create lost_reports table
CREATE TABLE IF NOT EXISTS lost_reports (
  lost_report_id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  item_name VARCHAR(255) NOT NULL,
  description TEXT,
  category VARCHAR(100),
  color VARCHAR(100),
  date_lost DATE NOT NULL,
  location_id INTEGER,
  contact_info VARCHAR(255) NOT NULL,
  status VARCHAR(50) DEFAULT 'Open',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (location_id) REFERENCES locations(location_id)
);

-- Create found_items table
CREATE TABLE IF NOT EXISTS found_items (
  found_item_id SERIAL PRIMARY KEY,
  item_name VARCHAR(255) NOT NULL,
  description TEXT,
  category VARCHAR(100),
  color VARCHAR(100),
  date_found DATE NOT NULL,
  location_id INTEGER,
  logged_by_user_id INTEGER,
  status VARCHAR(50) DEFAULT 'Available',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (location_id) REFERENCES locations(location_id),
  FOREIGN KEY (logged_by_user_id) REFERENCES users(user_id)
);

-- Create claims table
CREATE TABLE IF NOT EXISTS claims (
  claim_id SERIAL PRIMARY KEY,
  lost_report_id INTEGER NOT NULL,
  found_item_id INTEGER NOT NULL,
  claimant_user_id INTEGER NOT NULL,
  claim_status VARCHAR(50) DEFAULT 'Pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (lost_report_id) REFERENCES lost_reports(lost_report_id),
  FOREIGN KEY (found_item_id) REFERENCES found_items(found_item_id),
  FOREIGN KEY (claimant_user_id) REFERENCES users(user_id)
);

-- Insert sample locations
INSERT INTO locations (location_name, building_code, description) VALUES
('Library', 'LIB', 'UMBC Library'),
('Student Center', 'SC', 'Commons Student Center'),
('Administration Building', 'ADMIN', 'Main Administration Building'),
('Science Complex', 'SCI', 'Science and Engineering Building'),
('Parking Lot A', 'PA', 'Parking Area A'),
('Parking Lot B', 'PB', 'Parking Area B'),
('Athletic Center', 'AC', 'Sports and Recreation Center');

-- Insert sample user
INSERT INTO users (username, email, password_hash) VALUES
('Wilson Zhang', 'wzhang4@umbc.edu', 'hash_placeholder'),
('Michael Thomas', 'ae10220@umbc.edu', 'hash_placeholder'),
('Mete Gorgulu', 'mete1@umbc.edu', 'hash_placeholder'),
('Therisa Phan', 'tphan7@umbc.edu', 'hash_placeholder'),
('Justin Medina', 'jmedina5@umbc.edu', 'hash_placeholder')
ON CONFLICT DO NOTHING;
