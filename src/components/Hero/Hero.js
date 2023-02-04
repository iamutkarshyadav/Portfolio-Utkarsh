import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello there! <br/>
          I am Utkarsh
      </SectionTitle>
      <SectionText>
        I am a Computer Science student at Graphic Era Deemed to be University and I make Websites and Games on Unreal Engine 4 and Unreal Engine 5.
          <Button onClick ={()=> window.location = 'https://google.com'} > Learn More</Button>
      </SectionText>
    </LeftSection>
    </Section>
);

export default Hero;