<template>
	<header class='header'>
		<span v-show="!isMainPage">
			<router-link to="/">
				<i class="fas fa-home"></i>
				Home
			</router-link>
		</span>
		<span v-show="isMainPage">
			<a href='#app'>
				<i class="fas fa-home"></i>
				Home
			</a>
		</span>
		<span v-show="isMainPage">
			<a href='#about'>
				<i class="fas fa-user"></i>
				About
			</a>
		</span>
		<span v-show="isMainPage">
			<a href='#projects'>
				<i class="fas fa-toolbox"></i>
				Projects
			</a>
		</span>
		<router-link to="/personal">
			<i class="fas fa-music"></i>
			Personal
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
		padding: 1rem;
		position: -webkit-sticky;
		position: sticky;
		top: 0;
		width: 100%;
		font-size: 1.6rem;
	}

	.header a {
		color: #fff;
		margin: 0rem 1rem;
		text-decoration: none;
	}

	.header a:hover {
		opacity: 0.5;
	}

</style>