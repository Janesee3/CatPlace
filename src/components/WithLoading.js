import React from "react";
import Utility from '../Utility'; 

export const withLoading = Component =>

	class withLoading extends Component {
		render() {
			return ({ isLoading, ...props }) => {
                if (!isLoading) {
                  return <Component { ...props } />;
                }
            ​
                return <LoadingSpinner />;
              };
		}
    };

    // const LoadingSpinner = () => return <div>Loading...</div>; 
    // TODO: FIX THIS!
