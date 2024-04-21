// background.js

chrome.omnibox.onInputEntered.addListener(function (text) {
  chrome.tabs.update({
    url: `https://www.screener.in/company/${text}/consolidated`,
  });
});
