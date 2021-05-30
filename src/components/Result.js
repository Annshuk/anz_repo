import { string, oneOfType, number } from "prop-types";
import styled from "styled-components";

import { Flex, Text } from "rebass";

// ResultBox style
const ResultBox = styled(Flex)`
  width: ${({ width }) => width || "100%"};
  height: 40px;
  padding: 0.5rem;
`;

/**
 *
 * Result
 * Result components
 */
const Result = ({ value, title, ...rest }) => (
  <ResultBox {...rest}>
    <Text fontWeight="bold" marginRight="10px">
      {title}
    </Text>
    <Text> {value} </Text>
  </ResultBox>
);

Result.propTypes = {
  /**
   *  name of the input field
   */
  value: oneOfType([number, string]),
};

export default Result;
