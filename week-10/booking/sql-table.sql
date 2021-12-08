CREATE DATABASE flightBooking;

CREATE TABLE booking (
  id INT NOT NULL AUTO_INCREMENT,
  firstName VARCHAR(28) NOT NULL,
  lastName VARCHAR(28) NOT NULL,
  passportNumber VARCHAR(10) NOT NULL,
  bookingReference VARCHAR(6) NOT NULL,
  PRIMARY KEY(id)
);