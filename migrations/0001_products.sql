CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY AUTOINCREMENT,brand TEXT NOT NULL,name TEXT NOT NULL,description TEXT NOT NULL DEFAULT '',price TEXT NOT NULL DEFAULT '',image_url TEXT NOT NULL DEFAULT '',badge TEXT NOT NULL DEFAULT '',status TEXT NOT NULL DEFAULT 'In stock',featured INTEGER NOT NULL DEFAULT 1,created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP);
INSERT INTO products(brand,name,description,badge,status) VALUES
('Wahl','Magic Clip Cordless','Professional cordless clipper for fading and blending.','Bestseller','In stock'),
('Wahl','Legend+ Olive Edition','Premium cordless clipper with Precision Wedge blade.','Olive Edition','In stock'),
('Wahl','Vapor CE Championship Edition','Professional clipper engineered for fast, controlled fading.','Championship Edition','In stock'),
('Wahl','Senior 2.0','Next-generation professional Senior with modern performance.','New','Coming soon');
