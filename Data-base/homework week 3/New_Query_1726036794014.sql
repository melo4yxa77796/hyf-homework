-- Active: 1724582665781@@127.0.0.1@3308@restaurant
-- Create the Meal table
CREATE TABLE Meal (
    id INT PRIMARY KEY AUTO_INCREMENT,  -- Auto-incrementing primary key for Meal
    title VARCHAR(255) NOT NULL,         -- Title of the meal
    description TEXT,                    -- Description of the meal
    location VARCHAR(255),               -- Location of the meal
    `when` DATETIME NOT NULL,            -- Date and time of the meal
    max_reservations INT NOT NULL,       -- Maximum number of reservations allowed
    price DECIMAL(10, 2) NOT NULL,       -- Price of the meal
    created_date DATE NOT NULL           -- Date the meal entry was created
);

-- Create the Reservation table
CREATE TABLE Reservation (
    id INT PRIMARY KEY AUTO_INCREMENT,          -- Auto-incrementing primary key for Reservation
    number_of_guests INT NOT NULL,              -- Number of guests in the reservation
    meal_id INT,                                -- Foreign key reference to the Meal table
    created_date DATE NOT NULL,                 -- Date the reservation was created
    contact_phonenumber VARCHAR(20),            -- Contact phone number of the person making the reservation
    contact_name VARCHAR(255),                  -- Contact name of the person making the reservation
    contact_email VARCHAR(255),                 -- Contact email of the person making the reservation
    FOREIGN KEY (meal_id) REFERENCES Meal(id)   -- Foreign key constraint linking to the Meal table
);

-- Create the Review table
CREATE TABLE Review (
    id INT PRIMARY KEY AUTO_INCREMENT,        -- Auto-incrementing primary key for Review
    title VARCHAR(255) NOT NULL,              -- Title of the review
    description TEXT,                         -- Description of the review
    meal_id INT,                              -- Foreign key reference to the Meal table
    stars INT CHECK (stars >= 1 AND stars <= 5), -- Stars rating, with a constraint of 1 to 5
    created_date DATE NOT NULL,               -- Date the review was created
    FOREIGN KEY (meal_id) REFERENCES Meal(id) -- Foreign key constraint linking to the Meal table
);

INSERT INTO Meal (title, description, location, `when`, max_reservations, price, created_date)
VALUES ('Meal Title', 'Meal Description', 'Location', '2024-09-09 12:00:00', 50, 29.99, '2024-09-01');

SELECT * FROM Meal WHERE id = 1;

UPDATE Meal 
SET title = 'New Title', description = 'Updated Description', price = 35.99 
WHERE id = 1;

DELETE FROM Meal WHERE id = 1;

INSERT INTO Reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (5, 1, '2024-09-05', '1234567890', 'John Doe', 'john@example.com');

SELECT * FROM Reservation WHERE id = 1;

UPDATE Reservation 
SET contact_name = 'Jane Doe', number_of_guests = 4 
WHERE id = 1;

INSERT INTO Review (title, description, meal_id, stars, created_date)
VALUES ('Great Meal', 'The food was excellent!', 1, 5, '2024-09-06');

SELECT * FROM Review WHERE id = 1;

UPDATE Review 
SET title = 'Good Meal', stars = 4 
WHERE id = 1;

SELECT * FROM Meal WHERE price < 90;

SELECT * FROM Meal 
WHERE max_reservations > (
    SELECT COUNT(*) FROM Reservation WHERE Reservation.meal_id = Meal.id
);

SELECT * FROM Meal WHERE title LIKE '%Rød grød med%';

SELECT * FROM Meal WHERE created_date BETWEEN '2024-01-01' AND '2024-12-31';

SELECT * FROM Meal LIMIT 5;

SELECT DISTINCT Meal.* 
FROM Meal 
JOIN Review ON Meal.id = Review.meal_id 
WHERE Review.stars > 4;

SELECT * FROM Reservation WHERE meal_id = 1 ORDER BY created_date;

SELECT Meal.*, AVG(Review.stars) AS average_stars
FROM Meal
LEFT JOIN Review ON Meal.id = Review.meal_id
GROUP BY Meal.id
ORDER BY average_stars DESC;
