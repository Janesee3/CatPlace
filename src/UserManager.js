import User from "./User";

class UserManager {
	constructor() {}

	// getUserId() {
	// 	let userId = localStorage.getItem("userId");
	// 	if (userId == null) {
	// 		userId = JSON.stringify(new Date());
	// 		localStorage.setItem("userId", userId);
	// 	}
	// 	// Reaccess value because of possible changes to the value inside if condition
	// 	let newId = localStorage.getItem("userId");
	// 	console.log(userId);
	// 	return newId;
	// }

	// removeUserId() {
	// 	localStorage.setItem("userId", null);
	// }

	// Returns a User object stored in the localStorage.
	// If no User object exists, method will create a new one and return it.
	getUser() {
		localStorage.setItem("user", null);
		let user = localStorage.getItem("user");
		if (user === "null") {
			user = new User(null, null);
			localStorage.setItem("user", this.userToString(user));
		}
		return this.stringToUser(localStorage.getItem("user"));
	}

	/** Serialize/Deserialize **/

	stringToUser(string) {
		let obj = JSON.parse(string);
		return new User(obj["id"], obj["favourites"]);
	}

	userToString(user) {
		return JSON.stringify(user);
	}
}

export default new UserManager();
