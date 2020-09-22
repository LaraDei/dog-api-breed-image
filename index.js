'use strict';

function getDogImage() {
   var selectedDog = $("#breed").val();
   let dogURL = selectedDog.replace(/-/i,'/').toLowerCase();
   fetch(`https://dog.ceo/api/breed/${dogURL}/images/random`)
     .then(response => response.json())
     .then(responseJson => 
       displayResults(responseJson))
     .catch(error => alert('Something went wrong. Try a different breed.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  if( responseJson.code){
    alert('Something went wrong. Try a different breed.')
  }
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  )
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});



