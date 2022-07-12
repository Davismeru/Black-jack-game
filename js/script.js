const cards = [
	"img/a.png",
	"img/1.png",
	"img/2.png",
	"img/3.png",
	"img/4.png",
	"img/5.png",
	"img/6.png",
	"img/7.png",
	"img/8.png",
	"img/9.png",
	"img/10.png",
	"img/j.png",
	"img/q.jpg",
	"img/k.jpg"
]

const slot_1 = document.querySelector('.slot-1')
const slot_2 = document.querySelector('.slot-2')

const pickBtn = document.getElementById('pickBtn')
pickBtn.addEventListener('click', ()=> {
	if(generatedNumbers.length < 1) {

		const firstCard = Math.floor(Math.random() * 12) + 1
		generatedNumbers.push(firstCard)
		const secondCard = Math.floor(Math.random() * 11) + 2
		generatedNumbers.push(secondCard)
		displayCard(firstCard, slot_1)
		displayCard(secondCard, slot_2)
		sum(firstCard, secondCard)
	}
})

let generatedNumbers = []

const total = document.querySelector('.total')
function sum(num1, num2, drawnCard) {
	if(num1 === 1 || num2 === 1) {
		num1 = 11
		num2 = 11
	}
	let totalSum = num1 + num2
	total.innerHTML = `<h1>${totalSum}</h1>`
	messageDisplay(totalSum)
}

const message = document.getElementById('message')
function messageDisplay(value) {
	if(value < 21) {
		message.textContent = "Draw another card"
	} else if(value === 21) {
		message.textContent = "Blackjack, You won!!!"
	} else {
		message.textContent = "You loose"
	}
}

const slot_3 = document.querySelector('.slot-3')
function drawCard() {
	const thirdCard = Math.floor(Math.random() * 10) + 3
	generatedNumbers.push(thirdCard)

	let sumation = 0
	for(let i = 0; i < generatedNumbers.length; i++) {
		if(sumation < 21) {
			sumation += generatedNumbers[i]
			total.innerHTML = `<h1>${sumation}</h1>`
			displayCard(thirdCard, slot_3)
	}
	messageDisplay(sumation)
}
}

const drawBtn = document.getElementById('drawBtn')
drawBtn.addEventListener('click', ()=> {
	if(message.textContent === "Draw another card") {
		drawCard()
	}
})

const newBtn = document.getElementById('newBtn')
newBtn.addEventListener('click', ()=> {
	newGame()
})

function newGame() {
	slot_1.innerHTML = '<img src="img/back.jpeg">'
	slot_2.innerHTML = '<img src="img/back.jpeg">'
	slot_3.innerHTML = '<img src="img/back.jpeg">'
	total.innerHTML = ""
	generatedNumbers = []
	message.innerText = "_"
}

function displayCard(card, slot) {
	for(i = 0; i < cards.length; i++) {
		if(card === 11 || card === 1) {
			slot.innerHTML = `<img src = "${cards[0]}">`
		} else if(card === 2) {
			slot.innerHTML = `<img src = "${cards[2]}">`
		} else if(card === 3) {
			slot.innerHTML = `<img src = "${cards[3]}">`
		} else if(card === 4) {
			slot.innerHTML = `<img src = "${cards[4]}">`
		} else if(card === 5) {
			slot.innerHTML = `<img src = "${cards[5]}">`
		} else if(card === 6) {
			slot.innerHTML = `<img src = "${cards[6]}">`
		} else if(card === 7) {
			slot.innerHTML = `<img src = "${cards[7]}">`
		} else if(card === 8) {
			slot.innerHTML = `<img src = "${cards[8]}">`
		} else if(card === 9) {
			slot.innerHTML = `<img src = "${cards[9]}">`
		} else if(card === 10) {
			slot.innerHTML = `<img src = "${cards[10]}">`
		} else if(card === 12) {
			slot.innerHTML = `<img src = "${cards[12]}">`
		} else if(card === 13) {
			slot.innerHTML = `<img src = "${cards[13]}">`
		}
	}

}

const alert = document.querySelector('.alert')

helpBtn.addEventListener('click', ()=> {
	window.alert(alert.innerHTML)
})
const sidecard = document.getElementById('sidecard')
const sidecard1 = document.getElementById('sidecard1')
const sidecard2= document.getElementById('sidecard2')
const sidecard3 = document.getElementById('sidecard3')
const sidecard4 = document.getElementById('sidecard4')
const sidecard5 = document.getElementById('sidecard5')
const sidecard6 = document.getElementById('sidecard6')

const sidecards = [
	sidecard, sidecard1,sidecard2, sidecard3,sidecard4,sidecard5,sidecard6
]

for(let i= 0; i < sidecards.length; i++) {
	side.addEventListener('click', ()=> {
		displayCard(side, null)
	})
}