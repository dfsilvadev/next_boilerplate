import Image from "next/image";

import * as S from "./styles";

const Main = ({
  title = "React Avançado",
  description = "TypeScript, React, NextJS e Styled Componets"
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <Image
      className="illustration"
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código"
      width={400}
      height={400}
      objectFit="cover"
    />
    {/* <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código"
    /> */}
  </S.Wrapper>
);

export default Main;
