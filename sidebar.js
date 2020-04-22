document.addEventListener("DOMContentLoaded", function (event) {
  var urlZendesk = localStorage.getItem("urlZendesk");

  if (!urlZendesk || urlZendesk == "" || urlZendesk == "null") {
    urlZendesk = window.prompt("Informe a url do zendesk");
    localStorage.setItem("urlZendesk", urlZendesk);
  }

  document.getElementById("iframe").src =
    "https://" + urlZendesk + ".zendesk.com/agent/";
});
