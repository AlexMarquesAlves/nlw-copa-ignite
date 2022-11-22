import Image from "next/image";
import appPreviewImg from "../assets/app-nlw-copa-preview.png";
import iconCheckImg from "../assets/icon-check.svg";
import logoImg from "../assets/logo.svg";
import usersAvatarExampleImg from "../assets/users-avatar-example.png";
// import { api } from "../lib/axios";

interface HomeProps {
  poolCount: number;
  guessCount: number;
  userCount: number;
}

export default function Home(props: HomeProps) {
  return (
    <div>
      <main>
        <Image src={logoImg} alt="NLW Copa" />

        <h1>Crie seu próprio bolão da copa e compartilhe entre amigos!</h1>

        <div>
          <Image src={usersAvatarExampleImg} alt="" />

          <strong>
            <span>+{props.userCount}</span> pessoas já estão usando
          </strong>
        </div>

        <form>
          <input type="text" required placeholder="Qual nome do seu bolão?" />
          <button type="submit">Criar meu bolão</button>
        </form>

        <p>
          Após criar seu bolão, você receberá um código único que poderá usar
          para convidar outras pessoas 🚀
        </p>

        <div>
          <div>
            <Image src={iconCheckImg} alt="" />
            <div>
              <span>+{props.poolCount}</span>
              <span>Bolões criados</span>
            </div>
          </div>

          <div />

          <div>
            <Image src={iconCheckImg} alt="" />
            <div>
              <span>+{props.guessCount}</span>
              <span>Palpites enviados</span>
            </div>
          </div>
        </div>
      </main>

      <Image
        src={appPreviewImg}
        alt="Dois celulares exibindo uma prévia da aplicação do NLW Copa"
        quality={100}
      />
    </div>
  );
}

// export const getServerSideProps = async () => {
//   const [poolCountResponse, guessCountResponse, userCountResponse] =
//     await Promise.all([
//       api.get("pools/count"),
//       api.get("guesses/count"),
//       api.get("users/count"),
//     ]);

//   return {
//     props: {
//       poolCount: poolCountResponse.data.count,
//       guessCount: guessCountResponse.data.count,
//       userCount: userCountResponse.data.count,
//     },
//   };
// };
