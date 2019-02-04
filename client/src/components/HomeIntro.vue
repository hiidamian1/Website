<template>
	<div class='root'>
		<div class='home-intro-box'>
			<h1>Damian Hii</h1>
			<h3>UC Irvine Computer Science '19. Hoping to impact the lives of everyday people through the software I create, with interest in full stack web development.</h3>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'HomeIntro'
	}
</script>

<style scoped>
	h1 {
		font-size: 65px;
		font-weight: normal;
	}

	h3 {
		width: 60%;
		font-weight: normal;
		margin: auto;
		line-height: 30px;
	}
	.root {
		width: 100%;
		height: 725px;
		background-image: url('~@/assets/IMG_2520.png');
		background-size: cover;
		background-repeat: no-repeat;
	}

	.home-intro-box {
		background-color: rgba(20%, 20%, 20%, .5);
		padding: 20px;
		color: white;
		text-align: center;
	}

	.home-intro-text {
		color: white;
	}
</style>