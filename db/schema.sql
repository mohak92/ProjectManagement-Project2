DROP DATABASE IF EXISTS projectmanagerdb;
CREATE DATABASE projectmanagerdb;

CREATE TABLE projects (
	id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
	userid varchar(50) NOT NULL,
	projectname varchar(50) DEFAULT NULL,
	projectphase varchar(50) DEFAULT NULL,
	duedate DATE(50),NOT NULL,
    
  Primary Key(id)
);

CREATE TABLE tasks (
	id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
	userid varchar(50) NOT NULL,
	projectid varchar(50) NOT NULL,
	taskname varchar(50) NOT NULL,
	duedate DATE(expression),NOT NULL,
  
  Primary Key (id)
);


