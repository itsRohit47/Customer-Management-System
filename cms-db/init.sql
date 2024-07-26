CREATE DATABASE CustomerDb IF NOT EXISTS;
-- Use the CustomerDb database
USE CustomerDb;

-- Create the Customers table
CREATE TABLE Customers (
    Id INT AUTO_INCREMENT PRIMARY KEY, -- Unique identifier for each customer
    FirstName VARCHAR(100) NOT NULL, -- First name of the customer
    LastName VARCHAR(100) NOT NULL, -- Last name of the customer
    Email VARCHAR(100) UNIQUE, -- Email address of the customer (must be unique)
    Phone VARCHAR(20), -- Phone number of the customer
    DateCreated DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP -- Date and time when the customer record was created
);

-- Insert sample data into the Customers table
INSERT INTO Customers (FirstName, LastName, Email, Phone, DateCreated)
VALUES
('John', 'Doe', 'john.doe@example.com', '123-456-7890', NOW()), -- John Doe's information
('Jane', 'Smith', 'jane.smith@example.com', '098-765-4321', NOW()), -- Jane Smith's information
('Alice', 'Johnson', 'alice.johnson@example.com', '111-222-3333', NOW()), -- Alice Johnson's information
('Bob', 'Brown', 'bob.brown@example.com', '222-333-4444', NOW()), -- Bob Brown's information
('Charlie', 'Davis', 'charlie.davis@example.com', '333-444-5555', NOW()), -- Charlie Davis's information
('Diana', 'Miller', 'diana.miller@example.com', '444-555-6666', NOW()), -- Diana Miller's information
('Edward', 'Wilson', 'edward.wilson@example.com', '555-666-7777', NOW()), -- Edward Wilson's information
('Fiona', 'Taylor', 'fiona.taylor@example.com', '666-777-8888', NOW()), -- Fiona Taylor's information
('George', 'Anderson', 'george.anderson@example.com', '777-888-9999', NOW()), -- George Anderson's information
('Hannah', 'Thomas', 'hannah.thomas@example.com', '888-999-0000', NOW()), -- Hannah Thomas's information
('Ian', 'Jackson', 'ian.jackson@example.com', '999-000-1111', NOW()); -- Ian Jackson's information
