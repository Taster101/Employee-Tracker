USE employee_db

INSERT INTO department 
(name)
VALUES
 ('corporate'),
 ('factory'),
 ('flight');


INSERT INTO roles
(title,salary,department_id)
VALUES
 ('Manager','500.000',1),
 ('CEO','23.000',2),
 ('Pilot','340.000',2);


INSERT INTO employee
(first_name,last_name,role_id,manager_id)
VALUES
 ('davonta','henderson',1,2),
 ('paul','mmaggy',2,1),
 ('jacop','barham',2,2);

