const carPrices = {
  "Tesla Model X":   { Daily: 100, Weekly: 600, Monthly: 2200 },
  "Kia EV3":         { Daily: 80,  Weekly: 480, Monthly: 1800 },
  "BYD Sealion 7":   { Daily: 90,  Weekly: 540, Monthly: 2000 }
};
// Read name from URL and customize message
const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get("name");
const car = urlParams.get("car");
if (name && car) {
  document.getElementById("message").innerHTML = `✅ Thank you, <strong>${name}</strong>!<br>Your reservation for the <strong>${car}</strong> has been confirmed.`;
}

