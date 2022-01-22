import React, { useState } from "react";

import { HomepageContainer,HomepageBanner } from "./homepage.styles";
import HomepageImg from '../../assets/homepageBanner.png';

const Homepage = () => {
  const [data, setData] = useState("");

  const handleChange = (e) => {
    setData(e.target.value);
  };

  return (
    <HomepageContainer>
      <HomepageBanner url={HomepageImg}/>
    </HomepageContainer>
  );
};

export default Homepage;
