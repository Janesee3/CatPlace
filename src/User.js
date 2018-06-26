class User {
	// Creates a User object.
	// If initialising a new User with default params, input (null, null);
	constructor(id, favourites) {
		if (id == null) {
			this.id = JSON.stringify(new Date());
		} else {
			this.id = id;
		}

		if (favourites == null) {
			this.favourites = [];
		} else {
			this.favourites = favourites;
		}
	}

	getId() {
		return this.id;
	}

	getFavourites() {
		return this.favourites;
	}

	setFavourites(faves) {
		this.favourites = faves;
	}
}

export default User;
