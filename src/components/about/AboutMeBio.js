import profileImage from '../../images/profile.png';
import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';

const AboutMeBio = () => {
	const { aboutMe } = useContext(AboutMeContext);

	return (
		<div className="grid sm:grid-cols-5 grid-cols-5 gap-10 pt-28 pb-8 ">
			{/*<div className="mb-7 sm:mb-0">*/}
			{/*	<img src={profileImage} className="rounded-lg" alt="" />*/}
			{/*</div>*/}
			<div className="col-span-5 sm:col-span-1 relative w-52 w-52 mx-auto ">
				<img className="rounded-full border border-gray-100 shadow-sm"
					 src={profileImage} alt="user image"/>
			</div>

			<div className="col-span-5 sm:col-span-4 font-general-regular w-full sm:w-3/4 text-center sm:text-left mx-auto ">
				{aboutMe.map((bio) => (
					<p
						className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
						key={bio.id}
					>
						{bio.bio}
					</p>
				))}
			</div>
		</div>
	);
};

export default AboutMeBio;
