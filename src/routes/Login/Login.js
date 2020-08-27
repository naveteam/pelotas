import React from 'react'
import { Flex, Box, Heading, Paragraph } from '@naveteam/saturn'

import Container from 'components/Container'

const Manifesto = () => (
  <Container>
    <Flex flexWrap='wrap'>
      <Box width={1}>
        <Heading>Pelotas JS</Heading>
        <Paragraph mt={6}>
          O Pelotas JS tem como objetivo disseminar entre a comunidade de desenvolvedores de Pelotas e região conteúdos
          e informações acerca do universo do JavaScript e as diferentes bibliotecas que surgiram em torno dele. O
          evento é gratuito e visa amadurecer o mercado local, além de incentivar o networking entre recrutadores e
          desenvolvedores, com qualquer nível de experiência na área.
        </Paragraph>
        <Paragraph mt={6}>
          Estamos entrando em nossa quinta edição, sendo essa a segunda vez que está ocorrendo de forma remota. Nosso
          objetivo nas primeiras três edições eram dar forma ao evento, criando uma dinâmica que chamasse a atenção da
          comunidade e incentivasse o networking local (valorizando assim o nosso mercado). A quarta edição, por sua
          vez, foi uma adaptação do evento para o meio digital, onde nós nos deparamos com diversos dilemas diferentes
          dos que estávamos acostumados a vivenciar (como por exemplo por onde transmitir o evento de forma acessível
          para todos, e como seria feito todo o backstage do evento). Por fim, para a edição atual, queremos concretizar
          o evento no cenário digital, entendendo as diferenças de divulgação e formas de engajamento, e também tirar
          proveito das diferenças que uma conferência remota pode proporcionar, aumentando muito o alcance do evento.
        </Paragraph>
        <Paragraph mt={6}>
          O evento acontecerá em uma live no YouTube nos dias 1 e 2 de setembro, com início às 19h em ambos os dias. No
          primeiro dia contaremos com três palestras (falaremos de react-hook-form, novas funcionalidades do ES6+ e
          bibliotecas de animações no React Native) com 30 minutos cada e mais 15 minutos para perguntas e respostas, e
          no segundo dia teremos uma palestra (testes unitários no React, ministrada pela Mel) de 45 minutos e mais 15
          de Q&A e uma mesa redonda que terá entre 3 e 4 pessoas para discutirmos sobre um tema em específico, também
          com duração de 45 minutos e mais 15 de Q&A.
        </Paragraph>
      </Box>
    </Flex>
  </Container>
)

export default Manifesto
