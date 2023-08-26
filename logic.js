async function fetchIPAddress() {
    try {
      const response = await fetch("https://api64.ipify.org?format=json");
      const data = await response.json();
      const ipAddress = data.ip;
      return ipAddress;
    } catch (error) {
      console.error("Error fetching IP address:", error);
      return "Unable to fetch IP address";
    }
  }

  // Update the IP address in the DOM
  async function updateIPAddress() {
    const ipElement = document.getElementById("ip");
    ipElement.textContent = await fetchIPAddress();
  }

  updateIPAddress(); // Load the IP address on page load