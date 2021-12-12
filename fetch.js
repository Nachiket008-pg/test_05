let a = fetch('https://meme-api.herokuapp.com/gimme');

let b = a.then(function(response) {
    return response.json();
});

b.then(function(data) {
    fn(data);
});

// function fn(data) {
//     let h2 = document.createElement('h2');
//     h2.innerText = `UserID: ${data.id}`;
//     let h3 = document.createElement('h3');
//     h3.innerText = `Title: ${data.title}`;


//     let div = document.getElementById('response_div');
//     div.appendChild(h2);
//     div.appendChild(h3);
//     // div.appendChild("Simple String"); -> This does not work!
//     console.log(data);
// }