/*
from youtuber: Success in Tech

prompt and requirements:
 - 4 sizes of parking spot S, M, L, XL
 - allow to put smaller car in bigger lots

come up with a clas hierarchy!
class: Parking lot, Vehicle, Parking Spot
*/

// abstract class vehicle becase all the cars have stuff in common! like license plate

class Vehicle {
  licensePlate //string
  color //string
  Model //string ex: Toyota
  Make //string ex: Highlander
}

class Motorcycle extends Vehicle {
  size: S
}

class Car extends Vehicle {
  size: M
}

class Truck extends Vehicle {
  size: L
}

class Bus extends Vehicle {
  size: XL
}

//we need a sort of big system bc we need methods or functions to place car in the spot

class ParkingLot {
  - zipCode //integer. we assume theremay be more than one parking lot so we need to identify the parkig lot
  - placeVehicle(vehicle) //return a parkingspot (so we need a parking spot class!)
}

const spotSizeEnum = {"S", "M", "L", "XL"};
//or// use JS primitive data type Symbol(). It will ensure type safety of the enum as each symbol value is guaranteed by JavaScript to be unique, i.e. Symbol() != Symbol()

class ParkingSpot {
  - id
  - floorlvl
  - size = //S,M,L,or XL//very crucial! since we have different size vehicle
}