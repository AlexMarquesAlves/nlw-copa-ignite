import { useRoute } from "@react-navigation/native";
import { HStack, useToast, VStack } from "native-base";
import { useEffect, useState } from "react";
import { EmptyMyPoolList } from "../../components/EmptyMyPoolList";
import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import { Option } from "../../components/Option";
import { PoolCardProps } from "../../components/PoolCard";
import { PoolHeader } from "../../components/PoolHeader";
import { api } from "../../services/api";

interface RouteParams {
  id: string;
}

export function Details() {
  const [optionSelected, setOptionSelected] = useState<"guesses" | "ranking">(
    "guesses"
  );
  const [isLoading, setIsLoading] = useState(true);
  const [poolDetails, setPoolDetails] = useState<PoolCardProps>(
    {} as PoolCardProps
  );
  const route = useRoute();
  const toast = useToast();
  const { id } = route.params as RouteParams;

  async function fetchPollDetails() {
    try {
      setIsLoading(true);

      const response = await api.get(`/pools/${id}`);
      setPoolDetails(response.data.pool);
    } catch (error) {
      console.log(error);

      toast.show({
        title: "Não foi possível carregar os detalhes do bolão",
        placement: "top",
        bgColor: "red.500",
      });
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchPollDetails();
  }, [id]);

  if (isLoading) return <Loading />;

  return (
    <VStack flex={1} bgColor={"gray.900"}>
      <Header title={id} showBackButton showShareButton />

      {poolDetails._count?.participants > 0 ? (
        <VStack px={5} flex={1}>
          <PoolHeader data={poolDetails} />

          <HStack bgColor={"gray.800"} p={1} rounded={"sm"} mb={5}>
            <Option
              title="Seus Palpites"
              isSelected={optionSelected === "guesses"}
              onPress={() => setOptionSelected("guesses")}
            />
            <Option
              title="Ranking do grupo"
              isSelected={optionSelected === "ranking"}
              onPress={() => setOptionSelected("ranking")}
            />
          </HStack>
        </VStack>
      ) : (
        <EmptyMyPoolList code={poolDetails.code} />
      )}
    </VStack>
  );
}
