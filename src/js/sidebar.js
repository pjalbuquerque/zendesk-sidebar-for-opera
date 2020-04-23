document.addEventListener("DOMContentLoaded", function (event) {
  var urlZendesk = localStorage.getItem("urlZendesk");
  if (!urlZendesk || urlZendesk == "" || urlZendesk == "null") {
    document.body.innerHTML = `<div class="config">
    You need to configure the application <a href="options.html">Option</a>
  </div>;`;
    return;
  }
  iframe = document.createElement("iframe");
  iframe.src = "https://" + urlZendesk + ".zendesk.com/agent/";
  document.body.appendChild(iframe);
  iframe.contentWindow.focus();
});
