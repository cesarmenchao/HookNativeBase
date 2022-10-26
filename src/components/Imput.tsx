import {
  Input as NativeBaseInput,
  IInputProps,
  FormControl,
} from "native-base";
import { inValidBreakpointProps } from "native-base/lib/typescript/theme/tools";
type Props = IInputProps & {
  errorMessage?: string | null;
};
export function Input({ errorMessage = null, isInvalid, ...rest }: Props) {
  const invalid = !!errorMessage || isInvalid;
  return (
    <FormControl marginBottom={4} isInvalid={invalid}>
      <NativeBaseInput
        bg="gray.500"
        fontSize="md"
        h={16}
        isInvalid={invalid}
        borderRadius={15}
        _focus={{
          bg: "gray.200",
          borderWidth: 1,
          borderColor: "green.500",
        }}
        {...rest}
      ></NativeBaseInput>
      <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
    </FormControl>
  );
}
