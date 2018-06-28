import { toast } from "react-toastify";

// Returns an array {key, url (image)} from the input text string
export const extractImgObjects = text => {
	let regexUrl = new RegExp("<url>(.+)</url>", "g");
	let regexId = new RegExp("<id>(.+)</id>", "g");
	let urls = getMatches(text, regexUrl, 1);
	let ids = getMatches(text, regexId, 1);
	return urls.map((url, index) => {
		return { key: ids[index], src: url };
	});
};

// Returns an array of matches for the input group index
const getMatches = (string, regex, index) => {
	index || (index = 1); // default to the first capturing group
	var matches = [];
	var match;
	while ((match = regex.exec(string))) {
		matches.push(match[index]);
	}
	return matches;
};

// Returns true if current document position is at the end, false otherwise
export const isEndOfPage = () => {
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

// Returns an array that contains objs originally in newArr, except those
// that has duplicated property as any object in oldArr.
export const removeDuplicatesFromNewArray = (newArr, oldArr, property) => {
	return newArr.filter(newVal => {
		let hasDup = false;
		oldArr.forEach(oldVal => {
			// hasDup will be true if the property is duplicated
			if (newVal[property] === oldVal[property]) {
				hasDup = true;
			}
		});

		return !hasDup;
	});
};

const triggerErrorToast = () => {
	toast.error("Oops! Something went wrong, please try again.");
};

export const handleFetchError = err => {
	console.log("Error occured! getCats request cannot be submited.", err);
	triggerErrorToast();
};
