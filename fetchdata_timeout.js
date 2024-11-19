function fetchData(callback) {
    console.log("Fetching data.....");
    setTimeout(() => { 
        const data  = {name: "John", age: 30}
        callback(data);
    }, 2000); // Delay of 2 seconds
}

function processData(data) {
    console.log("processing data:", data);
}

fetchData(processData);