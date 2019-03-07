<template>
	<header class='header'>
		<span v-show="!isMainPage">
			<router-link to="/">
				<a>Home</a>
			</router-link>|
		</span>
		<span v-show="isMainPage">
			<a href='#app'>Home</a>|
		</span>
		<span v-show="isMainPage">
			<a href='#about'>About</a>|
		</span>
		<span v-show="isMainPage">
			<a href='#projects'>Projects</a>|
		</span>
		<router-link to="/personal">
			<a>Personal</a>
		</router-link>
	</header>
</template>

<script>
	export default {
		name: 'Header',
		props: [
			"isMainPage"
		]
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

	router-link {
		padding-right: 0px;
	}

</style>