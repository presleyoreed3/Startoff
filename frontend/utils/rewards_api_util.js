
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

export const updateReward = reward => (
	$.ajax({
		method: "PATCH",
		url: `/api/rewards/${reward.id}`,
		data: {reward}
	})
)