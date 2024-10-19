function convertText(caseType) {
    let inputText = document.getElementById("inputText").value;
    let outputText;

    if (caseType === 'uppercase') {
        outputText = inputText.toUpperCase();
    } else if (caseType === 'lowercase') {
        outputText = inputText.toLowerCase();
    } else if (caseType === 'titlecase') {
        outputText = inputText.split(' ')
                              .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                              .join(' ');
    }

    document.getElementById("outputText").innerText = outputText;
}
