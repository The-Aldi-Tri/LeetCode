-- SQL schema
Create table If Not Exists Employee (id int, name varchar(255), salary int, managerId int);
Truncate table Employee;
insert into Employee (id, name, salary, managerId) values ('1', 'Joe', '70000', '3');
insert into Employee (id, name, salary, managerId) values ('2', 'Henry', '80000', '4');
insert into Employee (id, name, salary, managerId) values ('3', 'Sam', '60000', NULL);
insert into Employee (id, name, salary, managerId) values ('4', 'Max', '90000', NULL);

-- Accepted
-- Runtime: 293 ms, faster than 42.17%
-- Memory Usage: 0 MB, less than 100%
-- Write your PostgreSQL query statement below
SELECT
e1.name AS "Employee"
FROM employee e1
INNER JOIN employee e2
ON e1.managerid=e2.id
WHERE e1.salary>e2.salary;