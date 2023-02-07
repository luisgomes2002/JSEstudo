let baralho1 = ["Ae", "2e", "3e", "4e", "5e", "6e", "7e", "8e", "9e", "10e", "Je", "Qe", "Ke",
    "Ap", "2p", "3p", "4p", "5p", "6p", "7p", "8p", "9p", "10p", "Jp", "Qp", "Kp",
    "Ac", "2c", "3c", "4c", "5c", "6c", "7c", "8c", "9c", "10c", "Jc", "Qc", "Kc",
    "Ao", "2o", "3o", "4o", "5o", "6o", "7o", "8o", "9o", "10o", "Jo", "Qo", "Ko"
]

let mao = []

embaralhar(baralho1)

baralho1.forEach(baralho1 => console.log(baralho1))

function embaralhar(array){
    let currentIndex = array.length

    while(currentIndex != 0){
        let randomIndex = Math.floor(Math.random() * array.length)
        currentIndex-=1

        let temp = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temp
    }

    return array
}
