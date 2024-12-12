-- SQL Schema
Create table If Not Exists Customers (id int, name varchar(255));
Create table If Not Exists Orders (id int, customerId int);
Truncate table Customers;
insert into Customers (id, name) values ('1', 'Joe');
insert into Customers (id, name) values ('2', 'Henry');
insert into Customers (id, name) values ('3', 'Sam');
insert into Customers (id, name) values ('4', 'Max');
Truncate table Orders;
insert into Orders (id, customerId) values ('1', '3');
insert into Orders (id, customerId) values ('2', '1');

-- Accepted
-- Runtime: 398 ms, faster than 7.70%
-- Memory Usage: 0 MB, less than 100%
-- Write your PostgreSQL query statement below
SELECT
c.name AS "Customers"
FROM Customers AS c
LEFT JOIN Orders AS o
ON c.id = o.customerId
WHERE customerId IS NULL;