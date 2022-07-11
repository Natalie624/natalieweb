import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

import * as CoachingStyle from './coaching.module.css';

const AgileCoachingImg5 = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "agile-coaching-5.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);
  return (
    <GatsbyImage
      className={`content-align-center vert-center ${CoachingStyle.agileCoachingImg5}`}
      alt='agile coaching img'
      image={data.file.childImageSharp.gatsbyImageData}
    />
  );
};

export default AgileCoachingImg5;
