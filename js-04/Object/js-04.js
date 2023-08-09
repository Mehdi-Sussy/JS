
const productInfo = []

const addProduct = (name, price, weight) => {
    if (!name && !price && !weight) return Error ("wrong input")
    const newProduct = {
        name:name,
        price:price,
        weight:weight
    }
    productInfo.push(newProduct)
    // productInfo.pop(newProduct)
}

addProduct("yoasd","21230$","2030 g")
addProduct("yodfg","21230$","2020 g")
addProduct("boya","22230$","23100 g")
addProduct("yoasd","2550$","2002 g")
console.log(productInfo)
