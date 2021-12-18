/*

According to the lodash documentation, _.drop creates a slice of an array with n elements dropped from the beginning.

Your challenge is to write your own version using vanilla JavaScript.

https://edabit.com/challenge/NMdKxEradTmpNnomZ

*/


function dropIndexes(array, indexes = 1) {

    if (indexes > array.length){

        return array = []

    } else {

        while (indexes > 0) {

            array.shift()

            indexes--
        }
    }

    return array 

}

