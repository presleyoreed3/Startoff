# Startoff
A clone of the popular crowdfunding site Kickstarter. The core functionality and features of the app revolve around creating projects that are seeking funding and giving the financial contributors to your site(backers) rewards for providing a given amount of money. The App also allows you to search through to find specific projects as well as filter by categories to find projects of a given type.

## [Live Site](https://start-off.herokuapp.com/)
![Homepage](./readme_images/homepage.png)

## Technologies Used
* React, Redux, React-Redux, React-Router-DOM
	- Main technologies used to control and build my front end.
* Postgres
	- The core database that stores my index of projects along with individual users and rewards for each project
* Ruby On Rails
	- Structure for the backend database schema read by Postgres
* SCSS
	- Compiled together across mutliple SCSS documents for higher levels of CSS customizaiton
* Heroku
	- Site that I'm using to deploy the site live
* AWS
	- Location where I am storing all of the photos used for the project and that users can upload
* Postman
	- Location where I initially tested my database to ensure my GET, POST, PATCH, and DELETE features were working as intended
* JBuilder
	- How I formatted the JSON responses that get sent back to my frontend by Rails.

## Features

### Indexing Projects
* One on the main features of the application was having the index page of all of the projects to be able to explore and see all the projects that exist on the site. Because of the structure of the tiles on the index, I needed to format the data and send forward a lot of the data that would be on the show page. One clever implementation feature was to have a dynamic progress bar to show how far along in the funding the project was. In order to do this I had do the math on the fly and then dynamically scale the SCSS code to match the tile containers. 
```js
processPercentage(){
	let currentAmount = this.props.project.currentFunding;
	let goalAmount = this.props.project.goalAmount;
	return Math.floor((currentAmount/goalAmount) * 100);
}
```
```CSS
<div id="progress-bar"><div id="progress" style={{width: progressPercentage}}></div></div>
```
![Index](./readme_images/index.gif)

### Showing Projects
* One the projects show page there is a lot of the same information as on the index page, however I also needed to account for is someone was logged in and if that person logged in was the one who had initially created the project so I could dynamically render more functionality for the creator of the project. 
```js
checkCreator(){
	if (!this.props.currentUser) return null;
	if (this.props.currentUser.id === this.props.project.creatorId){
		return (
			<div id="user-edits">
				<button onClick={() => this.props.history.push(`/projects/${this.props.project.id}/edit`)}>
					Edit this project
				</button>
				<button onClick={this.confirmDelete}>
					Delete this project
				</button>
			</div>
		)
	}
}
```
![Show](./readme_images/show.gif)

* When showing the rewards at the base of the page, I had to out not only the information from the project, but also grab from a different area of my schema to show the rewards for the given project. This required having to add more data to the Jbuilder as well as pulling out of the state that gets returned.

## Future Development Goals
* One of the main features that I want to implement would be to have the users actually be able to back the projects and have it dynamically update the site. This would involve pushing new data to the backend so that change would persist and as well as updating the visuals on the frontend to show the progress bar moving and the money count increment.
