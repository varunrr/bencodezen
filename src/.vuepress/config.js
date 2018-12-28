module.exports = {
	title: 'BenCodeZen',
	ga: 'UA-92645815-1',
	dest: './public',
	head: [
		['link', { 'rel': "apple-touch-icon", 'sizes': "57x57", 'href': "/apple-icon-57x57.png" }],
		['link', { 'rel': "apple-touch-icon", 'sizes': "60x60", 'href': "/apple-icon-60x60.png" }],
		['link', { 'rel': "apple-touch-icon", 'sizes': "72x72", 'href': "/apple-icon-72x72.png" }],
		['link', { 'rel': "apple-touch-icon", 'sizes': "76x76", 'href': "/apple-icon-76x76.png" }],
		['link', { 'rel': "apple-touch-icon", 'sizes': "114x114", 'href': "/apple-icon-114x114.png" }],
		['link', { 'rel': "apple-touch-icon", 'sizes': "120x120", 'href': "/apple-icon-120x120.png" }],
		['link', { 'rel': "apple-touch-icon", 'sizes': "144x144", 'href': "/apple-icon-144x144.png" }],
		['link', { 'rel': "apple-touch-icon", 'sizes': "152x152", 'href': "/apple-icon-152x152.png" }],
		['link', { 'rel': "apple-touch-icon", 'sizes': "180x180", 'href': "/apple-icon-180x180.png" }],
		['link', { 'rel': "icon", 'type': "image/png", 'sizes': "192x192", 'href': "/android-icon-192x192.png" }],
		['link', { 'rel': "icon", 'type': "image/png", 'sizes': "32x32", 'href': "/favicon-32x32.png" }],
		['link', { 'rel': "icon", 'type': "image/png", 'sizes': "96x96", 'href': "/favicon-96x96.png" }],
		['link', { 'rel': "icon", 'type': "image/png", 'sizes': "16x16", 'href': "/favicon-16x16.png" }],
		['link', { 'rel': "manifest", 'href': "/manifest.json" }],
		['meta', { 'name': "msapplication-TileColor", 'content': "#ffffff" }],
		['meta', { 'name': "msapplication-TileImage", 'content': "/ms-icon-144x144.png" }],
		['meta', { 'name': "theme-color", 'content': "#ffffff" }]
	],
	themeConfig: {
		repo: 'https://gitlab.com/bencodezen/bencodezen',
		repoLabel: 'Repo',
		docsDir: 'src',
		editLinks: true,
		editLinkText: 'Found a bug? Help me improve this page!',
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Uses', link: '/uses/'},
			{ text: 'About', link: '/about/' },
			{ text: 'Contact', link: '/contact/' },
			{ text: 'RSS Feed', link: '/rss.xml' }
		]
	}
}
