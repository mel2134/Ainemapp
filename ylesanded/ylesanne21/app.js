
async function showQuotes(data){
    const container = document.getElementById("qoutes");
    data.forEach(quote => {
        const listItem = document.createElement("div");
        listItem.innerHTML = `
        <div class="card mb-4">
            <div class="card-header">
                <h5>${quote.author}</h5>
            </div>
            <div class="card-body">
                <p class="card-text">${quote.quote}</p>
            </div>
        </div>
    `;
        container.appendChild(listItem);
    });
}
async function showError(error){
    const errorDiv = document.createElement("div")
    errorDiv.innerHTML = `
    <div class="alert alert-danger alert-dismissible fade show">
        <strong>Error!</strong> ${error}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    </div>
    `
    document.body.appendChild(errorDiv)

}

const quotes = async (url) => {
    try{
        const resp = await fetch(url)
        if (resp.status != 200){
            throw new Error(`HTTP error! Status: ${resp.status}`)
        }
        const data = await resp.json()
        await showQuotes(data.quotes)
    }
    catch (error){
        await showError(error)
        console.log(error)
    }
}
quotes("https://dummyjson.com/quotes?limit=120")