USE tracker_db;

INSERT INTO department(name)
VALUES ("Front of House"), 
("Back of House"), 
("HR"), 
("Management");

INSERT INTO role(title, salary, department_id)
VALUES ("Server", 35000, 1), 
("Host/Hostess", 20000, 1), 
("Executive Chef", 65000, 2), 
("Chef", 40000, 2), 
("Dishwasher", 15000, 2), 
("HR Coordinator", 85000, 3), 
("HR Specialist", 70000, 3), 
("Regional Manager", 105000, 4), 
("Staff Lead", 60000, 4), 
("Floor Manager", 70000, 4);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("Billy", "Franks", 3, NULL), 
("Shania", "Woods", 6, NULL), 
("Doug", "Winters", 8, NULL), 
("Tony", "Laris", 1, 3), 
("Sarah", "Tolins", 2, 3), 
("John", "Sarna", 4, 1), 
("Arthur", "Inta", 7, 2), 
("Joseph", "Tugis", 5, 3), 
("Misha", "Sarkov", 7, 6), 
("Tara", "Tiegs", 9, 3), 
("William", "Johnston", 10, 3);