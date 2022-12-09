// ==UserScript==
// @name spy.one proxy parser
// @version      0.0.3
// @match https://spys.one/free-proxy-list/US/
// @match https://spys.one/*
// @grant none
// ==/UserScript==

var _id = "spy14";
var startUrl = ["https://spys.one/*"];
var selectors = [
  {
    "id": "table",
    "parentSelectors": ["_root"],
    "type": "SelectorHTML",
    "selector": "td tr:nth-of-type(n+4) td[colspan='1']:nth-of-type(1)",
    "multiple": true,
    "regex": ""
  },
  {
    "id": "Proxy",
    "parentSelectors": ["table"],
    "type": "SelectorText",
    "selector": "td tr:nth-of-type(n+4) td[colspan='1']:nth-of-type(1)",
    "multiple": true,
    "regex": ""
  }
];

var downloadButton = document.createElement("button");
downloadButton.innerHTML = "Download Proxy List";
downloadButton.addEventListener("click", function() {
  var proxyList = [];
  var proxyElements = document.querySelectorAll("td tr:nth-of-type(n+4) td[colspan='1']:nth-of-type(1)");
  proxyElements.forEach(function(element) {
    proxyList.push(element.innerText);
  });
  var proxyString = proxyList.join("\n");
  var a = document.createElement("a");
  a.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(proxyString));
  a.setAttribute("download", "proxy-list.txt");
  a.click();
});
document.body.appendChild(downloadButton);