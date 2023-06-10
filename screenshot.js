const screenshotBtn = document.getElementById("screenshotBtn");
screenshotBtn.addEventListener("click", function () {
  chrome.tabs.captureVisibleTab(function (screenshotUrl) {
    var filename = "screenshot-" + Date.now() + ".png";
    document.getElementById("screenshot").src = screenshotUrl;
    chrome.downloads.download({
      url: screenshotUrl,
      filename: filename,
    });
  });
  document.getElementById("screenshot").style.display = "block";
});
