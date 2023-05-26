export const handleCategorySearch = async (category) => {
	{
		const response = await fetch(
			`https://e-comm-team-amigos-bn-project.onrender.com/product/search?category=${encodeURIComponent(
				category,
			)}`,
			{
				headers: {
					"Content-Type": "application/json",
				},
			},
		);
		const data = await response.json();
		return data.responseData.products;
	}
};
