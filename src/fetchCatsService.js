// var Fetch

//     testCat() {
// 		fetch(
// 			"http://thecatapi.com/api/images/get?format=html&results_per_page=3"
// 		)
// 			.then(res => {
// 				return res.text();
// 			})
// 			.then(text => {
// 				console.log(this.extractImgUrl(text));
// 			});
// 	},

// 	// Returns an array image urls from the input htmlText string
// 	extractImgUrl(htmlText) {
// 		let regex = new RegExp('<img src="(.+)"', "g");
// 		let matches = this.getMatches(htmlText, regex, 1);
// 		return matches;
// 	},

// 	// Returns an array of matche for the input group index
// 	getMatches(string, regex, index) {
// 		index || (index = 1); // default to the first capturing group
// 		var matches = [];
// 		var match;
// 		while ((match = regex.exec(string))) {
// 			matches.push(match[index]);
// 		}
// 		return matches;
// 	}
        
//   }