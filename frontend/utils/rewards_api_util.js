
export const fetchProjectRewards = postId => (
	$.ajax({
		method: "GET",
		
	})
)

export const createProjectRewards = reward => (
	$.ajax({
		method: "POST",
		url: `/api/rewards`,
		data: {reward}
	})
)