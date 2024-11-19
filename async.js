
async function myAsyncFunction() {
  let success = true;
  if (success) {
    return "The operation was successful!";
  } else {
    throw new Error("The operation failed!");
  }
}
// Using async function to handle Promise
async function executeAsyncFunction() {
  try {
    // Await the async function call to get the result
    const result = await myAsyncFunction();
    console.log(result); // Output the result if successful
  } catch (error) {
    console.error(error.message); // Handle and output any errors
  }
}

// Call the async function to execute
executeAsyncFunction();