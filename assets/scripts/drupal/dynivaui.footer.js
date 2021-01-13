module.exports = function ($) {
	var $main = document.querySelector('#main');
	var $previewPanel = document.querySelector('.panel-ui');
	var $body = document.querySelector('body');

	if ($main) {
		var mainH = $main.offsetHeight;
		var winH = window.innerHeight;
		var bodyH = $body.offsetHeight;
	
		var diffH = winH - bodyH;
	
		if (diffH > 0) {
			$main.style.minHeight = mainH + diffH + 'px';
		}
	}	
	
	if ($previewPanel) {
		var panelH = $previewPanel.offsetHeight;
		var winH = window.innerHeight;
		var bodyH = $body.offsetHeight;
	
		var diffH = winH - bodyH;
	
		if (diffH > 0) {
			$previewPanel.style.minHeight = panelH + diffH + 'px';
		}
	}
}
