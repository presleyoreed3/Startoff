## Frontend Routes

* `/`
	* `Splash`
* `/login` 
	- `SessionForm`
* `/signup` 
	- `SessionForm`
* `/home` 
	- `ProjectsIndex`
* `/users/:userId` 
	- `ProfileComponent`
	- `ProjectsIndex`
		+ `ProjectsIndexItem`
* `/projects/new` 
	- `ProjectForm` 
* `/projects/:projectId` 
	- `ProjectShow`
	- `ProjectBackComponent`
		+ `ProjectPledgeForm`
* `/projects/:projectId/edit` 
	- `ProjectForm`
* `/projects/:projectCategory` 
	- `CategoriesIndex`