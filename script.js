const generateArray = function(amount) {
    let returnArray = [];

    // let amountConverted = parseInt(amount)
    // amount = amountConverted
    
    amount = parseInt(amount)

    if (typeof amount === "number") {
        console.log("amount is a number")
    } else {
        console.log("amount is not a number")
        returnArray.push("error");
    }

    for (let i = 0; i < amount; i++) {
        returnArray.push(`${i}`);
        
    }

    return returnArray    
}

const loadEvent  = function() {

    console.log('az oldal betoltodott')
    console.log(generateArray(100))
    console.log(generateArray(15))
    console.log(generateArray("kutya"))
    console.log(generateArray([2]))
}

window.addEventListener("load", loadEvent)

/*
    window.addEventListener("load", () => {
       * ez is teljesen jo
    })

 */