const myData = { username: 'example' };
fetch('https://jsonplaceholder.typicode.com/todos/1', {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(myData),
})
  .then((response) => response.json())
  .then((myData) => {
    console.log('Success:', myData);
  })
  .catch((error) => {
    console.error('Error:', error);
  });


fetch('https://jsonplaceholder.typicode.com/todos', {
  method: 'GET', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(myData),
})
  .then((response) => response.json())
  .then((myData) => {
    console.log('Success:', myData);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
let x = 2
const cardContainer = document.getElementById("section")
const innp = document.getElementById("input-card")
const bla = document.getElementById("input-text")
const blala = document.getElementById("input-title")
const add_btn = document.getElementById("addbt")
const blalala = document.getElementById("btn")

for (let x = 0; x < 100; x++) {
  fetch(`https://jsonplaceholder.typicode.com/posts`)
  .then((response) => response.json())
  .then((data) => cardContainer.insertAdjacentHTML("beforeend", `<div class="card">
  <p class="card-title">${data[x].title}</p>
  <p class="card-text">
    ${data[x].body}
  </p>
</div>`));
  
}

function hide() {
  innp.classList.toggle("hide")
  add_btn.classList.toggle("hide")
  blalala.classList.toggle("rotate")

}
bla.addEventListener("keyup", function(e) {
  if (e.which == 13) {
    cardContainer.insertAdjacentHTML("beforeend", `<div class="card">
    <p class="card-title">${blala.value}</p>   <p class="card-text">
    ${bla.value}
    </p>
 </div>`)
      console.log(bla.value);
      blala.value = ""
      bla.value = ""
      innp.classList.remove("hide");
      add_btn.classList.remove("hide");
      blalala.classList.remove("rotate")

      }

     
  });
add_btn.addEventListener("click", function(e) {
  
    cardContainer.insertAdjacentHTML("beforeend", `<div class="card">
    <p class="card-title">${blala.value}</p>   <p class="card-text">
    ${bla.value}
    </p>
 </div>`)
      console.log(bla.value);
      blala.value = ""
      bla.value = ""
      innp.classList.remove("hide");
      add_btn.classList.remove("hide");
      blalala.classList.remove("rotate")
  });
  blala.addEventListener("keyup", function(e) {
    if (e.which == 13) {
      bla.focus()
        }
    });