class UserManager {
	// Generates a user id using the current timestamp appended with
	// a random number between 1 to 100 in string form
	generateUserId() {
		let randNum = Math.floor(Math.random() * 100 + 1);
		let x = `${JSON.stringify(new Date())}${randNum}`;
		console.log(x);
		return x;
	}

	// Returns user id string
	// If user id is not accessed before, a new one will be generated
	getUserId() {
		let userId = localStorage.getItem("userId");
		if (userId === null || userId === "null") {
			userId = this.generateUserId();
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

	removeFromUserFavourites(id) {
		let faves = this.getUserFavourites();

		if (faves.includes(id)) {
			faves = faves.filter(item => item !== id);
		}

		console.log(faves);
		console.log("removed " + id);

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
