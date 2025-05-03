const URL = "http://localhost:8000/products"; // Use the correct API endpoint

export async function getProducts() {
  try {
    const response = await fetch(URL); // Fetch data from the API
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json(); // Parse the JSON response
    console.log(data);
    return data.pizza; // Return the fetched data
  } catch (error) {
    console.error("Error fetching products:", error.message);
  }
}
