function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    checkUrl(formText)

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

function checkUrl(url) {
    console.log("::: RUNNING URL VALIDATION :::", url);
    var regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if(regexp.test(url)){
        return true;
    }
    return false;

 }

export { handleSubmit }
export { checkUrl }


// function handleSubmit(event) {
//   event.preventDefault()
//   const formText = document.getElementById('url').value;
//   const errormessage = Client.checktheURL(formText)
//   document.getElementById("err").innerHTML = '';
//   if (errormessage) {
//       document.getElementById("err").innerHTML = errormessage
//       return
//   }
//
//   fetch('http://localhost:8080/test', {
//       method: 'POST',
//       credentials: 'same-origin',
//       headers: {
//           'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ formText }),
//   })
//
//   .then(res => res.json())
//       .then(function(jsonresults) {
//           document.getElementById('results').innerHTML = jsonresults.text;
//           document.getElementById('polarity').innerHTML = jsonresults.polarity;
//           document.getElementById('polarity_confidence').innerHTML = (jsonresults.polarity_confidence.toFixed(2)) * 100;
//           document.getElementById('subjectivity_confidence').innerHTML = (jsonresults.subjectivity_confidence.toFixed(2)) * 100;
//
//       })
//
//
// }
// export { handleSubmit }
