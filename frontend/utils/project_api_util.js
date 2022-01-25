
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