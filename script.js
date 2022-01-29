// fetch('https://jsonplaceholder.typicode.com/posts',{
//     method: 'POST',
//     body: JSON.stringify( ),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
// })
// .then(response => response.json())
// .then(data=> console.log(data));

// fetch('https://jsonplaceholder.typicode.com/posts').then(response=> response.json()).then(data=>console.log(data));
document.getElementById("JSON").style.display = "none";


let reqType = document.getElementById("reqType");
reqType.addEventListener("change", () => {
  if (reqType.value === "GET") {
    document.getElementById("JSON").style.display = "none";
  } else {
    document.getElementById("JSON").style.display = "block";
  }

});

let URL = document.getElementById("url");

URL.addEventListener('input',()=>{
  let req = document.getElementById('req');
  req.innerHTML = URL.value;
  if(URL.value === ''){
    req.innerHTML = `Untitled Request`;
  }
})

let send = document.getElementById("send");
send.addEventListener("click", () => {
  let url = URL.value;
  // console.log(url);
  document.getElementById("responsePrism").innerHTML = `fetching response...`;

  if (reqType.value === "GET") {
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        // console.log(JSON.parse(data));
        document.getElementById("responsePrism").innerHTML = data;
      });
  } else if(reqType.value === "POST") {
    let TEXT = document.getElementById("JSON").value;
    // console.log(TEXT);
    fetch(url, {
      method: "POST",
      body: TEXT,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.text())
      .then((data) => {
          console.log(data);
        document.getElementById("responsePrism").innerHTML = data;
      });
  }
});
