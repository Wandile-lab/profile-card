currentTimeUTC = () => {
    const time = document.getElementById("time")
    const date = new Date();
    const utcTime = date.toISOString().split("T")[1].split(".")[0];
    time.textContent = `Current Time (UTC): ${utcTime}`;
}

window.onload = currentTimeUTC;
