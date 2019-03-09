<template>
	<div class='root'>
		<a id='about'></a>
		<div class='about-text'>
			<h1>Hi there!</h1> 
			<div>
				I'm a fourth year undergraduate at UC Irvine graduating in Spring 2019. I would love the opportunity to impact the lives of everyday individuals through my work, in an environment that allows me to contribute to the overall success of the team while also learning new things along the way. 
				
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
	.root {
		background: #333;
		display: flex;
		color: white;
		padding: 2rem;
	}

	.about-text {
		display: flex;
		flex: 2;
		line-height: 2.5rem;
		font-size: 1.6rem;
		justify-content: center;	
		flex-direction: column;
	}

	h1 {
		font-weight: normal;
		font-size: 5rem;
		margin-bottom: 4rem;
	}



	@media(min-width: 992px) {
		.about-image{
			flex: 1;
			background-image: url('../assets/IMG_0604.png');
			background-repeat: no-repeat;
			background-size: cover;
			background-position: bottom;
			height: 25rem;
			align-self: center;
			margin-left: 2rem;
		}
	}

	a {
	    display: block;
	    position: relative;
	    top: -5.5rem;
	    visibility: hidden;
	}
</style>