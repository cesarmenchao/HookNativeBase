import { VStack, Heading, Center } from "native-base";
import { Input } from "../components/Imput";
import { Button } from "../components/Button";
export function SignUp() {
  return (
    <VStack flex={1} bgColor={"gray.200"} px={10}> 
      <Center>
        <Heading my={24}>Crie sua conta</Heading>
        <Input placeholder="Nome"/>
        <Input placeholder="E-mail"/>
        <Input placeholder="senha"/>
        <Input placeholder="Confirme a senha"/>
        <Button title="Cadastrar"/>
      </Center>
    </VStack>
  );
}
