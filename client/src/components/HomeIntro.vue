<template>
	<div class='root'>
		<div class='home-intro-box'>
			<h1>Damian Hii</h1>
			<h3>UC Irvine Computer Science '19</h3>
			<h3 id="full">Hoping to impact the lives of everyday people through the software I create, with interest in full stack web development</h3>
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
		background-image: url('~@/assets/IMG_0603.png');
		background-size: cover;
		background-repeat: no-repeat;
	}

	@media(min-width: 992px) {
		.root {
			background-image: url('~@/assets/IMG_2520.png');
		}
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
		margin-top: 0rem;
	}

	h3 {
			width: 60%;
			font-weight: normal;
			margin: auto;
			line-height: 2.5rem;
			font-size: 1.6rem;
		}

	#full {
		display: none;
	}

	@media(min-width: 768px) {
		#full {
			display: initial;
		}
	}
</style>