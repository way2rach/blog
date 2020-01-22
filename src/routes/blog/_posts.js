// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	{
		title: 'Font Awesome vs IcoMoon: Which one is better?',
		slug: 'font-awesome-vs-icoMoon',
		html: `
		<p>With the ever increasing list of icon fonts library, it can sometimes be tricky finding an icon font library that suits your need. When searching on the web I did not find a good article that helps decide which font library is better and why. So, below is what I found out from my research.</p>
		<p><strong>Why does the choice of an icon font library matter?</strong></p>
		<ul>
		<li>Designers want to be able to use the image of their choice, and not be limited to a fixed set provided by icon font libraries.</li>
		<li>Developers want to keep the page load time lean by limiting the use of images.</li>
		</ul>
		<p><strong>What will we be looking at?</strong></p>
		<p>An icon font library that provides a large number of icon fonts, and allows custom fonts to be built using SVGs. This way the designers don’t have to compromise on their designs, and developers can  implement their code in an efficient manner.</p>
		<p><strong>What are some of the best options out there ?</strong>  </p>
		<ol>
		<li><a href="https://fortawesome.github.io/Font-Awesome/">Font-Awesome</a> / <a href="https://fonticons.com/">Fonticons</a> – Both of them have been created by the same team. <a href="https://fortawesome.github.io/Font-Awesome/">Font-Awesome</a> is open source, and provides a set of pre-built icon fonts. <a href="https://fonticons.com/">Fonticons</a> is paid and provides additional capability of creating custom icon-fonts.</li>
		</ol>
		<p><strong>Pros:</strong></p>
		<ul>
		<li>Community support, large library with more icons being added frequently</li>
		<li>Icons are searchable on the website</li>
		</ul>
		<p><strong>Cons:</strong></p>
		<ul>
		<li>No option to convert SVGs to font</li>
		<li>Fonticons has the ability to develop your own icon-kit, but the interface seemed a little buggy when tested</li>
		<li>The licensing option for Fonticons seems tricky. The model is based on number of page views</li>
		</ul>
		<p>2. <a href="https://icomoon.io/#home">IcoMoon</a> – Combines the features of both Font Awesome and Fonticons in one place.</p>
		<p><strong>Pros:</strong></p>
		<ul>
		<li><a href="https://icomoon.io/app/#/select">Font generator app</a>. Both <a href="https://icomoon.io/app/#/select">online</a> and <a href="https://chrome.google.com/webstore/detail/icomoon/kppingdhhalimbaehfmhldppemnmlcjd?utm_source=chrome-ntp-icon">offline</a> version available</li>
		<li>Vast library of fonts</li>
		<li>User-friendly interface</li>
		<li>10 designers/developers per license</li>
		<li>Allows creating your own icon-kit</li>
		<li>The licensing not dependent on per page view</li>
		<li>Icons can be shared with the customers as long as they are direct customers</li>
		<li>Search capability</li>
		</ul>
		<p><strong>Cons:</strong></p>
		<ul>
		<li>Could not find any. Please point out if you find some.</li>
		</ul>
		<p><strong>Winner:</strong></p>
		<p>Clearly, Icomoon is the winner. No wonder they boast of having customers like Apple.</p>
		<p><a href="http://chipcullen.com/how-to-use-icomoon-and-icon-fonts-part-1-basic-usage/">Here is a suggested reading on how to implement IcoMoon in your project.</a></p>
		
		`
	},

	{
		title: 'Connect Tech 2016',
		slug: 'connect-tech',
		html: `
		<p>Hope you felt the power of BEM and advantages of architecting the Front End.</p>
		<p>I am adding additional slides that you could use to go back and sell the idea of BEM your teams and companies.</p>
		<p>Enjoy! </p>
		<p><a href="assets/creating-meaninful-hml-css.pdf" target="_blank">Creating Meaningful HTML &amp; CSS</a></p>
		`
	},

	{
		title: 'NgAtlanta 2018',
		slug: 'ng-atl',
		html: `<p>This talk was focused on thinking architecturally, and the benefits of doing so.</p>
		<p>Enjoy!</p>
		<p><a href="assets/ngatlanta-2018.pdf" target="_blank">Dissecting the architectural process for creating reusable Angular components</a></p>
		
			`
	}
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
