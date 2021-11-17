const generateArray = function(amount) {
    let returnArray = [];

    // let amountConverted = parseInt(amount)
    // amount = amountConverted
    
    amount = parseInt(amount)
    // console.log(amount)

    if (!Number.isNaN(amount)) {
        // console.log("amount is a number")
    } else {
        // console.log("amount is not a number")
        returnArray.push("error");
    }

    for (let i = 0; i < amount; i++) {
        returnArray.push(`${i}`);
        
    }

    return returnArray    
}

const loadEvent  = function() {
    console.log('az oldal betoltodott')
/* 
    console.log(generateArray('100'))
    console.log(generateArray(15))
    console.log(generateArray("kutya"))
    console.log(generateArray([2]))
*/
    const root = document.getElementById("root")
    const list = generateArray(4)

    if (list[0] !== "error") {
        for (const item of list) {
            root.insertAdjacentHTML("beforeend", `<div> ${item} </div>`);
        }
    }
}
window.addEventListener("load", loadEvent)

/*
    window.addEventListener("load", () => {
       * ez is teljesen jo
    })

 */


/* 

todo: hf uj function ahanyat generálunk ugy irja ki a szamokat pl 200 -> 001 002 003 ... 200

todo: css a szamok kartya formamban jelenjenek meg

*/