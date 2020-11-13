module.exports = {
    favFoods
}

let foods = ['hamburger', 'pizza', 'wings', 'steak']

function favFoods() {
    for (let i = 0; i < foods.length; i++) {
        console.log(foods[i])
    }
}