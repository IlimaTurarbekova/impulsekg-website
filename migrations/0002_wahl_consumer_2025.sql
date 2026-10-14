INSERT INTO products(brand,name,description,price,image_url,badge,status,featured)
SELECT 'Wahl','Elite Pro','Сетевая машинка. Premium PowerDrive motor, лезвие из высокоуглеродистой стали, 10 насадок Secure Fit, 33+ длин стрижки (0,8–28 мм).','','','Consumer 2025','По запросу',0 WHERE NOT EXISTS(SELECT 1 FROM products WHERE brand='Wahl' AND name='Elite Pro');
INSERT INTO products(brand,name,description,price,image_url,badge,status,featured)
SELECT 'Wahl','Color Pro Plus','Сетевая машинка с цветовой системой насадок: 10 насадок, 33+ длин стрижки (0,8–28 мм), регулируемый рычаг.','','','Consumer 2025','По запросу',0 WHERE NOT EXISTS(SELECT 1 FROM products WHERE brand='Wahl' AND name='Color Pro Plus');
INSERT INTO products(brand,name,description,price,image_url,badge,status,featured)
SELECT 'Wahl','BaldFader','Сетевая машинка для фейдинга и плавных переходов: Precision Fade T-Blade, 8 насадок, 27+ длин стрижки.','','','Consumer 2025','По запросу',0 WHERE NOT EXISTS(SELECT 1 FROM products WHERE brand='Wahl' AND name='BaldFader');
INSERT INTO products(brand,name,description,price,image_url,badge,status,featured)
SELECT 'Wahl','Home Pro 300','Классическая сетевая машинка Wahl: высокопроизводительный мотор, регулируемый рычаг, 8 насадок и 27+ длин стрижки.','','','Consumer 2025','По запросу',0 WHERE NOT EXISTS(SELECT 1 FROM products WHERE brand='Wahl' AND name='Home Pro 300');
INSERT INTO products(brand,name,description,price,image_url,badge,status,featured)
SELECT 'Wahl','Home Pro','Сетевая машинка для домашней стрижки: мощный мотор, регулируемый рычаг, 8 насадок и 27+ длин стрижки.','','','Consumer 2025','По запросу',0 WHERE NOT EXISTS(SELECT 1 FROM products WHERE brand='Wahl' AND name='Home Pro');
INSERT INTO products(brand,name,description,price,image_url,badge,status,featured)
SELECT 'Wahl','Home Pro Basic','Базовый сетевой комплект для домашней стрижки: Precision Blade, 4 насадки и 5 длин стрижки.','','','Consumer 2025','По запросу',0 WHERE NOT EXISTS(SELECT 1 FROM products WHERE brand='Wahl' AND name='Home Pro Basic');
INSERT INTO products(brand,name,description,price,image_url,badge,status,featured)
SELECT 'Wahl','Rapid Clip','Аккумуляторная машинка: Li-Ion, до 120 минут работы, 10 насадок, 33+ длин, быстрая зарядка и USB.','','','Consumer 2025','По запросу',0 WHERE NOT EXISTS(SELECT 1 FROM products WHERE brand='Wahl' AND name='Rapid Clip');
INSERT INTO products(brand,name,description,price,image_url,badge,status,featured)
SELECT 'Wahl','Color Pro Lithium','Аккумуляторная машинка с цветными насадками: Li-Ion, до 120 минут работы, 10 насадок, USB-зарядка.','','','Consumer 2025','По запросу',0 WHERE NOT EXISTS(SELECT 1 FROM products WHERE brand='Wahl' AND name='Color Pro Lithium');
INSERT INTO products(brand,name,description,price,image_url,badge,status,featured)
SELECT 'Wahl','Self Clip 360','Машинка для самостоятельной стрижки: SmartCut blade, DualGrip360, Li-Ion, до 150 минут работы, 8 насадок, USB.','','','Consumer 2025','По запросу',0 WHERE NOT EXISTS(SELECT 1 FROM products WHERE brand='Wahl' AND name='Self Clip 360');
INSERT INTO products(brand,name,description,price,image_url,badge,status,featured)
SELECT 'Wahl','Color Pro','Аккумуляторная машинка с цветовой системой насадок: Ni-MH, до 60 минут работы, 10 насадок и 11 длин стрижки.','','','Consumer 2025','По запросу',0 WHERE NOT EXISTS(SELECT 1 FROM products WHERE brand='Wahl' AND name='Color Pro');
INSERT INTO products(brand,name,description,price,image_url,badge,status,featured)
SELECT 'Wahl','Haircut & Beard','Машинка для волос и бороды: Ni-MH, до 40 минут работы, 10 насадок, 11 длин стрижки, работа от сети/аккумулятора.','','','Consumer 2025','По запросу',0 WHERE NOT EXISTS(SELECT 1 FROM products WHERE brand='Wahl' AND name='Haircut & Beard');
INSERT INTO products(brand,name,description,price,image_url,badge,status,featured)
SELECT 'Wahl','Extreme Grip','Триммер для бороды с нескользящим корпусом: Li-Ion, до 240 минут работы, 13 усиленных насадок и 20 длин.','','','Consumer 2025','По запросу',0 WHERE NOT EXISTS(SELECT 1 FROM products WHERE brand='Wahl' AND name='Extreme Grip');
INSERT INTO products(brand,name,description,price,image_url,badge,status,featured)
SELECT 'Wahl','Color Trim','Триммер с цветными насадками: Li-Ion, до 240 минут работы, 8 насадок и 9 длин стрижки.','','','Consumer 2025','По запросу',0 WHERE NOT EXISTS(SELECT 1 FROM products WHERE brand='Wahl' AND name='Color Trim');
INSERT INTO products(brand,name,description,price,image_url,badge,status,featured)
SELECT 'Wahl','Groomsman','Компактный триммер для бороды: Ni-MH, до 60 минут работы, 4 насадки и 10 длин стрижки.','','','Consumer 2025','По запросу',0 WHERE NOT EXISTS(SELECT 1 FROM products WHERE brand='Wahl' AND name='Groomsman');
INSERT INTO products(brand,name,description,price,image_url,badge,status,featured)
SELECT 'Wahl','Mustache & Beard','Компактный батарейный триммер: высокоуглеродистое металлическое лезвие, 4 насадки и 10 длин стрижки.','','','Consumer 2025','По запросу',0 WHERE NOT EXISTS(SELECT 1 FROM products WHERE brand='Wahl' AND name='Mustache & Beard');
INSERT INTO products(brand,name,description,price,image_url,badge,status,featured)
SELECT 'Wahl','Elite Groom','Многофункциональный грумер с 4 сменными головками: Li-Ion, до 150 минут работы, 16 длин, USB и зарядная подставка.','','','Consumer 2025','По запросу',0 WHERE NOT EXISTS(SELECT 1 FROM products WHERE brand='Wahl' AND name='Elite Groom');
INSERT INTO products(brand,name,description,price,image_url,badge,status,featured)
SELECT 'Wahl','Extreme Grip Advanced','Мультитриммер с 4 сменными головками: Li-Ion, до 240 минут работы, усиленные насадки, USB.','','','Consumer 2025','По запросу',0 WHERE NOT EXISTS(SELECT 1 FROM products WHERE brand='Wahl' AND name='Extreme Grip Advanced');
INSERT INTO products(brand,name,description,price,image_url,badge,status,featured)
SELECT 'Wahl','Color Trim Advanced','Мультитриммер с 4 сменными головками и цветными насадками: Li-Ion, до 240 минут работы, USB.','','','Consumer 2025','По запросу',0 WHERE NOT EXISTS(SELECT 1 FROM products WHERE brand='Wahl' AND name='Color Trim Advanced');
INSERT INTO products(brand,name,description,price,image_url,badge,status,featured)
SELECT 'Wahl','Groomsman Pro','Многофункциональный грумер с 4 сменными головками: Ni-MH, до 60 минут работы, 4 насадки.','','','Consumer 2025','По запросу',0 WHERE NOT EXISTS(SELECT 1 FROM products WHERE brand='Wahl' AND name='Groomsman Pro');
INSERT INTO products(brand,name,description,price,image_url,badge,status,featured)
SELECT 'Wahl','Micro Lithium','Компактный персональный триммер-ручка для ухода в поездках, со съёмными моющимися головками.','','','Consumer 2025','По запросу',0 WHERE NOT EXISTS(SELECT 1 FROM products WHERE brand='Wahl' AND name='Micro Lithium');
INSERT INTO products(brand,name,description,price,image_url,badge,status,featured)
SELECT 'Wahl','Micro Groomsman 3in1','Компактный персональный триммер 3-в-1 для точной окантовки, бровей, волос в ушах и носу.','','','Consumer 2025','По запросу',0 WHERE NOT EXISTS(SELECT 1 FROM products WHERE brand='Wahl' AND name='Micro Groomsman 3in1');
INSERT INTO products(brand,name,description,price,image_url,badge,status,featured)
SELECT 'Wahl','Ear, Nose & Brow 3in1','Персональный триммер 3-в-1 для бровей, ушей и носа со съёмными моющимися головками.','','','Consumer 2025','По запросу',0 WHERE NOT EXISTS(SELECT 1 FROM products WHERE brand='Wahl' AND name='Ear, Nose & Brow 3in1');
INSERT INTO products(brand,name,description,price,image_url,badge,status,featured)
SELECT 'Wahl','Nasal Trimmer','Компактный роторный триммер для удаления волос в носу и ушах. Батарейное питание.','','','Consumer 2025','По запросу',0 WHERE NOT EXISTS(SELECT 1 FROM products WHERE brand='Wahl' AND name='Nasal Trimmer');
INSERT INTO products(brand,name,description,price,image_url,badge,status,featured)
SELECT 'Wahl','Travel Shaver','Компактный дорожный шейвер: Ni-MH, до 45 минут работы, ультраблизкое бритьё и запасная сетка.','','','Consumer 2025','По запросу',0 WHERE NOT EXISTS(SELECT 1 FROM products WHERE brand='Wahl' AND name='Travel Shaver');
INSERT INTO products(brand,name,description,price,image_url,badge,status,featured)
SELECT 'Wahl','Color Pro Combo','Комплект для семейной стрижки с Color Pro и мини-триммером для точной доработки.','','','Consumer 2025','По запросу',0 WHERE NOT EXISTS(SELECT 1 FROM products WHERE brand='Wahl' AND name='Color Pro Combo');
INSERT INTO products(brand,name,description,price,image_url,badge,status,featured)
SELECT 'Wahl','Home Pro Deluxe Combo','Комплект с сетевой машинкой и мини-триммером для окантовки и обработки линии шеи.','','','Consumer 2025','По запросу',0 WHERE NOT EXISTS(SELECT 1 FROM products WHERE brand='Wahl' AND name='Home Pro Deluxe Combo');
INSERT INTO products(brand,name,description,price,image_url,badge,status,featured)
SELECT 'Wahl','Mustache & Beard Combo','Комплект для бороды и усов с триммером и отдельным триммером для ушей и носа.','','','Consumer 2025','По запросу',0 WHERE NOT EXISTS(SELECT 1 FROM products WHERE brand='Wahl' AND name='Mustache & Beard Combo');
INSERT INTO products(brand,name,description,price,image_url,badge,status,featured)
SELECT 'Wahl','Travel Kit','Дорожный набор для груминга: персональный и мини-триммер, регулируемая насадка и комплект аксессуаров.','','','Consumer 2025','По запросу',0 WHERE NOT EXISTS(SELECT 1 FROM products WHERE brand='Wahl' AND name='Travel Kit');
INSERT INTO products(brand,name,description,price,image_url,badge,status,featured)
SELECT 'Wahl','Travel Kit Deluxe','Универсальный дорожный груминг-набор с 3 режущими головками и аксессуарами.','','','Consumer 2025','По запросу',0 WHERE NOT EXISTS(SELECT 1 FROM products WHERE brand='Wahl' AND name='Travel Kit Deluxe');
INSERT INTO products(brand,name,description,price,image_url,badge,status,featured)
SELECT 'Wahl','Travel Hair Dryer','Компактный дорожный фен 1000 Вт: 2 скорости/температурных режима, складная ручка, диффузор и насадка.','','','Consumer 2025','По запросу',0 WHERE NOT EXISTS(SELECT 1 FROM products WHERE brand='Wahl' AND name='Travel Hair Dryer');
