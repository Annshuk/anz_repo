import { string } from "prop-types";
import styled from "styled-components";

import { Button as RButton } from "rebass";

// input style
const ButtonStyle = styled(RButton)`
  width: ${({ width }) => width || "90px"};
  cursor: pointer;
  background-color: ${({ bgColor }) => bgColor || "#33e"};
  height: 40px;
  padding: 0.5rem;
`;

/**
 *
 * Button
 * Button components
 */
const Button = ({ label = "button", ...rest }) => (
  <ButtonStyle label={label} {...rest} />
);

Button.propTypes = {
  /**
   *  name of the input field
   */
  label: string,

  /**
   *  type of the input
   */
  type: string,
};

export default Button;
