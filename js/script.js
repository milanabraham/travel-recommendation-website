alert("Welcome to the Travel Recommendation Website!");

function searchDestination() {
    const query = document.getElementById("searchInput").value.toLowerCase();

    if (query === "beach") {
        alert("Showing beach destinations");
    } else if (query === "temple") {
        alert("Showing temple destinations");
    } else if (query === "country") {
        alert("Showing country recommendations");
    } else if (query === "") {
        alert("Please enter a search term");
    } else {
        alert("No matching destination found");
    }
}

function clearSearch() {
    document.getElementById("searchInput").value = "";
    alert("Search cleared");
}
