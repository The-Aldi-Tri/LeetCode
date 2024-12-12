-- SQL schema
Create table If Not Exists Person (Id int, Email varchar(255));
Truncate table Person;
insert into Person (id, email) values ('1', 'john@example.com');
insert into Person (id, email) values ('2', 'bob@example.com');
insert into Person (id, email) values ('3', 'john@example.com');

-- Accepted
-- Runtime: 434 ms, faster than 9.35%
-- Memory Usage: 0 MB, less than 100%
-- Write your PostgreSQL query statement below
DELETE
FROM Person WHERE id NOT IN (
    SELECT min(id)
    FROM person
    GROUP BY email
)