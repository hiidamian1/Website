<template>
	<div class='root'>
		<a id='about'></a>
		<div class='about-text'>
			<h1>Hi there!</h1> 
			<div>
				I'm a fourth year undergraduate at UC Irvine graduating in Spring 2019. I would love the opportunity to impact the lives of everyday individuals through my work, in an environment that allows me contribute to the overall success of the team learning new things along the way. 
				
				<br><br>
				
				In my free time, I ride my bike, play basketball, listen to music, and spend (a little too much) time on Youtube.
				
				<br><br>
				
				If you think we could be a good match, don't hesitate to reach out!
			</div>
		</div>
		<div class='about-image'></div>
	</div>
</template>

<script>
	export default {
		name: 'About'
	}
</script>

<style scoped>
	h1 {
		font-weight: normal;
		font-size: 50px;
		margin-bottom: 40px;
	}

	.root {
		background: #333;
		display: flex;
		color: white;
	}

	.about-text {
		display: flex;
		flex: 2;
		line-height: 30px;
		font-size: 20px;
		padding: 20px;
		justify-content: center;	
		flex-direction: column;
	}

	.about-image{
		flex: 1;
		background-image: url('../assets/IMG_0604.png');
		background-repeat: no-repeat;
		background-size: cover;
		height: 400px;
		align-self: center;
		margin: 20px;
	}

	a{
	    display: block;
	    position: relative;
	    top: -38px;
	    visibility: hidden;
	}
</style>