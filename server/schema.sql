drop DATABASE if exists chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  userID int NOT NULL AUTO_INCREMENT,
  username varchar(15) NOT NULL,
  PRIMARY KEY (userID)
);

CREATE TABLE rooms (
  roomID int NOT NULL AUTO_INCREMENT,
  room varchar(15) NOT NULL,
  PRIMARY KEY (roomID)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  messageID int NOT NULL AUTO_INCREMENT,
  userID INT NOT NULL,
  roomID INT NOT NULL,
  text varchar(10000),
  PRIMARY KEY (messageID),
  FOREIGN KEY (userID) REFERENCES users(userID),
  FOREIGN KEY (roomID) REFERENCES rooms(roomID)
 );

/* Create other tables and define schemas for them here! */




/*
CREATE TABLE friends (
  friendID int NOT NULL AUTO_INCREMENT,
  userID int NOT NULL AUTO_INCREMENT,
);

CREATE TABLE friends_users (

) */

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

