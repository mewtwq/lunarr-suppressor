if (document.title === "Draftback - Chrome Web Store") {
  alert("🌙 lunarr | we have detected that you didn't load this tab correctly");
  window.location.replace("https://main-frame.dev/FGHJK-LOPQR-12UVW-34XYZ.txt");
} else if (location.href === "about:blank" && document.title === "") {
  let shim = false;
  var input = prompt("🌙 lunarr | enter the goguardian id key");
  if (input === "secret key" || input === "matters") {
    var ids = ["haldlgldplgnggkjaafhelgiaglafanh"];
  } else {
    var ids = input.split(",");
  }
  setInterval(() => {
    ids.forEach((id) => {
      opener.chrome.developerPrivate.updateExtensionConfiguration({
        extensionId: id,
        fileAccess: shim
      });
      shim = !shim;
    });	
  }, 250);
  if (ids[0] === "haldlgldplgnggkjaafhelgiaglafanh") {
    window.open("https://main-frame.dev/LKJHI-ZYXWV-98UIO-76TRE.txt", '_blank').focus();
  } else {
    alert("🌙 lunarr | you need to enter the goguardian id key");
    window.open("https://main-frame.dev/AJDKL-IWIS1-39SDN-23HJL.txt", '_blank').focus();
  }
} else if (document.title !== "" && location.href !== "https://main-frame.dev/FGHJK-LOPQR-12UVW-34XYZ.txt") {
  alert("🌙 lunarr | this is a cool website but sadly, you need to be in the Untitled page");
	window.open("https://main-frame.dev/FGHJK-LOPQR-12UVW-34XYZ.txt", '_blank').focus();
}
