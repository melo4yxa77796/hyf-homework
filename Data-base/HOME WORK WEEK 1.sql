-- Active: 1724582665781@@127.0.0.1@3308@hyf_lesson1
Select COUNT(*) as total_tasks from task ;
/*Find out how many tasks are in the task table*/

SELECT COUNT(*) AS invalid_due_date_count FROM task WHERE due_date IS NULL;OR due_date = '';
/*Find out how many tasks in the task table do not have a valid due date*/

SELECT *
FROM task
WHERE status_id = 'Done';
/*Find all the tasks that are marked as done*/


SELECT *
FROM task
WHERE status_id <> 'Done';
/*Find all the tasks that are marked as not done*/

SELECT *
FROM task
ORDER BY created DESC;
/*Get all the tasks, sorted with the most recently created first.*/


SELECT *
FROM task
ORDER BY created DESC
LIMIT 1;
/*Get the single most recently created task.*/

SELECT title, due_date
FROM task
WHERE title LIKE '%database%'
or description LIKE '%database%';
/*Get the title and due date of all tasks where the title or description contains database.*/

SELECT title, status_id
FROM task
/*Get the title and status (as text) of all tasks*/

SELECT status_id, COUNT(*) as total_count
FROM task
GROUP BY status_id;
/*Get the name of each status, along with a count of how many tasks have that status*/

SELECT s.status_name, COUNT(t.id) AS task_count
FROM tasks t
JOIN status_table s ON t.status = s.status_id
GROUP BY s.status_name
ORDER BY task_count DESC;
/*Get the names of all statuses, sorted by the status with most tasks first.*/
