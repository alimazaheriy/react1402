export function getData(page) {

    if (page === 1)
        return [{id: 1, name: 'Mouse', price: 1000, quantity: 5},
            {id: 2, name: 'Samsung', price: 20000, quantity: 3},
            {id: 3, name: 'Laptop Asus', price: 35000, quantity: 2}]

    if (page === 2)
        return [{id: 4, name: 'Keyboard Farasoo', price: 6000, quantity: 2},
            {id: 5, name: 'Lg TV ', price: 50000, quantity: 6},
            {id: 6, name: 'Laptop Dell', price: 65000, quantity: 1}]

    if (page === 3)
        return [{id: 7, name: 'Keyboard LG', price: 9800, quantity: 3},
            {id: 8, name: 'Samsung TV ', price: 6500, quantity: 7},
            {id: 9, name: 'Laptop HP', price: 45000, quantity: 1}]

    if (page === 4)
        return [{id: 10, name: 'Mouse LG', price: 1800, quantity: 3},
            {id: 11, name: 'Unix TV ', price: 5000, quantity: 7},
            {id: 12, name: 'Printer HP', price: 45050, quantity: 1}]

}


export function getTotalPageCount(){
    return 5;
}
