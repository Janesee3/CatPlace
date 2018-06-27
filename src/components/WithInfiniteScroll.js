import React from "react";
import Utility from '../Utility'; 

export const withInfiniteScroll = Component =>

	class WithInfiniteScroll extends Component {
		componentDidMount() {
			window.addEventListener("scroll", this.onScroll, false);
		}

		componentWillUnmount() {
			window.removeEventListener("scroll", this.onScroll, false);
		}

		onScroll = () => {
			if (Utility.isEndOfPage()) {
				this.props.loadMore();
			}
		}

		render() {
			return <Component {...this.props} />;
		}
	};
