<template>
	<div id='footer' class='root'>
		<a href='https://www.linkedin.com/in/damian-hii' target='_blank'><i class="fab fa-linkedin"></i></a>
		<a href='https://github.com/hiidamian1/' target='_blank'><i class="fab fa-github-square"></i></a>
		<a href='./Resume 5_2_19.pdf' target='_blank'><i class="far fa-address-card"></i></a>
	</div>
</template>

<script>
	export default {
		name: 'Footer'
	}
</script>

<style scoped>
	.root {
		background-color: #333;
		color: #fff;
		padding: 1rem;
		width: 100%;
		text-align: center;
		font-size: 2rem;
	}
	
	a {
		color: #fff;
		margin: 0rem 1rem;
	}

	a:hover {
		opacity: .5;
	}
</style>