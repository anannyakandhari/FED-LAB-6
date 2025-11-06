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
  document.getElementById("modal").classList.remove("hide");
}

function closeModal() {
  document.getElementById("modal").classList.add("hide");
}

function closeTopBanner() {
  document.getElementById("top-banner").classList.add("hide");
}

function closeFooterBanner() {
  document.getElementById("footer-banner").classList.add("hide");
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
