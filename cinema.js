var request;
var btn = document.querySelector("#search-btn");
var forward = document.querySelector("#forwardBtn");
var res = document.querySelector(".result");
var count = 1;
if (window.XMLHttpRequest) {
  request = new XMLHttpRequest();
} else {
  request = new ActiveXObject("Microsoft.XMLHTTP");
}

btn.addEventListener("click", (event) => {
  event.preventDefault();
  title = document.querySelector("#title").value;
  type = document.querySelector("#type").value;
  updater();
});

function counter() {
  count++;
  updater();
}

function updater() {
  api_url = `http://www.omdbapi.com/?s=${title}&type=${type}&page=${count}&apikey=15bdc370`;
  request.open("GET", api_url);
  request.responseType = "json";
  request.onreadystatechange = () => {
    if (request.readyState == 4 && request.status == 200) {
      let movieDesc = request.response;
      console.log(movieDesc);
      res.innerHTML = "";
      for (el of movieDesc.Search) {
        res.innerHTML +=     
        `<div class="container">
        <p> <b>Name:</b> ${el.Title}</p>
        <p><b>Release year:</b> ${el.Year}</p>
        <img src=${el.Poster}>
        </div>`
      }
    }
  };
  request.send();
}
