const generateCards = (num) => {
    num = parseInt(num)


    let arr = []

    for (let i = 0; i < num; i++) {
        let formatted = i.toLocaleString('en-US', {
            minimumIntegerDigits: 4,
            useGrouping: false
          })
        arr.push(formatted);  
    }

    return arr

}

const loadEvent  = function() {
    console.log('az oldal betoltodott')

    const root = document.getElementById("root")
    const list = generateCards(22)

    for (const item of list) {
    root.insertAdjacentHTML("beforeend", `<div> ${item} </div>`);
    }
}
window.addEventListener("load", loadEvent)

/* 

ToDo: hf uj function ahanyat generálunk ugy irja ki a szamokat pl 200 -> 001 002 003 ... 200

Todo: css a szamok kartya formamban jelenjenek meg

*/

