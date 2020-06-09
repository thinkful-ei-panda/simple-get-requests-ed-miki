// function fetchImage(num) {
//   for (let i = 0; i < num; i++) {
//     fetch('https://dog.ceo/api/breeds/image/random')
//       .then(response => response.json())
//       .then(responseJson =>
//         displayImg(responseJson, num)
//       );
//   }
//   $('section').removeClass('hidden');
// }

// function displayImg(responseJson) {
//   console.log(responseJson);
//   $('.results').append(`<img src="${responseJson.message}" class="results-img" alt="placeholder">`);
// }

// function startPage() {
//   $('form').submit(event => {
//     event.preventDefault();

//     const num = $('input').val();

//     $('input').val('3');

//     fetchImage(num);
//   });
// }

// $(startPage);

function fetchImage(breed) {
  let randomUrl = `https://dog.ceo/api/breed/${breed}/images/random`;

  fetch(randomUrl)
    .then(response => response.json())
    .then(responseJson =>
      displayImg(responseJson, breed)
    );
}

function displayImg(responseJson, breed) {
  $('.results').append(`<img src="${responseJson.message}" class="results-img" alt="${breed}">`);
  $('section').removeClass('hidden');
}

function startPage() {
  $('form').submit(event => {
    event.preventDefault();

    const breed = $('input').val();

    $('input').val('');

    fetchImage(breed);
  });
}

$(startPage);






























