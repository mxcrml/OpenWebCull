chrome.runtime.onInstalled.addListener(() => {
  chrome.action.onClicked.addListener(() => {
    const url = "https://app.webcull.com/";
    const domain = new URL(url).hostname;
    chrome.tabs.query({ url: `*://${domain}/*`, currentWindow: true }, (tabs) => {
      if (tabs.length > 0) {
        chrome.tabs.update(tabs[0].id, { active: true });
      } else {
        chrome.tabs.create({ url });
      }
    });
  });
});