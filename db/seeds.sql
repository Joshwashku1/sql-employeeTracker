INSERT INTO department (name)
VALUES  ("Sales"),
        ("Engineering"),
        ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES  ("Lead",45000,1),
        ("Associate",40000,3),
        ("Entry",30000,1),
        ("Associate",50000,2),
        ("Entry",40000,3),
        ("Senior",100000,2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Joshua","Hamann",3,null),
        ("Jim","Carrey",4,null),
        ("James","Swidrak",3,null),
        ("Johnathon","Simmonds",1,1),
        ("Jon","Belushi",4,2),
        ("Jimmy","John",6,5);
