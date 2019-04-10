<template>
  <div id='projects' class='root'>
  	<div class='projects-content'>
  		<h1>Projects</h1> 
  		<div class='projects-list'>
	  		<ul>
	  			<li class="project-item">
	  				ToDos App
						<ul class='nested'>
							<li>Simple todos app to help my sister keep track of schoolwork</li>
							<li>Vue.js, Node.js, Express.js, MongoDB, Passport.js for authentication, deployed on Heroku</li>
							<li>Stacked layout and media queries for a mobile-friendly experience</li>
							<li>
								<a href='http://damians-todos.herokuapp.com' target='_blank'>Deployed</a>, 
								<a href='https://github.com/hiidamian1/ToDo-App-FullStack' target='_blank'>Github</a>
							</li>
						</ul>
	  			</li>
	  			<li class="project-item">
						Bar Chart Webpage
						<ul class='nested'>
							<li>Stacked Bar Chart for visualizing data from Foodmart dataset</li>
							<li>D3.js, Node.js, Express.js, MySQL</li>
							<li>
								<a href='https://github.com/hiidamian1/Bar-Chart-Webpage' target='_blank'>Github</a>
							</li>
						</ul>
	  			</li>
	  			<li class="project-item">
						Portfolio Website
	  				<ul class='nested'>
							<li>Showcasing my interests and who I am</li>
							<li>Vue.js, Node.js, Express.js, deployed on Heroku</li>
							<li>Uses Spotify API to retrieve my most recently listened to songs</li>
							<li>Uses flexbox and media queries for a response and mobile-friendly design</li>
							<li>Would like to explore and integrate other APIs, such as Strava</li>
							<li>
								<a href='https://github.com/hiidamian1/Website' target='_blank'>Github</a>
							</li>
						</ul>
					</li>
	  		</ul>
  		</div>
  	</div>
  </div>
</template>

<script>
	export default {
		name: 'Projects'
	}
</script>

<style scoped>
	.root {
		color: #333;
	}

	.projects-content {
		padding: 2rem;
	}

	.projects-list {
		padding: 2rem;
	}

	.project-item {
		font-size: 1.6rem;
	}

	h1 {
		font-weight: normal;
		font-size: 5rem;
	}

	li {
		margin: .5rem 0rem;
	}

	ul .nested {
		margin-left: 1.5rem;
	}

	a {
		color:#333;
	}
</style>