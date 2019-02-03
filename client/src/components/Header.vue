<template>
	<header class='header'>
		<router-link to="/">Home</router-link> | 
     	<router-link to="/about">About</router-link> | 
     	<router-link to="/projects">Projects</router-link> | 
     	<router-link to="/contact">Contact</router-link>
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
		text-align: right;
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