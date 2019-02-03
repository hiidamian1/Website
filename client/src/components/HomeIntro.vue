<template>
	<div class='home-intro'>
		<h1>Damian Hii</h1>
		<h3>UC Irvine Computer Science '19. Hoping to impact the lives of everyday people through the software I create, with interest in full stack web development.</h3>
	</div>
</template>

<script>
	export default {
		name: 'HomeIntro'
	}
</script>

<style scoped>
	h1 {
		font-size: 400%;
		font-weight: normal;
		padding: 20px;
	}

	h3 {
		width: 75%;
		font-weight: normal;
		margin: auto;
	}
	.home-intro {
		text-align: center;
		width: 100%;
		height: 600px;
		background-image: url('~@/assets/IMG_2520.png');
		background-size: cover;
		background-repeat: no-repeat;
		color: white;
	}
</style>