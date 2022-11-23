import { Fontisto } from "@expo/vector-icons";
import { Center, Icon, Text } from "native-base";
import Logo from "../../assets/logo.svg";
import { Button } from "../../components/Button";

export function SignIn() {
  return (
    <Center flex={1} bgColor={"gray.900"} p={7}>
      <Logo width={212} height={40} />

      <Button
        type={"SECONDARY"}
        title={"ENTRAR COM GOOGLE"}
        leftIcon={
          <Icon as={Fontisto} name="google" color={"white"} size={"md"} />
        }
        mt={12}
      />

      <Text color={"white"} textAlign={"center"} mt={4}>
        Não utilizamos nenhuma informação além {"\n"} do vosso e-mail para
        criação de vossa conta.
      </Text>
    </Center>
  );
}