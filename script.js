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
   setCookie("footerClosed", "true", 3); 
   // cookie will last 3 days
}

      // Adding prevent automatic loading 
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

setTimeout(showFooterBanner, 1000);
setTimeout(showTopBanner, 2000);
setTimeout(showModal, 4000);
