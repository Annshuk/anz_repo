import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { Flex } from "rebass";

import Select from "components/Select";
import Input from "components/Input";
import Result from "components/Result";
import Button from "components/Button";
import InlineFormField from "components/InlineFormField";

import { data } from "./mock.json";
import currencyConvert from "./convert";

/**
 * FXLanding
 * Currency calcultor
 */
const FXLanding = () => {
  const [value, setValue] = useState(0);
  //memorized the value
  const options = useMemo(
    () =>
      data.map(({ base, label, value }) => (
        <option value={label} key={value} base={base}>
          {label}
        </option>
      )),
    []
  );

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setValue(currencyConvert(data));
  };

  return (
    <Flex
      as="main"
      justifyContent="space-between"
      width="650px"
      alignContent="center"
      flexDirection="column"
    >
      <h1>FX Calculator</h1>

      <InlineFormField
        label="Form"
        name="from"
        field={
          <Select name="from" width="200px" {...register("from")}>
            {options}
          </Select>
        }
      />

      <InlineFormField
        label="Amount"
        name="amount"
        id="amount"
        field={
          <Input
            width="100px"
            name="amount"
            type="number"
            min="0"
            aria-labelledby="amount"
            {...register("amount", { required: true })}
          />
        }
      />

      <InlineFormField
        label="To"
        name="to"
        field={
          <Select name="to" width="200px" {...register("to")}>
            {options}
          </Select>
        }
      />

      <Button mr={2} onClick={handleSubmit(onSubmit)}>
        Convert
      </Button>

      <Result title="Convert to =" value={value} />
    </Flex>
  );
};

export default FXLanding;
