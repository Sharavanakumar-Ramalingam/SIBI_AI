function generateQuiz() {
    let topic = document.getElementById("quizTopic").value;
    fetch(`http://127.0.0.1:8000/generate-quiz?topic=${topic}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("quizContent").innerText = data.quiz;
        })
        .catch(error => console.error("Error:", error));
}
