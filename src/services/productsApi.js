// const apiKey = "f4bfaf51d2334310bffe3a25c609cc85";
// const URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`;

// const URL = "https://dummyjson.com/recipes?limit=10&skip=10&select=name,image";

// const LOCAL_STORAGE_KEY = "cartItems";
// const URL = "http://localhost:8000/products";
const URL = "/data.json";
export async function getProducts() {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    console.log(data);
    return data.products.pizza;
  } catch (error) {
    console.error("Error fetching products:", error.message);
  }
}

// export function getCartItems() {
//   const cartItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
//   return cartItems ? cartItems : [];
// }
// export function setCartItems(cart) {
//   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cart));
// }
