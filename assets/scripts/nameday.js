const searchByName = async (country, query) => {
    let url = "https://api.abalin.net/getdate?" + "name=" + query + "&country=" + country;
    const response = await fetch(url);
    const data = await response.json();
    let a = '';
    data.results.forEach(result => {
        let i = `
        
        <p class="names">
            ${result.name} has nameday on the:
        </p>
        
        <p class="date">
            ${result.day}/${result.month}
        </p>
       
        `;
        a += i;
    });
    return a;
}