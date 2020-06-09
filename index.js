// function fetchDogImg(num) {
//   for (let i = 0; i < num; i++) {
//     fetch('https://dog.ceo/api/breeds/image/random')
//       .then(response => response.json())
//       .then(responseJson =>
//         displayDogImg(responseJson, num)
//       );
//   }
//   $('section').removeClass('hidden');
// }

// function displayDogImg(responseJson) {
//   console.log(responseJson);
//   $('.results').append(`<img src="${responseJson.message}" class="results-img" alt="">`);
// }

// function starterDogApp() {
//   $('form').submit(event => {
//     event.preventDefault();

        // Retrieve user input
//     const num = $('input').val();

        // Set default to 3
//     $('input').val('3');

//     fetchImage(num);
//   });
// }

// $(starterDogApp);

function fetchDogImage(breed) {
  let url = `https://dog.ceo/api/breed/${breed}/images/random`;

  fetch(url)
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
          throw new Error(response.status);  
        }
    })
    .then(responseJson =>
      displayDogImg(responseJson, breed)
    )
    .catch(error => alert('Somthing went wrong. Try again later.'))
}

function displayDogImg(responseJson, breed) {
  $('.results').append(`<img src="${responseJson.message}" class="results-img" alt="${breed}">`);
  $('section').removeClass('hidden');
}

function starterDogApp() {
  $('form').submit(event => {
    event.preventDefault();

    const breed = $('input').val();

    $('input').val('');

    fetchDogImage(breed);
  });
}

$(starterDogApp);






























