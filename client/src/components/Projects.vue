<template>
  <div id='projects' class='root'>
  	<div class='projects-content'>
  		<h1>Projects</h1> 
  		<div class='projects-list'>
	  		<ul>
	  			<li>
	  				ToDos App
					<ul class='nested'>
						<li>Simple todos app</li>
						<li>Vue.js, Node.js, Express.js, MongoDB/Couchbase, Passport.js for authentication, deployed on Heroku</li>
						<li>
							<a href='http://damians-todos.herokuapp.com'>Deployed</a>, 
							<a href='https://github.com/hiidamian1/ToDo-App-FullStack'>Github</a>
						</li>

					</ul>
	  			</li>
	  			<li>Bar Chart Webpage
					<ul class='nested'>
						<li>Stacked Bar Chart for visualizing data from Foodmart dataset</li>
						<li>D3.js, Node.js, Express.js, MySQL</li>
						<li>
							<a href='https://github.com/hiidamian1/Bar-Chart-Webpage'>Github</a>
						</li>
					</ul>
	  			</li>
	  			<li>Portfolio Website
	  				<ul class='nested'>
						<li>Showcasing my interests and who I am</li>
						<li>Vue.js, deployed on Netlify</li>
						<li>Would like to integrate features involving my favorite apps, like Strava, Spotify, and Youtube</li>
						<li>
							<a href='https://github.com/hiidamian1/Website'>Github</a>
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
		padding: 20px;
	}

	.projects-list {
		padding: 20px;
	}

	h1 {
		font-weight: normal;
		font-size: 50px;
	}

	li {
		margin: 5px 0px;
	}

	ul .nested {
		margin-left: 15px;
	}

	a {
		color:#333;
	}
</style>