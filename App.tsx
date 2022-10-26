import { SignUp } from "./src/screens/SignUp";
import { NativeBaseProvider, Box } from "native-base";
export default function App() {
  return (
    <NativeBaseProvider>
      <SignUp />
    </NativeBaseProvider>
  );
}
