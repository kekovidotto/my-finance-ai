import React from "react";
import { NumericFormat, NumericFormatProps } from "react-number-format";

import { Input } from "./ui/input";

export function MoneyInput({
  ref,
  ...props
}: NumericFormatProps<React.ComponentProps<typeof Input>> & {
  ref?: React.Ref<HTMLInputElement>;
}) {
  return (
    <NumericFormat
      {...props}
      thousandSeparator="."
      decimalSeparator=","
      prefix="R$ "
      allowNegative={false}
      customInput={Input}
      getInputRef={ref}
    />
  );
}
