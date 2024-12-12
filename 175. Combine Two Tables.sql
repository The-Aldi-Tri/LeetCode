-- SQL schema
Create table If Not Exists Person (personId int, firstName varchar(255), lastName varchar(255));
Create table If Not Exists Address (addressId int, personId int, city varchar(255), state varchar(255));
Truncate table Person;
insert into Person (personId, lastName, firstName) values ('1', 'Wang', 'Allen');
insert into Person (personId, lastName, firstName) values ('2', 'Alice', 'Bob');
Truncate table Address;
insert into Address (addressId, personId, city, state) values ('1', '2', 'New York City', 'New York');
insert into Address (addressId, personId, city, state) values ('2', '3', 'Leetcode', 'California');

-- Accepted
-- Runtime: 655 ms, faster than 5.01%
-- Memory Usage: 0 MB, less than 100%
-- Write your PostgreSQL query statement below
SELECT
person.firstName,
person.lastName,
address.city,
address.state
FROM person
LEFT JOIN address
ON person.personId = address.personId;