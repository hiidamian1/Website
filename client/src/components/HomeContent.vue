<template>
	<div id='about' class='root'>
			<div class='home-text'>
				<h1>Hi there!</h1> 
				I'm a fourth year undergraduate student at UC Irvine, graduating in Spring 2019 with a B.S. in Computer Science. I would love to impact the lives of everyday individuals through my work, while working in an evironment that emphasizes team success that also fosters my individual growth. If you'd like to chat more, don't hesitate to reach out. 
			</div>
			<div class='home-image'></div>
	</div>
</template>

<script>
	export default {
		name: 'HomeContent'
	}
</script>

<style scoped>
	h1 {
		margin-bottom: 20px;
		font-weight: normal;
		font-size: 50px;
	}

	.root {
		background: #333;
		display: flex;
		color: white;
	}

	.home-text {
		flex: 2;
		margin: 20px;
		font-size: 24px;
		line-height: 40px;
	}

	.home-image{
		flex: 1;
		background-image: url('../assets/IMG_2729.png');
		background-repeat: no-repeat;
		background-size: cover;
		height: 400px;
		align-self: center;
		margin: 20px;
	}
</style>