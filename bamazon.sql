DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INTEGER,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("lamp ", "furniture", 12.25,  12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("bike", "outdoor equipment", 27.50, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("computer", "electronics", 100.86,  15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Apple Watch ", "electronics", 250.25,  5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("dress", "clothing ", 17.50, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("patio furniture", "outdoor equipment", 100.50,  2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("sofa ", "furniture", 225.25,  8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("sandals", "clothing", 27.50, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("speakers", "electronics", 14.86,  11);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("printer", "electronics", 169.86,  16);