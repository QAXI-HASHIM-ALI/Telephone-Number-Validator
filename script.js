document.getElementById("check-btn").addEventListener("click", function() {
    const userInput = document.getElementById("user-input").value;
    const resultsDiv = document.getElementById("results-div");

    if (userInput === "") {
        alert("Please provide a phone number");
        return;
    }

    const validPatterns = [
        /^03\d{2}-\d{7}$/,             // Matches 03XX-XXXXXXX
        /^03\d{9}$/,                   // Matches 03XXXXXXXXX
        /^\+923\d{2}-\d{7}$/,          // Matches +923XX-XXXXXXX
        /^\+923\d{9}$/                 // Matches +923XXXXXXXXX
    ];

    let isValid = validPatterns.some(pattern => pattern.test(userInput));

    if (isValid) {
        resultsDiv.textContent = `Valid Pakistani number: ${userInput}`;
    } else {
        resultsDiv.textContent = `Invalid Pakistani number: ${userInput}`;
    }
});

document.getElementById("clear-btn").addEventListener("click", function() {
    document.getElementById("user-input").value = "";
    document.getElementById("results-div").textContent = "";
});
