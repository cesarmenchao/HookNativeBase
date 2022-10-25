import { Input as NativeBaseInput, IInputProps } from "native-base";
export function Input({ ...rest }: IInputProps) {
  return (
    <NativeBaseInput
      bg="gray.500"
      fontSize="md"
      h={16}
      marginBottom={4}
        borderRadius={15}
      _focus={{
        bg: "gray.200",
        borderWidth:1,
        borderColor: "green.500",
        
      }}
      {...rest}
    ></NativeBaseInput>
  );
}
