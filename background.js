// // To track which tabs are masked
// const maskedTabs = {};

// // When user clicks extension button
// chrome.action.onClicked.addListener(async (tab) => {
//   const tabId = tab.id;

//   if (maskedTabs[tabId]) {
//     // If already masked, unmask it
//     await chrome.scripting.executeScript({
//       target: { tabId },
//       func: unmaskTab,
//       args: [maskedTabs[tabId]] // send original info
//     });
//     delete maskedTabs[tabId];
//   } else {
//     // Otherwise, mask it and store original info
//     const originalInfo = await chrome.scripting.executeScript({
//       target: { tabId },
//       func: storeOriginalInfo,
//     });

//     maskedTabs[tabId] = originalInfo[0].result;

//     await chrome.scripting.executeScript({
//       target: { tabId },
//       func: maskTab,
//     });
//   }
// });

// // Function to store original title and favicon
// function storeOriginalInfo() {
//   const title = document.title;
//   let favicon = "";
//   const link = document.querySelector("link[rel~='icon']");
//   if (link) {
//     favicon = link.href;
//   }
//   return { title, favicon };
// }

// // Function to mask title and favicon
// function maskTab() {
//   document.title = "Work Dashboard";

//   const existingFavicon = document.querySelector("link[rel~='icon']");
//   if (existingFavicon) {
//     existingFavicon.href = "";
//   } else {
//     const newFavicon = document.createElement('link');
//     newFavicon.rel = 'icon';
//     newFavicon.href = "";
//     document.head.appendChild(newFavicon);
//   }
// }

// // Function to restore title and favicon
// function unmaskTab(original) {
//   if (original.title) {
//     document.title = original.title;
//   }

//   if (original.favicon) {
//     let link = document.querySelector("link[rel~='icon']");
//     if (link) {
//       link.href = original.favicon;
//     } else {
//       const newLink = document.createElement('link');
//       newLink.rel = 'icon';
//       newLink.href = original.favicon;
//       document.head.appendChild(newLink);
//     }
//   }
// }

chrome.runtime.onInstalled.addListener(() => {
  console.log('Tab Masker Installed');
});
