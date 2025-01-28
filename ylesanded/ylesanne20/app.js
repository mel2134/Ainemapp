
const looListPromise = (url) =>{
    return new Promise((resolve,reject) =>{
        const req = new XMLHttpRequest();
    
        req.addEventListener('readystatechange', () => {
            if (req.readyState === 4 && req.status === 200) {
                const data = JSON.parse(req.responseText);
                resolve(data.products);
            } else if (req.readyState === 4) {
                reject("Probleem andmetega")
            }
        });
    
        req.open("GET", url);
        req.send();
    })
}

function addCards(data){
    const container = document.getElementById("products");
    data.forEach(product => {
        const listItem = document.createElement("div");
        listItem.innerHTML = `
        <div class="card m-2">
            <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}">
            <div class="card-body text-center">
                <h6 class="card-title"><b>${product.title}</b></h6>
                <p class="card-text">${product.price} €</p>
                <a href="#" class="btn btn-outline-dark">Add to cart</a>
            </div>
        </div>
    `;
        container.appendChild(listItem);
    });
}

url = "https://dummyjson.com/products/category/beauty"
url2 = "https://dummyjson.com/products/category/groceries"
url3 = "https://dummyjson.com/products/category/laptops"
url4 = "https://dummyjson.com/products/category/smartphones"
url5  = "https://dummyjson.com/products/category/vehicle"
url6 = "https://dummyjson.com/products/category/sports-accessories"

looListPromise(url)
  .then(resp => {
    addCards(resp)
    return looListPromise(url2);
  })
  .then(resp => {
    addCards(resp)
    return looListPromise(url3);
  })
  .then(resp => {
    addCards(resp)
    return looListPromise(url4)
  })
  .then(resp => {
    addCards(resp)
    return looListPromise(url5)
  })
  .then(resp => {
    addCards(resp)
    return looListPromise(url6)
  })
  .then(resp =>{
    addCards(resp)
  })
  .catch(err => {
    console.log(err);
  });