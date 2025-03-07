function analyzeAnswer() {
    let fileInput = document.getElementById("answerSheetUpload");
    let file = fileInput.files[0];

    if (!file) {
        alert("Please upload an answer sheet first!");
        return;
    }

    let formData = new FormData();
    formData.append("file", file);

    fetch("http://127.0.0.1:8000/analyze-answer-sheet", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.extracted_text) {
            document.getElementById("extractedText").textContent = data.extracted_text;
            document.getElementById("aiFeedback").textContent = data.feedback;
        } else {
            document.getElementById("extractedText").textContent = "Error: " + data.error;
            document.getElementById("aiFeedback").textContent = "";
        }
    })
    .catch(error => console.error("Fetch Error:", error));
}
