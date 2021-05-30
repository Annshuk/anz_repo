import { forwardRef } from "react";
import { string, node } from "prop-types";
import styled from "styled-components";

import { Flex } from "rebass";

// Select style
const SelectField = styled(Flex)`
  width: ${({ width }) => width || "100%"};
  padding: 0.5rem;
  height: 40px;

  option {
    color: black;
    background: white;
    white-space: pre;
    padding: 1rem;
  }
`;

/**
 *
 * Select
 * Select components
 */
const Select = forwardRef(({ children, name, ...rest }, ref) => (
  <SelectField as="select" name={name} ref={ref} {...rest}>
    {children}
  </SelectField>
));

Select.propTypes = {
  /**
   *  name of the select field
   */
  name: string,
  /**
   * children in select
   */
  children: node,
};

export default Select;
