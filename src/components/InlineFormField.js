import { string, node } from "prop-types";
import { Flex, Box } from "rebass";

const InlineFormField = ({ label, field, name, ...rest }) => (
  <Flex py={2} {...rest}>
    <Box as={Box} width={3 / 12} px={2} my={2}>
      <label htmlFor={name} name={name}>
        {label}
      </label>
    </Box>
    <Box width={9 / 12} px={2}>
      {field}
    </Box>
  </Flex>
);

InlineFormField.propTypes = {
  label: string,
  name: string,
  /**
   *
   *  name of the input field
   */
  field: node,
};

export default InlineFormField;
