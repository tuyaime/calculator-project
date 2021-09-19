function well() {
    console.log("hello world")
}
// well()
// well()
// well()
const speak = (name = 'alan', time = "night") =>
    console.log(`good morning ${time} ${name}`)

const firstName = "Shami"
const lastName = "Harmony"
const fullName = `${firstName} ${lastName}`

let full = fullName.toUpperCase()
console.log('====================================');
console.log(full);
console.log('====================================');


// speak();
// // speak();

// function sell() {

// }

// // const calcArea = function(radius) {

// // return 3.14 * radius ** 2



// // const area = calcArea(5)
// // console.log('area is')
// const calcArea = radius => 3.14 * radius ** 2

// const area = calcArea(5)
// console.log("area is:", area)

// const addTwoNumbers = (umubareWa1, umubareaWa2) => umubareWa1 + umubareaWa2
// const get = addTwoNumbers(23, 24)
// console.log(get)



// function f(x) {
//     const result = 2 * x + 3;
//     return result

// }

// f(5);
const bill = (products, taxes) => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * taxes
    }
    return total
}
console.log(bill([10, 15, 20], 0.2))

const getOne = () => "hello"

const sell = getOne()
console.log(sell)
let name = "shoun"
const food = name.toUpperCase()
console.log(food)
let ul = document.querySelector('.peaple')

let peaple = ["mario", "Ganza", "shoun", "chun", "ryu"]
let html = ""
peaple.forEach(person => {

    html += `<li style="color:red">${person}</li>`

})
console.log(html)
ul.innerHTML = html
    // const logperson = (person, index) => {
    //     console.log(`${index}-hello ${person}`)
    // }
    // peaple.forEach(logperson)
console.log(Math)
console.log(Math.PI)
console.log(Math.E)
const area = 7.7
console.log(Math.round(area))
console.log(Math.floor(area))

let random = Math.random()
console.log(random)
console.log(Math.round(random = 100))
let scoreOne = 50
let scoreTwo = scoreOne
console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`)
scoreOne = 100
console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`)
let userOne = {
    name: "ryu",
    age: 30,
    location: "kigali"
}
userTwo = userOne
console.log(userOne, userTwo)
userTwo.name = "shema"
console.log(userOne, userTwo)
let user = {
    name: "shoun",
    age: 40,
    email: 'shoun@gmail com',
    location: "Rwanda",
    blogs: ["why mac & cheese rules", '10 things to make with marmite'],
    login: function() {
        console.log('the user logged in')
    },
    logout: function() {
        console.log('the user logged out')

    },
    logBlogs: function() {
        // console.log(this.blogs)
        console.log('this user has written thi blogs:')
        this.blogs.forEach()
    }
}
user.logBlogs()
console.log(this)
let radius = 20