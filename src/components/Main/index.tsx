import * as S from './styles'

export default function Main() {
  return (
    <S.Wrapper>
      <S.Logo src="img/logo.png" alt="logo" />
      <S.Title>BOILERPLATE</S.Title>
      <S.Description>
        TypeScript, ReactJS, NextJS e Styled Components
      </S.Description>
      <S.Illustration
        src="img/hero-illustration.svg"
        alt="Desenvolvedor codando"
      />
    </S.Wrapper>
  )
}
