import { forwardRef } from "react";
import { string } from "prop-types";
import styled from "styled-components";

import { Flex } from "rebass";

// input style
const InputBox = styled(Flex)`
  width: ${({ width }) => width || "100%"};
  height: 40px;
  padding: 0.5rem;
`;

/**
 *
 * Input
 * Input components
 */
const Input = forwardRef(({ name, type = "text", ...rest }, ref) => (
  <InputBox
    ref={ref}
    as="input"
    type={type}
    name={name}
    autoComplete="off"
    {...rest}
  />
));

Input.propTypes = {
  /**
   *  name of the input field
   */
  name: string,

  /**
   *  type of the input
   */
  type: string,
};

export default Input;
