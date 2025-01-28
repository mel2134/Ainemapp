const looList = callback => {
    const req = new XMLHttpRequest();
    const url = "https://dummyjson.com/products";

    req.addEventListener('readystatechange', () => {
        if (req.readyState === 4 && req.status === 200) {
            const data = JSON.parse(req.responseText);
            callback(null, data.products);
        } else if (req.readyState === 4) {
            callback("Probleem andmetega", null);
        }
    });

    req.open("GET", url);
    req.send();
};

looList((err, data) => {
    if (err) {
        console.log(err);
    } else {
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
});