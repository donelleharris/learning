const items = [
    {name: 'bike', price: 100},
    {name: 'TV', price: 200},
    {name: 'album', price: 10},
    {name: 'book', price: 5},
    {name: 'phone', price: 500},
    {name: 'computer', price: 1000},
    {name: 'keyboard', price: 25},
]

const filteredItems = items.filter((item) => {
    return item.price <= 100
})

// console.log(filteredItems);

itemNames = items.map((item) => {
    return item.name
})

// console.log(itemNames);

itemPrices = items.map((item) => {
    return item.price
})

// console.log(itemPrices);

foundItem = items.find((item) => {
    return item.name === "book"
})

// console.log(foundItem);

items.forEach((item) => {
    console.log(item.price);
})

const hasInexpensiveItems = items.some((item) => {
    return item.price <= 100
})

// console.log(hasInexpensiveItems);

const inexpensiveItems = items.every((item) => {
    return item.price <= 1000
})

// console.log(inexpensiveItems);

const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0)

console.log(total);

const numbers = [1, 2, 3, 4, 5]

const includesTwo = numbers.includes(2)

console.log(includesTwo);