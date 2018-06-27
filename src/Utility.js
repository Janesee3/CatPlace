class Utility {
	// Returns an array {key, url (image)} from the input text string
	extractImgObjects(text) {
		let regexUrl = new RegExp("<url>(.+)</url>", "g");
		let regexId = new RegExp("<id>(.+)</id>", "g");
		let urls = this.getMatches(text, regexUrl, 1);
		let ids = this.getMatches(text, regexId, 1);
		return urls.map((url, index) => {
			return { key: ids[index], src: url };
		});
	}

	// Returns an array of matches for the input group index
	getMatches(string, regex, index) {
		index || (index = 1); // default to the first capturing group
		var matches = [];
		var match;
		while ((match = regex.exec(string))) {
			matches.push(match[index]);
		}
		return matches;
	}

	// Returns true if current document position is at the end, false otherwise
	isEndOfPage = () => {
		const windowHeight =
			"innerHeight" in window
				? window.innerHeight
				: document.documentElement.offsetHeight;
		const body = document.body;
		const html = document.documentElement;
		const docHeight = Math.max(
			body.scrollHeight,
			body.offsetHeight,
			html.clientHeight,
			html.scrollHeight,
			html.offsetHeight
		);

		const windowBottom = windowHeight + window.pageYOffset;

		return windowBottom >= docHeight;
	};
}

export default new Utility();
