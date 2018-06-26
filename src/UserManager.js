import User from "./User";

class UserManager {
	constructor() {}

	getUserId() {
		let userId = localStorage.getItem("userId");
		if (userId == null || userId == "null") {
			userId = JSON.stringify(new Date());
			localStorage.setItem("userId", userId);
		}
		// Reaccess value because of possible changes to the value inside if condition
		let newId = localStorage.getItem("userId");
		console.log(userId);
		return newId;
	}

	removeUserId() {
		localStorage.setItem("userId", null);
	}
}

export default new UserManager();
