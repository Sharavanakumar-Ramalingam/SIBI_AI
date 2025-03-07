function sendMessage() {
    let userMessage = document.getElementById("userInput").value;
    let formData = new FormData();
    formData.append("user_message", userMessage);

    fetch(`http://127.0.0.1:8000/chat`, {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        let chatBox = document.getElementById("chatBox");
        chatBox.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;
        chatBox.innerHTML += `<p><strong>AI:</strong> ${data.response}</p>`;
    })
    .catch(error => console.error("Error:", error));
}
