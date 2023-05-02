import profileImage from '../../images/profile.png';
import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';

const AboutMeBio = () => {
	const { aboutMe } = useContext(AboutMeContext);

	return (
		<div className="grid grid-cols-5  gap-2 pt-40 pb-28 ">
			{/*<div className="mb-7 sm:mb-0">*/}
			{/*	<img src={profileImage} className="rounded-lg" alt="" />*/}
			{/*</div>*/}
			<div className="col-span-5 sm:col-span-2 md:col-span-2 relative  mx-auto px-4 w-72 w-72">
				<img className="rounded-full border border-gray-100 shadow-sm  "
					 src={profileImage} alt="user image"/>
			</div>

			<div className="px-4 col-span-5 sm:col-span-3 md:col-span-3 font-general-regular w-full text-center sm:text-left mx-auto ">
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
