

const myData = { username: 'example' };

// fetch('https://jsonplaceholder.typicode.com/todos/1', {
//   method: 'POST', 
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(myData),
// })
//   .then((response) => response.json())
//   .then((myData) => {
//     console.log('Success:', myData);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });


// fetch('https://jsonplaceholder.typicode.com/todos', {
//   method: 'GET', 
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(myData),
// })
//   .then((response) => response.json())
//   .then((myData) => {
//     console.log('Success:', myData);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });
let x = 2
const cardContainer = document.getElementById("section")


fetch(`https://jsonplaceholder.typicode.com/posts`)
  .then((response) => response.json())
  .then((data) => cardContainer.insertAdjacentHTML("beforeend", `<div class="card">
  <p class="card-title">${data[0].title}</p>
  <p class="card-text">
    ${data[0].body}
  </p>
</div>`));