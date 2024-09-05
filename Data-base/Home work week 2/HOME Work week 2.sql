
CREATE DATABASE article_db;
CREATE TABLE article(
    id INT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL
);

CREATE TABLE author(
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE article_author(
    article_id INT NOT NULL,
    author_id INT NOT NULL,
    PRIMARY KEY(article_id, author_id),
    FOREIGN KEY(article_id) REFERENCES article(id) ON DELETE CASCADE,
    FOREIGN KEY(author_id) REFERENCES author(id) ON DELETE CASCADE
);

CREATE TABLE tag(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE article_tag(
    article_id INT NOT NULL,
    tag_id INT NOT NULL,
    PRIMARY KEY(article_id, tag_id),
    FOREIGN KEY(article_id) REFERENCES article(id) ON DELETE CASCADE,
FOREIGN KEY (tag_id) REFERENCES tag(id) on DELETE CASCADE);


INSERT INTO article(id, title, content) VALUES
(1, 'BREAKING NEWS:Water is wet!', 'Scientists have discovered how that water is wet,...'),
(2, 'Heavy Snowfall Expected this Weekend', 'Lots of snow is expected...'),
(3, 'BREAKING NEWS: These 10 Clickbait Titles Are Bad for Your Health, Number 7 Will SHOCK You!', 'Haha, you clicked! ...');

INSERT INTO author(id,name) VALUES
(1, 'James Smith'),
(2, 'Jane Jones'),
(3, 'Aliya Awad'),
(4, 'Igor Vladimir'),
(5, 'Kim Jensen');

INSERT INTO article_author(article_id, author_id) VALUES
(1, 1),(1,2),(2,3),(2,4),(3,2),(3,5);

INSERT INTO tag(name) VALUES
('science'), ('breaking'), ('weather'), ('winter'), ('clickbait');

INSERT INTO article_tag(article_id, tag_id) VALUES
(1,(SELECT id FROM tag WHERE name = 'science')),
(1,(SELECT id FROM tag WHERE name = 'breaking')),
(2,(SELECT id FROM tag WHERE name = 'weather')),
(2,(SELECT id FROM tag WHERE name = 'winter')),
(3,(SELECT id FROM tag WHERE name = 'clickbait')),
(3,(SELECT id FROM tag WHERE name = 'breaking'));

/*Get all the tasks assigned to Pavel*/
SELECT task.user_id, task.title, task.status_id
FROM task
JOIN user u ON task.user_id = u.id
WHERE u.name LIKE '%Pavel%'

/*Find how many tasks each user is responsible for;*/
SELECT u.id AS user_id, u.name AS user_name, COUNT(t.id) AS task_count
FROM user u
LEFT JOIN task t ON u.id = t.user_id
GROUP BY u.id, u.name
ORDER BY user_name;

/*Find how many tasks each user is responsible for and how many tasks are done;*/
SELECT u.id AS user_id, u.name AS user_name, COUNT(t.id) AS done_task_count
FROM user u
LEFT JOIN task t ON u.id = t.user_id
LEFT JOIN status s ON t.status_id = s.id
WHERE s.name = 'done'
GROUP BY u.id, u.name
ORDER BY user_name;

INSERT INTO task (title, description, created, updated, due_date, status_id, user_id)
VALUES ('New Task Title', 'bake bred', '2024-09-01 10:00:00', '2024-09-01 10:00:00', '2024-12-31 23:59:59', 1, 1);

UPDATE task
SET title = 'Updated Task Title'
WHERE id = 5;

UPDATE task
SET due_date = '2024-11-01 10:00:00'
WHERE id = 5;

UPDATE task
SET status_id = 2
WHERE id = 5;

UPDATE task
SET status_id = 3
WHERE id = 5;

DELETE FROM task
WHERE id = 5;


CREATE DATABASE school;
USE school;

CREATE TABLE `Class` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `begins` DATE NOT NULL,
  `ends` DATE NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `Student` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(255) NULL,
  `class_id` INT(10) UNSIGNED,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_class` FOREIGN KEY (`class_id`) REFERENCES `Class` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



CREATE DATABASE hyf_lesson2

SELECT t.*
FROM task t
JOIN user_task ut ON t.id = ut.task_id
JOIN user u ON ut.user_id = u.id
WHERE u.email LIKE '%@spotify.com';


SELECT t.*
FROM task t
JOIN user_task ut ON t.id = ut.task_id
JOIN user u ON ut.user_id = u.id
JOIN status s ON t.status_id = s.id
WHERE u.name = 'Donald Duck'
  AND s.name = 'Not started';

SELECT t.*
FROM task t
JOIN user_task ut ON t.id = ut.task_id
JOIN user u ON ut.user_id = u.id
WHERE u.name = 'Maryrose Meadows'
  AND MONTH(t.created) = 9;

SELECT 
    MONTH(created) AS month,
    COUNT(*) AS task_count
FROM task
GROUP BY MONTH(created)
ORDER BY MONTH(created);

USE school;
-- Create an index on the 'name' column of the 'Student' table
CREATE INDEX idx_name ON Student (name);

-- Add the 'status' column to the 'Class' table
ALTER TABLE `Class`
ADD COLUMN `status` ENUM('not-started', 'ongoing', 'finished') NOT NULL DEFAULT 'not-started';
