const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxYBZM2mE1OtdkcteeuZinMzz4OkgVKoSeCYszVKubwIyo7-YcsL3g4fZaMRDBOBcaWPA/exec";

// Toggle cancel area
document.getElementById("toggleCancel").addEventListener("click", () => {
    const c = document.getElementById("cancelArea");
    c.style.display = c.style.display === "block" ? "none" : "block";
});

// -------------------------
// 1) CHECK AVAILABILITY
// -------------------------
document.getElementById("checkBtn").addEventListener("click", async () => {
    const payload = {
        formType: "check",
        checkin: document.getElementById("checkin").value,
        checkout: document.getElementById("checkout").value
    };

    try {
        const res = await fetch(WEB_APP_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });

        const text = await res.text();      // 🟢 FIX
        const data = JSON.parse(text);      // 🟢 FIX

        document.getElementById("bookingResult").innerText =
            data.available > 0
                ? `${data.available} rooms available`
                : "No rooms available";

    } catch (e) {
        document.getElementById("bookingResult").innerText = "Network error";
    }
});

// -------------------------
// 2) BOOK NOW
// -------------------------
document.getElementById("bookBtn").addEventListener("click", async () => {
    const payload = {
        formType: "book",
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        rooms: document.getElementById("rooms").value,
        adults: document.getElementById("adults").value,
        children: document.getElementById("children").value,
        checkin: document.getElementById("checkin").value,
        checkout: document.getElementById("checkout").value
    };

    try {
        const res = await fetch(WEB_APP_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });

        const text = await res.text();      // 🟢 FIX
        const data = JSON.parse(text);      // 🟢 FIX

        document.getElementById("bookingResult").innerText = data.message;

    } catch (e) {
        document.getElementById("bookingResult").innerText = "Network error";
    }
});

// -------------------------
// 3) CANCEL BOOKING
// -------------------------
document.getElementById("cancelBtn").addEventListener("click", async () => {
    const payload = {
        formType: "cancel",
        phone: document.getElementById("cancelPhone").value,
        checkin: document.getElementById("cancelCheckin").value
    };

    try {
        const res = await fetch(WEB_APP_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });

        const text = await res.text();      // 🟢 FIX
        const data = JSON.parse(text);      // 🟢 FIX

        document.getElementById("cancelMessage").innerText = data.message;

    } catch (e) {
        document.getElementById("cancelMessage").innerText = "Network error";
    }
});
