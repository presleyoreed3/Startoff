# Backend Routes

## HTML
* `GET /` - `StaticPagesController#root`

## API Endpoints
## `users`
* `GET /api/users` - returns the user information of backed projects and for the User Search feature
* `POST /api/users` - sign up

## `session`
* `POST /api/session` - log in
* `DELETE /api/session` - log out

## `projects`
* `GET /api/projects` - returns projects filtered by `data`/`params` 
* `GET /api/projects/:id` - returns the project with that id
* `POST /api/projects` - creates a new project
* `PATCH /api/projects/:id` - edit the project
* `DELETE /api/projects/:id` - delete the project

## `pledge`
* `POST /api/pledge` - back a project
* `DELETE /api/pledge/:id` - cancel pledge

