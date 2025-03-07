function generateStudyPlan() {
    let topic = document.getElementById("studyTopic").value;
    fetch(`http://127.0.0.1:8000/generate-study-plan?topic=${topic}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("studyPlan").innerText = data.study_plan;
        })
        .catch(error => console.error("Error:", error));
}
