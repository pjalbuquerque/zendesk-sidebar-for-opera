// Saves options to chrome.storage
function save_options() {
  var urlZendesk = document.getElementById("urlZendesk").value;
  localStorage.setItem("urlZendesk", urlZendesk);
  chrome.runtime.reload();
}

document.addEventListener("DOMContentLoaded", function (event) {
  var urlZendesk = localStorage.getItem("urlZendesk");

  urlZendesk = document.getElementById("urlZendesk").value = urlZendesk;

  document.getElementById("save").addEventListener("click", save_options);
});
