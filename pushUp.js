var items = [
    {
        "title": "Hammer",
        "quantity": 25,
        "categories": [
            "tool"
        ],
        "price": 20
    }, {
    "title": "Drill",
    "quantity": 5,
    "categories": [
        "tool",
        "powered"
    ],
    "price": 100
}, {
    "title": "Mower",
    "quantity": 5,
    "categories": [
        "tool",
        "gas",
        "outdoor"
    ],
    "price": 200
}, {
    "title": "Screwdrivers",
    "quantity": 25,
    "categories": [
        "tool"
    ],
    "price": 10
}, {
    "title": "Chain Saw",
    "quantity": 15,
    "categories": [
        "tool",
        "gas",
        "outdoor"
    ],
    "price": 150
}, {
    "title": "Shovel",
    "quantity": 10,
    "categories": [
        "tool",
        "outdoor"
    ],
    "price": 30
}, {
    "title": "Rake",
    "quantity": 12,
    "categories": [
        "tool",
        "outdoor"
    ],
    "price": 25
}, {
    "title": "Rake",
    "quantity": 12,
    "categories": [
        "tool",
        "outdoor"
    ],
    "price": 25
}
]

function getHighestPrice (items){
    let greatest = {price:0};
    for (let i = 0; i < items.length; i++) {
        if(items[i].price > greatest) {
            greatest = items[i].price;
        }
    }
    console.log(greatest)
}

function getLowestPrice (items){
    let least = {price:Infinity};
    for (let i = 0; i < items.length; i++) {
        if(items[i].price < least.price) {
            least = items[i].price;
        }
    }
    console.log(least)
}

function getBothLeastAndGreatest (items){
    return [getHighestPrice(items), getLowestPrice(items)]
}

console.log(getBothLeastAndGreatest(items));