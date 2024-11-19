const https = require("https");

// URL of the remote server (JSONPlaceholder API)
const url = "https://jsonplaceholder.typicode.com/posts/1";

// Make a GET request to the remote server
https.get(url, (res) => {
    let data = "";

    // Listen for data chunks
    res.on("data", (chunk) => {
        data += chunk; // Accumulate chunks
    });

    // End of response
    res.on("end", () => {
        console.log("Response from remote server:");
        console.log(JSON.parse(data)); // Parse and log the JSON response
    });

}).on("error", (err) => {
    // Handle errors
    console.error("Error fetching data:", err.message);
});

