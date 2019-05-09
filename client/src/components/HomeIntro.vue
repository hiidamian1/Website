<template>
	<div class='root'>
		<div class='home-intro-box'>
			<h1>Damian Hii</h1>
			<h3 id="mid">UC Irvine Computer Science '19</h3>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'HomeIntro'
	}
</script>

<style scoped>
	.root {
		width: 100%;
		height: 72.5rem;
		background-image: url('~@/assets/IMG_2520.png');
		background-size: cover;
		background-repeat: no-repeat;
	}

	#mid {
		width: 60%;
		font-weight: normal;
		margin: auto;
		font-size: 1.6rem;
	}

	.home-intro-box {
		background-color: rgba(20%, 20%, 20%, .5);
		padding: 2rem;
		color: white;
		text-align: center;
	}

	h1 {
		font-size: 6.5rem;
		font-weight: normal;
		margin-bottom: 0rem;
	}

	@media(max-width: 577px) {
		#mid {
			display: none;
		}

		h1 {
			font-size: 5rem;
		}
	}

	@media(max-width: 992px) {
		.root {
			background-image: url('~@/assets/IMG_0603.png');
		}
	}
</style>