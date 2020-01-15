const SearchNameDay = () => {
    let country = document.getElementById("inputGroupSelect01").value;
    let query = document.getElementById("search-name").value;

    const result = searchByName(country, query).then(value => {
        console.log(value);
        document.getElementById("nameday").innerHTML = value;
    });
}