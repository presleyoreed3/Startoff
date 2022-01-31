
export const fetchProjectRewards = postId => (
	$.ajax({
		method: "GET",
		
	})
)

export const createReward = reward => (
	$.ajax({
		method: "POST",
		url: `/api/rewards`,
		data: {reward}
	})
)