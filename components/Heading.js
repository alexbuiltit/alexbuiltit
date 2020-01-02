import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { typography } from "../theme/typography";
const Heading = styled(({ className, level, children }) => {
  if (!children) return null;
  const Title = `h${level}`;

  return <Title className={className}>{children}</Title>;
})`
  color: #2045d9;
  @media (prefers-color-scheme: dark) {
    color: #f6e564;
  }
  ${p => `font-size: ${typography[`h${p.level}`].fontSize}`};
  margin: 0;
  margin-bottom: 15px;
`;

Heading.propTypes = {
  className: PropTypes.string,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  children: PropTypes.node
};

export default Heading;
