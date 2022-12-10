

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