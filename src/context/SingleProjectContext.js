import { useState, createContext } from 'react';
import { singleProjectData as singleProjectDataJson } from '../data/singleProjectData';

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children, id }) => {
	console.log('SingleProjectProvider')
	console.log(id)
    let x =	singleProjectDataJson.find(x=>x.id===id)

	const [singleProjectData, setSingleProjectData] = useState(
		x
	);

	return (
		<SingleProjectContext.Provider
			value={{ singleProjectData, setSingleProjectData }}
		>
			{children}
		</SingleProjectContext.Provider>
	);
};

export default SingleProjectContext;
