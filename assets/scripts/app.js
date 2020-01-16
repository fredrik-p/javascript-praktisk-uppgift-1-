const SearchNameDay = () => {
    let country = document.getElementById("inputGroupSelect01").value;
    let query = document.getElementById("search-name").value;
    document.getElementById("search-name").value = '';

    const result = searchByName(country, query).then(value => {
        console.log(value);
        document.getElementById("nameday").innerHTML = value;
    });
}



const SearchByDate = () => {
    let country = document.getElementById("inputGroupSelect01").value;
    let month = document.getElementById("inputGroupSelect02").value;
    let day = document.getElementById("inputGroupSelect03").value;
    document.getElementById("inputGroupSelect01").selectedIndex = 0;
    document.getElementById("inputGroupSelect02").selectedIndex = 0;
    document.getElementById("inputGroupSelect03").selectedIndex = 0;

    const result = searchDates(country, month, day).then(value => {
        console.log(value);
        document.getElementById("namedayByDate").innerHTML = value;
    });
}

document.getElementById("search-name-btn").addEventListener("click", SearchNameDay);
document.getElementById("search-date-btn").addEventListener("click", SearchByDate);
