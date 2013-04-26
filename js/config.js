define({
	// This css path is used as a default by the Kalei project it self.
	css_path: window.location.protocol + '//' + window.location.hostname + (window.location.port === '' ? '' : ':'+ window.location.port) +  '/themes/default/styleguide/style.css',
	
	// You can optionally set configuration for marked.js
	marked_options: {
		tables: true
	}

	//disqus_shortname: 'kaleistyleguide'
});
