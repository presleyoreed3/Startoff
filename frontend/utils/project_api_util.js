
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
		data: {project}
	})
)