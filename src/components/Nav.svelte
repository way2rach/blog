<script>
	export let segment;
</script>

<style>
	nav {

		border-bottom: 2px solid #e6e6e6;
		font-size: 48px;
		font-weight: bold;
		text-align: center;
		/* padding: 26.1px 19.575px; */

	}

	ul {
		margin: 0;
		list-style: none;
	}


	a {
		text-decoration: none;
		padding: 36px;
		display: block;
		color: #606666;
	}
</style>

<nav>
	<ul>
		<!-- <li><a class:selected='{segment === undefined}' href='.'>home</a></li>
		<li><a class:selected='{segment === "about"}' href='about'>about</a></li> -->

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
<!--		<li><a rel=prefetch class:selected='{segment === "blog"}' href='/'></a></li>-->
	</ul>
</nav>
