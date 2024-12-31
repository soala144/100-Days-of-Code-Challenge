  const searchButton = document.getElementById("search-button")
  const search = document.getElementById("search");
  const productGrid = document.getElementById("product-grid");

  // API URL for fetching product data
  const apiUrl = "https://fakestoreapi.com/products";
  let allProducts = []; // Cache for storing fetched products

  // Fetch and display products
  async function fetchStore() {
    try {
      const response = await fetch(apiUrl);
      allProducts = await response.json(); // Cache products
      displayProducts(allProducts); // Display all products
    } catch (error) {
      console.error("Error fetching products:", error);
      productGrid.innerHTML = "<p>Failed to load products. Please try again later.</p>";
    }
  }

  // Function to display products on the screen
  function displayProducts(products) {
    productGrid.innerHTML = ""; // Clear existing products
    products.forEach(product => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");

      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.title}" class="product-image" />
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <p>$${product.price}</p>
      `;
      productGrid.appendChild(productCard);
    });
  }

  // Function to filter products based on search query

    const filterProducts = (query) =>{
     const filteredProducts = allProducts.filter(product => {
        return(
            product.title.toLowerCase().includes(query.toLowerCase()) ||
            product.description.toLowerCase().includes(query.toLowerCase())
        )
     })
     if (filteredProducts === 0){
       productGrid.innerHTML = "<p>No products found matching your search.</p>"
       
     } else{
        displayProducts(filteredProducts)
     }
    }
    function debounce(func, delay) {
        let timeoutId;
        return (...args) => {
          clearTimeout(timeoutId); // Clear previous timer
          timeoutId = setTimeout(() => func(...args), delay); // Set new timer
        };
    }

    const handleSearch = debounce(() => {
        const query = search.value.trim()
        if(query){
          filterProducts(query)
        }else{
            displayProducts(allProducts)
        }
    }, 300)
    
    searchButton.addEventListener("click", handleSearch)
    search.addEventListener("input", handleSearch)

  // Initial data fetch when the page loads
  document.addEventListener("DOMContentLoaded", fetchStore);

