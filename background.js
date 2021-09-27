browser.pageAction.onClicked.addListener(() =>{
  browser.tabs.query({
    currentWindow: true,
    active: true
  }).then((tabs) =>{
    browser.tabs.update({
      url: tabs[0].url.replace('ecosia.org', 'google.com')
    })
  });
});
