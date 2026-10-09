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

function getSearchProducts(query) {
  const filter = products.filter((e) => {
    return e.name.toLowerCase().includes(query.toLowerCase())
  })
  return filter
}
function getProductsByCategory(category) {
  const filter = products.filter((e) => {
    if (category === 'all') return e
    return e.category === category
  })
  return filter
}
function sortByPrice(order) {
  if (order === 'default') return products
  if (order === 'asc') {
    const ascendingSort = [...products].sort((a, b) => a.price - b.price)
    return ascendingSort
  } else if (order === 'desc') {
    const descendingSort = [...products].sort((a, b) => b.price - a.price)
    return descendingSort
  }
}

const cardContainer = document.querySelector('.card-container')
const cartCount = document.querySelector('.cart-count')
const totalCartItems = document.querySelector('.total-items')
const cartTotalPrice = document.querySelector('.cart-total')
const mostExpensiveItem = document.querySelector('.most-expensive')
const searchInput = document.querySelector('.search')
const categoryFilter = document.querySelector('.category-filter')
const sortFilter = document.querySelector('.sort-filter')
const emptyState = document.querySelector('.empty-state')

function setContainerCards() {
  const cartDetails = cartItemDetails(products, cart)
  const cartTotalItems = cartDetails.reduce(
    (acc, curr) => curr.quantity + acc,
    0,
  )
  const cartExpensiveItems = cartDetails.reduce((prev, curr) =>
    curr.price > prev.price ? curr : prev,
  )
  const cartTotal = cartDetails.reduce((acc, curr) => curr.itemsTotal + acc, 0)

  cartCount.innerHTML = cartDetails.length
  totalCartItems.innerHTML += cartTotalItems
  cartTotalPrice.innerHTML += `Rs. ${cartTotal}`
  mostExpensiveItem.innerHTML += `${cartExpensiveItems.name} </br> (Rs. ${cartExpensiveItems.price})`

  function renderProducts(list) {
    cardContainer.innerHTML = ''
    emptyState.style.display = list.length === 0 ? 'block' : 'none'
    list.forEach((e) => {
      cardContainer.innerHTML += `<div
            class="${e.id} bg-white border rounded-xl p-4 shadow-sm transition duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <span class="text-xs bg-gray-100 rounded-full px-2 py-1">${e.category}</span>
            <h3 class="text-lg font-semibold mt-3">${e.name}</h3>
            <p class="text-gray-500 text-sm mt-1">⭐ ${e.rating}</p>
            <p class="text-xl font-bold mt-2">Rs. ${e.price}</p>
            <button
              class="mt-4 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
            >
              Add to Cart
            </button>
          </div>`
    })
  }
  searchInput.addEventListener('input', (e) => {
    renderProducts(getSearchProducts(e.target.value))
  })
  categoryFilter.addEventListener('change', (e) => {
    renderProducts(getProductsByCategory(e.target.value))
  })
  sortFilter.addEventListener('change', (e) => {
    renderProducts(sortByPrice(e.target.value))
  })

  renderProducts(products)
}
setContainerCards()
