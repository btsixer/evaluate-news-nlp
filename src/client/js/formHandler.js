function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    checkForName(formText)

    let url = document.getElementById('name').value;
        fetch('/sentiment', {
                method: "POST",
                credentials: "same-origin",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ url:url })
            })
            .then(res => res.json())
            .then(function(res) {
                document.getElementById('name').innerHTML= res.polarity
            })
    
    console.log("::: Form Submitted :::")
    fetch('http://localhost:8080/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
}

// Attempt at utilizing some test code developed by spazy-t, trying to learn how to use jest: this performs input field validation
function checkUrl(url) {
    //regex pattern developed by rodneyrehm (https://gist.github.com/rodneyrehm/8013067) used 17/04/2020
    const url_pattern = /^(https?|ftp|torrent|image|irc):\/\/(-\.)?([^\s\/?\.#-]+\.?)+(\/[^\s]*)?$/i;

    if (url.match(url_pattern)) {
        return true;
    } else {
        return false;
    }
}

export { handleSubmit }
export { checkUrl }
