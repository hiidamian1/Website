<template>
	<div>
		<a id='about'></a>
		<div class='about-container'>
			<div class='about-text'>
				<h1>Hi there!</h1> 
				<div>
					I'm a recent Computer Science graduate from UC Irvine. I would love the opportunity to impact the lives of everyday individuals through my work, in an environment that allows me to contribute to the overall success of the team while also learning new things along the way. 
					
					<br><br>
					
					In my free time, I ride bikes, play basketball, listen to lots of hip hop or electronic music, and spend (a little too much) time on Youtube and Reddit.
					
					<br><br>
					
					If you think we could be a good match, don't hesitate to reach out!
				</div>
			</div>
			<div class='about-image'></div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'About'
	}
</script>

<style scoped>
	.about-container {
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

	#about {
		display: block;
		position: relative;
		/*top: -20.2rem;*/
		top: -18.1rem;
		visibility: hidden;
	}

	@media(min-width: 768px) {
		#about {
			top: -4.3rem;
		}
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
</style>