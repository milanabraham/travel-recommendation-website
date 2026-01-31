function searchDestination() {
    const query = document.getElementById("searchInput").value.toLowerCase();

    const beach = document.getElementById("beach");
    const temple = document.getElementById("temple");
    const country = document.getElementById("country");

    // Hide all sections first
    beach.style.display = "none";
    temple.style.display = "none";
    country.style.display = "none";

    if (query.includes("beach")) {
        beach.style.display = "block";
    } 
    else if (query.includes("temple")) {
        temple.style.display = "block";
    } 
    else if (query.includes("country")) {
        country.style.display = "block";
    } 
    else if (query === "") {
        alert("Please enter a search term");
    } 
    else {
        alert("No matching destination found");
    }
}

function clearSearch() {
    document.getElementById("searchInput").value = "";

    // Show all sections again
    document.getElementById("beach").style.display = "block";
    document.getElementById("temple").style.display = "block";
    document.getElementById("country").style.display = "block";
}
