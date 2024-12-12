-- SQL schema
Create table If Not Exists Person (id int, email varchar(255));
Truncate table Person;
insert into Person (id, email) values ('1', 'a@b.com');
insert into Person (id, email) values ('2', 'c@d.com');
insert into Person (id, email) values ('3', 'a@b.com');

-- Accepted
-- Runtime: 405 ms, faster than 7.26%
-- Memory Usage: 0 MB, less than 100%
-- Write your PostgreSQL query statement below
SELECT
email
FROM Person
GROUP BY email
Having Count(*) > 1 ;