-- MySQL Workbench Forward Engineering

-- -----------------------------------------------------
-- Schema CliniCan
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS CliniCan ;

-- -----------------------------------------------------
-- Schema CliniCan
-- -----------------------------------------------------
CREATE SCHEMA CliniCan DEFAULT CHARACTER SET utf8 ;
USE CliniCan ;



-- -----------------------------------------------------
-- Table Perros
-- -----------------------------------------------------
DROP TABLE IF EXISTS Perros ;

CREATE TABLE IF NOT EXISTS Perros (
  chip VARCHAR(14) NOT NULL,
  nombre VARCHAR(45) NOT NULL,
  raza VARCHAR(45) NOT NULL,
  fechaNac DATE NOT NULL,
  PRIMARY KEY (chip))
  
  
ENGINE = InnoDB;

