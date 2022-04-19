import faker from '@faker-js/faker'

let products = ''

for(let i = 0; i <3;i++){
  products += `<div>${faker.commerce.productName()}</div>`

}

document.querySelector("#abd").innerHTML = products

console.log("products")