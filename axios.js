// Import the axios library.

const axios = require('axios');

// Data to be sent in the POST request. This is a JavaScript object containing the user information.
const data = {
  name: 'John Doe',
  age: 30
};

// Using the axios.post method to make a POST request to the specified URL with the data object.
axios.post('https://jsonplaceholder.typicode.com/posts/', data)
  
// If the request is successful, the `.then` block is executed.
  .then(response => {
    
// The response object contains the data returned from the server.
// We log a message along with the `data` property of the response to the console.
    
    console.log('User created:', response.data);
  })
  // If there is an error during the request, the `.catch` block is executed.
  
    .catch(error => {
    // We log an error message to the console along with the error object.
    // This helps in debugging and understanding what went wrong with the request.
    
    console.error('Error creating user:', error);
  });



// // Import the axios library

// const axios = require('axios');

// // Using the axios.get method to make a GET request to the specified URL.

// axios.get('https://jsonplaceholder.typicode.com/posts/1')

//   // If the request is successful, the `.then` block is executed.

//   .then(response => {
//     // The response object contains the data returned from the server.
//     // We log the `data` property of the response to the console.

//     console.log(response.data);
//   })

//   // If there is an error during the request, the `.catch` block is executed.

//   .catch(error => {
    
//     // We log an error message to the console along with the error object.
//     // This helps in debugging and understanding what went wrong with the request.
    
//     console.error('Error fetching data:', error);
//   });




// const axios = require("axios");


// const url = "https://jsonplaceholder.typicode.com/posts/1";

// axios.get(url)
//     .then((response) => {
//         console.log("Response Data :", response.data);
//     })
//     .catch((error) => {
//         console.error("Error fetching data:", error.message)
//     });