const SearchNameDay = () => {
    let country = document.getElementById("inputGroupSelect05").value;
    let query = document.getElementById("search-name").value;

    //Reset
    document.getElementById("search-name").value = '';
    document.getElementById("inputGroupSelect05").selectedIndex = 0;

    const result = searchByName(country, query).then(value => {
        console.log(value);
        document.getElementById("nameday").innerHTML = value;
    });
}



const SearchByDate = () => {
    let country = document.getElementById("inputGroupSelect06").value;
    let month = document.getElementById("inputGroupSelect02").value;
    let day = document.getElementById("inputGroupSelect03").value;

    //Reset
    document.getElementById("inputGroupSelect06").selectedIndex = 0;
    document.getElementById("inputGroupSelect02").selectedIndex = 0;
    document.getElementById("inputGroupSelect03").selectedIndex = 0;

    const result = searchDates(country, month, day).then(value => {
        console.log(value);
        document.getElementById("namedayByDate").innerHTML = value;
    });
}

const SearchByTimezone = () => {
    let country = document.getElementById("inputGroupSelect01").value;
    let timezone = document.getElementById("inputGroupSelect04").value;

    //Restet
    document.getElementById("inputGroupSelect01").selectedIndex = 0;
    document.getElementById("inputGroupSelect04").selectedIndex = 0;

    const result = searchTimezone(country, timezone).then(value => {
        document.getElementById("namedayToday").innerHTML = value;
    });
}

document.getElementById("search-name-btn").addEventListener("click", SearchNameDay);
document.getElementById("search-date-btn").addEventListener("click", SearchByDate);
document.getElementById("search-today-btn").addEventListener("click", SearchByTimezone);
