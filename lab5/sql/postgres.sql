CREATE TABLE student_record (
    id          SERIAL PRIMARY KEY,
    full_name   VARCHAR(100) NOT NULL,
    group_code  VARCHAR(100) NOT NULL
);

INSERT INTO student_record (full_name, group_code)
VALUES ('Андрій', '6.1214-пі');