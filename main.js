// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.getElementById("modal");


let hearts = document.querySelectorAll(".like").forEach(item => {
  item.addEventListener('click', function(event) {
    if (item.innerText = "Like! " + FULL_HEART) {
        item.innerText = "Like! " + EMPTY_HEART;
        item.className = "deactivated-heart";
    }; 
    return mimicServerCall()
    .then(() => {
      console.log("returned promise")
      item.innerText = "Like! " + FULL_HEART;
      item.className = "activated-heart";
    })
    .catch(() => {
      console.log("Error logged")
      modal.className = "notHidden";
      setTimeout(() => {modal.className = "hidden"}, 3000);
    })

  })
})




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
