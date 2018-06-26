class UserManager {
	// Returns user id string
	// If user id is not accessed before, a new user id is generated using
	// the current timestamp
	getUserId() {
		let userId = localStorage.getItem("userId");
		if (userId === null || userId === "null") {
			userId = JSON.stringify(new Date());
			localStorage.setItem("userId", userId);
		}
		// Reaccess value because of possible changes to the value inside if condition
		let newId = localStorage.getItem("userId");
		return newId;
	}

	removeUserId() {
		localStorage.setItem("userId", null);
	}

	// Returns an array of strings which represents the ids of the photos that
	// user has previously favourited.
	// If favourites has not been accessed before, it returns an empty array
	getUserFavourites() {
		let faves = localStorage.getItem("faves");
		if (faves === null || faves === "null") {
			faves = JSON.stringify([]);
			localStorage.setItem("faves", faves);
		}

		let newFaves = JSON.parse(localStorage.getItem("faves"));
		return newFaves;
	}

	// Adds the input ID (string) to the list of favourites this user has
	addToUserFavourites(id) {
		let faves = this.getUserFavourites();
		faves.push(id);
		localStorage.setItem("faves", JSON.stringify(faves));
	}

	clearUserFavourites() {
		localStorage.setItem("faves", null);
	}

	// Returns true if a photo with the input id is already favourited by the
	// user previously.
	isFavourited(id) {
		let faves = this.getUserFavourites();
		return faves.includes(id);
	}
}

export default new UserManager();
