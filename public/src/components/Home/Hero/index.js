import React from "react";
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroBtn, HeroP } from "./HeroElements";

const Hero = () => {
	return (
		<HeroContainer>
			<HeroContent>
				<HeroItems>
					<HeroH1>Best Crab in town</HeroH1>
					<HeroP>Live blue crab from Louisiana</HeroP>
					<HeroBtn>Call Now</HeroBtn>
				</HeroItems>
			</HeroContent>
		</HeroContainer>
	);
};

export default Hero;
