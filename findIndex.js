// Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1.

function search(array, forNumber) {

    let indexFound = false 

    for (let i = 0; i < array.length; i++){

        if (array[i] === forNumber) {

            indexFound = true 
            indexValue = i 
        }
    }

    if (indexFound) {

        return indexValue
        
    } else {

        return -1
    }
}