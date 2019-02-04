<template>
	<header class='header'>
		<a href='#app'>Home</a>|
     	<a href='#about'>About</a>|
     	<a href='#projects'>Projects</a>
	</header>
</template>

<script>
	export default {
		name: 'Header'
	}
</script>

<style scoped>
	.header {
		background: #333;
		color: #fff;
		text-align: center;
		padding: 10px;
		position: -webkit-sticky;
		position: sticky;
		top: 0;
		width: 100%;
	}

	.header a {
		color: #fff;
		padding-right: 5px;
	}

</style>