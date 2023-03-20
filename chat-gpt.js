(function(){
    var iframe = document.querySelector('iframe#gpt-helper-iframe');
    if (!iframe) {
        iframe = document.createElement('iframe');
        iframe.id = 'gpt-helper-iframe';
        iframe.src = 'https://chat-gpt-js-bookmarklet.pooiod7.repl.co/gpt';
        iframe.style.cssText = 'position:fixed;bottom:0px;right:0;width:380px;height:calc(100% - 0px);background-color:#0e1524;border:0;z-index:9999;';
        document.body.appendChild(iframe);
    } else {
        iframe.style.display = 'block';
    }

    var titleBar = document.querySelector('div#gpt-helper-title-bar');
    if (!titleBar) {
        titleBar = document.createElement('div');
        titleBar.id = 'gpt-helper-title-bar';
        titleBar.style.cssText = 'position:fixed;top:0px;right:0;width:380px;height:50px;background-color:#1d2333;color:white;font-size:20px;font-family:sans-serif;text-align:center;z-index:10000;line-height:47px;z-index:99999999999;';
        titleBar.textContent = 'GPT helper';
    document.body.appendChild(titleBar);
    } else {
        titleBar.style.display = 'block';
    }

    var closeButton = document.querySelector('button#gpt-helper-close-button');
    if (!closeButton) {
        closeButton = document.createElement('button');
        closeButton.id = 'gpt-helper-close-button';
        closeButton.style.cssText = 'position:absolute;top:9px;right:10px;width:30px;height:30px;background-color:transparent;color:white;font-size:20px;border:none;border-radius:50%;outline:none;cursor:pointer;';
        closeButton.textContent = '✕';
        closeButton.addEventListener('click', function() {
            iframe.style.display = 'none';
            titleBar.style.display = 'none';
            bottomBar.style.display = 'none';
        });
        titleBar.appendChild(closeButton);
    } else {
        closeButton.style.display = 'block';
    }

    var reloadButton = document.querySelector('button#gpt-helper-reload-button');
    if (!reloadButton) {
        reloadButton = document.createElement('button');
        reloadButton.id = 'gpt-helper-reload-button';
        reloadButton.style.cssText = 'position:absolute;top:9px;right:40px;width:30px;height:30px;background-color:transparent;color:white;font-size:20px;border:none;border-radius:50%;outline:none;cursor:pointer;';
        reloadButton.textContent = '↺';
        reloadButton.addEventListener('click', function() {
            iframe.src = iframe.src;
        });
        titleBar.appendChild(reloadButton);
    } else {
        reloadButton.style.display = 'block';
    }

    var bottomBar = document.querySelector('div#gpt-helper-bottom-bar');
    if (!bottomBar) {
        bottomBar = document.createElement('div');
        bottomBar.id = 'gpt-helper-bottom-bar';
        bottomBar.style.cssText = 'position:fixed;bottom:0;right:0;width:380px;height:30px;background-color:#0e1524;color:white;font-size:14px;font-family:sans-serif;text-align:center;z-index:10000;line-height:27px;z-index:99999999999;';
	bottomBar.style.color = 'red';
        bottomBar.textContent = 'made by mewtwo';
        document.body.appendChild(bottomBar);
    } else {
        bottomBar.style.display = 'block';
    }
  iframe.style.top = titleBar.offsetHeight + 'px' * 0;
})();
