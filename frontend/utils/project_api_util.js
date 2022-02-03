
export const fetchProjects = () => (
	$.ajax({
		method: "GET",
		url: "/api/projects"
	})
)

export const fetchProject = projectId => (
	$.ajax({
		method: "GET",
		url: `/api/projects/${projectId}`
	})
)

export const createProject = project => (
	$.ajax({
		method: "POST",
		url: `/api/projects`,
		data: project,
		contentType: false,
		processData: false
	})
)

export const updateProject = project => (
	$.ajax({
		method: "PATCH",
		url: `/api/projects/${project.id}`,
		data: project,
		contentType: false,
		processData: false,
	})
)

export const deleteProject = projectId => (
	$.ajax({
		method: "DELETE",
		url: `/api/projects/${projectId}`
	})
)

export const fetchByCategory = categoryName => {
	return $.ajax({
		method: "GET",
		url: `/api/projects/category/${categoryName}`
	})
}

export const searchProject = query => {
	return $.ajax({
		method: "GET",
		url: `/api/projects/search`,
		data: {query}
	})
}