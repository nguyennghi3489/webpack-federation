import faker from '@faker-js/faker'

const cartContent = `<div>Your have ${faker.random.number(3000)} items in Cart</div>`

document.getElementById("cart-dev").innerHTML = cartContent