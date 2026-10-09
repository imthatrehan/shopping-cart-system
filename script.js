const products = [
  {
    id: 1,
    name: 'Laptop',
    price: 85000,
    category: 'Electronics',
    stock: 5,
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Mouse',
    price: 1500,
    category: 'Electronics',
    stock: 20,
    rating: 4.2,
  },
  {
    id: 3,
    name: 'Keyboard',
    price: 3500,
    category: 'Electronics',
    stock: 15,
    rating: 4.7,
  },
  {
    id: 4,
    name: 'T-Shirt',
    price: 1200,
    category: 'Clothing',
    stock: 50,
    rating: 4.0,
  },
  {
    id: 5,
    name: 'Jeans',
    price: 2800,
    category: 'Clothing',
    stock: 30,
    rating: 3.8,
  },
  {
    id: 6,
    name: 'Shoes',
    price: 4500,
    category: 'Footwear',
    stock: 10,
    rating: 4.6,
  },
  {
    id: 7,
    name: 'Watch',
    price: 12000,
    category: 'Accessories',
    stock: 8,
    rating: 4.4,
  },
  {
    id: 8,
    name: 'Backpack',
    price: 2500,
    category: 'Accessories',
    stock: 25,
    rating: 4.1,
  },
  {
    id: 9,
    name: 'Headphones',
    price: 5500,
    category: 'Electronics',
    stock: 12,
    rating: 4.3,
  },
  {
    id: 10,
    name: 'Sunglasses',
    price: 1800,
    category: 'Accessories',
    stock: 40,
    rating: 3.9,
  },
]

const cart = [
  { productId: 2, quantity: 2 },
  { productId: 5, quantity: 1 },
  { productId: 9, quantity: 1 },
  { productId: 4, quantity: 3 },
]

// Problem 1: Cart Items With Product Details

function cartItemDetails(productList, cartList) {
  return cartList.map((e) => {
    const cartItemsId = e.productId
    const cartProducts = productList.find((f) => cartItemsId === f.id)
    return {
      id: cartProducts.id,
      name: cartProducts.name,
      price: cartProducts.price,
      category: cartProducts.category,
      stock: cartProducts.stock,
      quantity: e.quantity,
      itemsTotal: cartProducts.price * e.quantity,
      rating: cartProducts.rating,
    }
  })
}
const cartItems = cartItemDetails(products, cart)
console.log(cartItems)

// Problem 2: Cart Total

function getCartItemsTotal() {
  const cartDetails = cartItemDetails(products, cart)
  const cartTotal = cartDetails.reduce((acc, curr) => curr.itemsTotal + acc, 0)
  console.log(`Cart Total: ${cartTotal}`)
}
getCartItemsTotal()

// Problem 3: Total Items Count

function totalItemsCount() {
  const cartDetails = cartItemDetails(products, cart)
  const cartTotalItems = cartDetails.reduce(
    (acc, curr) => curr.quantity + acc,
    0,
  )
  console.log(`Total Items: ${cartTotalItems}`)
}
totalItemsCount()

// Problem 4: Most Expensive Item in Cart

function expensiveCartItem() {
  const cartDetails = cartItemDetails(products, cart)
  const cartTotalItems = cartDetails.reduce((prev, curr) =>
    curr.price > prev.price ? curr : prev,
  )
  console.log(
    `Most Expensive: ${cartTotalItems.name} (Rs. ${cartTotalItems.price})`,
  )
}
expensiveCartItem()

// Problem 5: Filter by Category

function getProductsByCategory(category) {
  const filter = products.filter((e) => {
    return e.category === category
  })
  filter.forEach((e) => {
    console.log(e)
  })
}
getProductsByCategory("Electronics")

// Problem 6: Search Products

function getSearchProducts(query) {
  const filter = products.filter((e) => {
    return e.name.toLowerCase().includes(query.toLowerCase())
  })
  const queryProductName = filter.map((e) => {
    return e.name
  })
  console.log(queryProductName)
}
getSearchProducts('sh')

// Problem 7: Sort by Price

function sortByPrice(order){
  if (order === 'asc'){
    const ascendingSort = [...products].sort((a,b) => a.price - b.price) 
    return ascendingSort
  }
  else if (order === 'desc'){
    const descendingSort = [...products].sort((a,b) => b.price - a.price)
    return descendingSort
  }
}
const sortPrice = sortByPrice('desc')
console.log(sortPrice)

// Problem 8: Check Stock Availability

function checkStock(productId, quantity){
const findProduct = products.find((f) => productId === f.id )
return findProduct.stock >= quantity
}
const stockAvailability = checkStock(8, 6)
console.log(stockAvailability)

// Problem 9: All Items In Stock?

function checkInStockItems(){
  const cartDetails = cartItemDetails(products, cart)
  const cartItemsStock = cartDetails.every((e)=>{
    return checkStock(e.id, e.quantity)
  })
  return cartItemsStock
}
const checkInStockItemsCheck = checkInStockItems()
console.log(checkInStockItemsCheck)

// Problem 10: Unique Categories

function uniqueCategories(){
  const categories = products.map((e)=> e.category)
  const setUniqueCategories = [...new Set(categories)]
  return setUniqueCategories
}
const uniqueCategoriesCheck = uniqueCategories()
console.log(uniqueCategoriesCheck)

// Problem 11: Category-wise Product Count

function categoryWiseProductCount(){
  const productsTotalCategory = products.reduce((acc, curr) =>{
    acc[curr.category] = (acc[curr.category] || 0) + 1
    return acc
},{}
)
  console.log(productsTotalCategory)
}
categoryWiseProductCount()

// Problem 12: Top Rated Products

function topRatedProducts(){
 const filter = products.filter((e) => e.rating >= 4.5)
 const sort = filter.sort((a,b) => b.rating - a.rating)
 console.log(sort)
}
topRatedProducts()