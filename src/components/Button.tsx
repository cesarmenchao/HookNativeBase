import { Button as ButtonNativeBase, IButtonProps, Text } from "native-base";

type Props = IButtonProps & {
  title: string;
};

export function Button({ title, ...rest }: Props) {
  return (
    <ButtonNativeBase
      w="full"
      h={16}
      bg="green.700"
      borderRadius={15}
      _pressed={{
        bg: "green.500",
        color: "white",
      }}
      {...rest}
    >
      <Text color="white" fontSize="md">
        {title}
      </Text>
    </ButtonNativeBase>
  );
}
