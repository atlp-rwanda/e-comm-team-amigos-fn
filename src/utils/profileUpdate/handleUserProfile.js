export const handleUserProfile = (editingSuccess, navigation, toast) => {
	if (editingSuccess?.status === "success") {
		toast.success("User profile updated successfully");
		setTimeout(() => {
				navigation("/dashboard/userUpdate");
			},5000);
	}
};