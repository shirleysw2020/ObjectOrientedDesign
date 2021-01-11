class Car {
  license
  location
  driver
  reservation
  trips
}

class Person {
  id
  name
  address
  currentLocation
}

class Driver extends Person {
  car
  availability //boolean
  getDriverLocation()
  acceptTrip() //notify rider
  declineTrip()
  pickUpRider()
  dropOffRider()
}

class Rider extends Person {
  submitRideRequest() //see ridefare
  checkETA()
}

class Platform {
  region
  drivers
  getavailbleCars()
  calculateETA()
  calculateFare()
  bookride()
}