DROP DATABASE IF EXISTS downtime_db;

CREATE DATABASE downtime_db;

USE downtime_db;

CREATE TABLE albums (
id INT AUTO_INCREMENT,
artist_name VARCHAR(50),
album_name VARCHAR(100),
release_date DATE,
PRIMARY KEY (id)
);

CREATE TABLE books (
id INT AUTO_INCREMENT,
book_title VARCHAR(50),
author_name VARCHAR(100),
release_date DATE,
PRIMARY KEY (id)
);

CREATE TABLE movies (
id INT AUTO_INCREMENT,
movie_title VARCHAR(50),
release_date DATE,
PRIMARY KEY (id)
);

CREATE TABLE user (
id INT AUTO_INCREMENT,
first_name VARCHAR(50),
last_name VARCHAR(50),
album_id INT,
movie_id INT,
book_id INT,
FOREIGN KEY (album_id) REFERENCES albums(id),
FOREIGN KEY (movie_id) REFERENCES movies(id),
FOREIGN KEY (book_id) REFERENCES books(id),
PRIMARY KEY (id)
);