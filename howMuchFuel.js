// A vehicle needs 10 times the amount of fuel than the distance it travels. However, it must always carry a minimum of 100 fuel before setting off.
// https://edabit.com/challenge/YMWDcSuYwYvve3HZj

function calculateFuel(tripMileage){

    if (tripMileage < 10) {

        return 100

    }else {

        tripMileage*10
    }


}

/* 

Note to self: 

These are simple problems but I am trying to get better at 
naming variables in a way that helps code readability. 

For example, in edabit the parameter was simply named 'n'. I initially 
settled on lengthOfTrip but then decided tripMileage was better as length
does not imply a unit but mileage does. 


*/ 