javascript:(function() {

	var css = `
		.draggable-iframe {
			position: fixed;
			top: 100px;
			left: 100px;
			width: 1200px;
			height: 800px;
			background-color: #fff;
			border: 5px solid #f0f;
			border-radius: 15px;
			z-index: 9999;
			transition: transform 0.2s ease-out;
		}

		.draggable-iframe:hover {
			transform: scale(1.1);
		}

		.draggable-iframe-tab {
			position: absolute;
			top: -25px;
			left: 0;
			right: 0;
			margin: auto;
			width: 50px;
			height: 25px;
			background-color: #f0f;
			border-radius: 0 0 15px 15px;
			cursor: move;
		}
	`;
	var div = document.createElement('div');
	div.classList.add('draggable-iframe');
	div.innerHTML = `
		<div class="draggable-iframe-tab"></div>
		<iframe src="https://a.ixlreadingmathservices.tk/" width="100%" height="100%" frameborder="0"></iframe>
	`;
	document.body.appendChild(div);
	var style = document.createElement('style');
	style.innerHTML = css;
	document.head.appendChild(style);
	var iframe = document.querySelector('.draggable-iframe');
	var tab = document.querySelector('.draggable-iframe-tab');
	var isDragging = false;
	var startMouseX, startMouseY, startIframeX, startIframeY;
	tab.addEventListener('mousedown', function(event) {
		isDragging = true;
		startMouseX = event.clientX;
		startMouseY = event.clientY;
		startIframeX = iframe.offsetLeft;
		startIframeY = iframe.offsetTop;
		iframe.style.cursor = 'move';
		event.preventDefault();
	});
	document.addEventListener('mousemove', function(event) {
		if (isDragging) {
			iframe.style.left = startIframeX + event.clientX - startMouseX + 'px';
			iframe.style.top = startIframeY + event.clientY - startMouseY + 'px';
		}
	});
	document.addEventListener('mouseup', function(event) {
		isDragging = false;
		iframe.style.cursor = 'default';
	});
})();
