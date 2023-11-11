const butInstall = document.getElementById("buttonInstall");

//var stored before install
let deferredPrompt;

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  deferredPrompt = event;
  butInstall.style.display = "block";
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const result = await deferredPrompt.userChoice;
    if (result.outcome === "accepted") {
      console.log("PWA installation accepted");
    }
    console.log(deferredPrompt);
    deferredPrompt = null;
    butInstall.style.display = "none";
  }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", () => {
  console.log("PWA installed succesfully!");
});
