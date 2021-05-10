import * as S from './styles'

export default function Main({
  title = 'BOILERPLATE',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) {
  return (
    <S.Wrapper>
      <S.Logo src="img/logo.png" alt="logo" />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src="img/hero-illustration.svg"
        alt="Desenvolvedor codando"
      />
    </S.Wrapper>
  )
}
