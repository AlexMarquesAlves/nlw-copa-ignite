import { Center } from "native-base";

import Logo from "../assets/logo.svg";

export function SignIn() {
  return (
    <Center flex={1} bgColor="gray.900">
      {/* <Text color="white" fontSize={24}>SignIn</Text> */}
      <Logo width={212} height={40} />
    </Center>
  );
}
