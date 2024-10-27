function toCase(str) {
    // If the input is an empty string, return "-"
    if (str === "") {
        return "-";
    }
    // Convert to lowercase and uppercase, join with "-"
    return `${str.toLowerCase()}-${str.toUpperCase()}`;
}
