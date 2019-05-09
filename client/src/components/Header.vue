<template>
  <nav class="navbar navbar-expand-md navbar-dark sticky-top header">
    <div class="container-fluid">
			<!--<div class="navbar-brand">
				Damian Hii
			</div>-->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponse">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponse">
        <ul class="navbar-nav ml-auto mr-auto">
          <li v-show="!isMainPage" class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
						<router-link to="/">
							<i class="fas fa-home"></i>
							Home
						</router-link>
          </li>
          <li v-show="isMainPage" class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
						<a href='#app'>
							<i class="fas fa-home"></i>
							Home
						</a>
          </li>
          <li v-show="isMainPage" class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
						<a href='#about'>
							<i class="fas fa-user"></i>
							About
						</a>
          </li>
          <li v-show="isMainPage" class="nav-item"  data-toggle="collapse" data-target=".navbar-collapse.show">
						<a href='#projects'>
							<i class="fas fa-toolbox"></i>
							Projects
						</a>
          </li>
          <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <router-link to="/personal">
							<i class="fas fa-music"></i>
							Music
						</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
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
		padding: 1rem;
		position: -webkit-sticky;
		position: sticky;
		text-align: center;
		top: 0;
		width: 100%;
		font-size: 1.6rem;
	}

	.header a {
		color: #fff;
		text-decoration: none;
	}

	.nav-item {
		margin: .5rem 0rem;
	}

	@media (min-width: 768px) {
		.nav-item {
			margin: 0rem 1rem;
		}
	}

	.header a:hover {
		opacity: 0.5;
	}

	.navbar-toggler {
		color: white;
	}

</style>