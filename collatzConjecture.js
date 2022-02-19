function collatzConjecturePath(number){

    let steps = 1; 

    let pathSequence = `${number}, `

    let originalValue = number

    while (number>1) {

        if (number % 2 === 0){

             number /= 2

        } else {

            number = 3 * number + 1
        }


        steps++


        if (number === 1){

            pathSequence += `${number}`

        } else if (steps % 5 === 0){

            pathSequence += `${number}\n`

        } else {

            pathSequence += `${number}, `
        }

    }

    if (steps === 1) {

        pathSequence = `${number}`
    }

    console.log(`\nThere are ${steps} steps in the Collatz Conjecture path for ${originalValue}.\n\nBelow is the path sequence:\n\n${pathSequence}`)
}
 


let iterations = 1 

while (iterations <= 50) {

    collatzConjecturePath(iterations)
    iterations++

}
  

  