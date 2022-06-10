import FeaturesSplit from '../components/sections/FeaturesSplit'
import FeaturesTiles from '../components/sections/FeaturesTiles'
// import sections
import Hero from '../components/sections/Hero'
import React from 'react'
import Testimonial from '../components/sections/Testimonial'

const Home = () => {
	return (
		<>
			<Hero className="illustration-section-01" />
			<FeaturesTiles />
			<FeaturesSplit
				invertMobile
				topDivider
				imageFill
				className="illustration-section-02"
			/>
			<Testimonial topDivider />
		</>
	)
}

export default Home
