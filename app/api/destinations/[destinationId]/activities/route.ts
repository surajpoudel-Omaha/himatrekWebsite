function updateDestination(destinationId: string | number) {
  // Check if destinationId is valid
  if (!destinationId || typeof destinationId !== "string") {
    console.error("Invalid destinationId provided.")
    return
  }

  // Perform update operation using the destinationId
  console.log("Updating destination with ID:", destinationId)
  // ... rest of the update logic using destinationId ...

  //Example of further operations using destinationId
  fetch(`/api/destinations/${destinationId}`)
    .then((response) => response.json())
    .then((data) => {
      console.log("Destination data:", data)
      //Further processing of the data
    })
    .catch((error) => {
      console.error("Error fetching destination data:", error)
    })
}

// Example usage
updateDestination("12345")
updateDestination("67890")
updateDestination(123) //This will log an error message to the console.

