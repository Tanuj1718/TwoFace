document.getElementById('maskBtn').addEventListener('click', async () => {
  const title = document.getElementById('titleInput').value || "2-Face";
  const favicon = document.getElementById('faviconInput').value || "https://static.vecteezy.com/system/resources/thumbnails/009/332/777/small/url-letter-logo-design-on-black-background-url-creative-initials-letter-logo-concept-url-letter-design-vector.jpg";

  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: (title, favicon) => {
      document.title = title;

      const link = document.querySelector("link[rel~='icon']");
      if (link) {
        link.href = favicon;
      } else {
        const newLink = document.createElement('link');
        newLink.rel = 'icon';
        newLink.href = favicon;
        document.head.appendChild(newLink);
      }
    },
    args: [title, favicon]
  });
});
