function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
  let nameEQ = name + "=";
  let cookiesArray = document.cookie.split(";");
  for (let i = 0; i < cookiesArray.length; i++) {
    let cookie = cookiesArray[i].trim();
    if (cookie.indexOf(nameEQ) === 0) {
      return cookie.substring(nameEQ.length);
    }
  }
  return null;
}


function showTopBanner() {

  var banner = document.getElementById("top-banner");
  banner.classList.remove("hide");
  setTimeout(function () {
    banner.classList.add("show");
  }, 50);
}

function showFooterBanner() {
  document.getElementById("footer-banner").classList.remove("hide");
}

function showModal() {
  // Prevent showing modal if user already closed it
	if (localStorage.getItem("modalClosed")) {
		return;
	}
    document.getElementById("modal").classList.remove("hide");
}

// store flag that modal is closed
function closeModal() {
  document.getElementById("modal").classList.add("hide");
  localStorage.setItem("modalClosed", "true"); 
}

// store flag in sessionStorage
function closeTopBanner() {
  document.getElementById("top-banner").classList.add("hide");
  sessionStorage.setItem("topBannerClosed", "true"); 
}

//session storage feature
 function closeFooterBanner() {
  document.getElementById("footer-banner").classList.add("hide");
  setCookie("footerBannerClosed", "true", 3); 
}
   // cookie will last 3 days
}


      // Adding prevent automatic loading 
//Preventing things from loading again if user already closed them before
// get it corrected from one of my friend
// check if top banner was closed in this session
if (!sessionStorage.getItem("topBannerClosed")) {
  setTimeout(showTopBanner, 2000);
}

// check if footer banner was closed with cookie
if (!getCookie("footerBannerClosed")) {
  setTimeout(showFooterBanner, 1000);
}

// check if modal was closed before
if (!localStorage.getItem("modalClosed")) {
  setTimeout(showModal, 4000);
}

// Event listeners
document.getElementById("modal").addEventListener("click", closeModal);
document.getElementById("top-banner").addEventListener("click", closeTopBanner);
document
  .getElementById("footer-banner")
  .addEventListener("click", closeFooterBanner);



// Clear All Stored Data Button
document.getElementById("clearDataBtn").addEventListener("click", function () {
  // clear session storage (for top banner)
  sessionStorage.clear();
