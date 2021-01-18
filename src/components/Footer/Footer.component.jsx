import React from 'react';

import ButtonStandard from '../Button';

import smiInstagram from '../../assets/smiInstagram.svg';
import smiTwitter from '../../assets/smiTwitter.svg';
import smiFacebook from '../../assets/smiFacebook.svg';
import imgPaimentMethods from '../../assets/imgPaimentMethods.png';
import imgSecurityCertificateRapidSSL from '../../assets/imgSecurityCertificateRapidSSL.png';
import imgSecurityCertificateVtex from '../../assets/imgSecurityCertificateVtex.png';
import logoEconverse from '../../assets/logoEconverse.png';
import logoVtex from '../../assets/logoVtex.png';

import {
  Background,
  Container,
  ContainerMain,
  ContentMain,
  SocialMidia,
  BoxNewsletter,
  Form,
  ContainerInfo,
  ContentInfo,
} from './Footer.css';

const Footer = () => {
  return (
    <>
      <Background color="blue">
        <Container>
          <ContainerMain>
            <div>
              <ContentMain>
                <strong>Institucional</strong>
                <button type="button">Quem somos</button>
                <button type="button">Nossas lojas</button>
              </ContentMain>
              <ContentMain marginTop>
                <strong>Atendimento</strong>
                <button type="button">Fale conosco</button>
                <button type="button">vendas@ninjasom.com.br</button>
              </ContentMain>
            </div>

            <ContentMain>
              <strong>Ajuda e suporte</strong>
              <button type="button">Politica de privacidade</button>
              <button type="button">Politica de troca</button>
              <button type="button">Prazos de entrega</button>
              <button type="button">Termos de uso</button>

              <SocialMidia>
                <button type="button">
                  <img src={smiInstagram} alt="Instagram icon" />
                </button>
                <button type="button">
                  <img src={smiTwitter} alt="Twitter icon" />
                </button>
                <button type="button">
                  <img src={smiFacebook} alt="Facebook icon" />
                </button>
              </SocialMidia>
            </ContentMain>

            <div>
              <ContentMain>
                <strong>Formas de pagamento</strong>
                <img src={imgPaimentMethods} alt="Formas de pagto" />
              </ContentMain>

              <ContentMain marginTop>
                <strong>segurança</strong>
                <div>
                  <img
                    src={imgSecurityCertificateRapidSSL}
                    alt="Certicado de Rapidi SSL"
                  />
                  <img
                    src={imgSecurityCertificateVtex}
                    alt="Certicado de Vetex"
                  />
                </div>
              </ContentMain>
            </div>

            <BoxNewsletter>
              <div>
                <span>ASSINE NOSSO </span>
                <span>NEWSLETTER</span>
              </div>
              <span>E RECEBA NOVIDADES E PROMOÇÕES</span>

              <Form>
                <input placeholder="SEU NOME" />
                <input placeholder="SEU E-MAIL" />
              </Form>

              <ButtonStandard
                type="button"
                buttonType="blue"
                height="35px"
                fontW={700}
                width="110px"
              >
                Enviar
              </ButtonStandard>
            </BoxNewsletter>
          </ContainerMain>
        </Container>
      </Background>

      <Background color="white">
        <Container>
          <ContainerInfo>
            <ContentInfo>
              <span>
                NINJA SOM COMÉRCIO DE ELETRÔNICOS LTDA - 2012 - 2019, todos os
                direitos reservados. Rua Santa Ifigênia, 556 560/562/564 - Santa
                Efigênia - CEP: 01.207-000 - São Paulo / SP - CNPJ
                07.282.516/0001-15
              </span>
              <div>
                <img src={logoEconverse} alt="logo Econverse" />
                <img src={logoVtex} alt="logo Vtex" />
              </div>
            </ContentInfo>
          </ContainerInfo>
        </Container>
      </Background>
    </>
  );
};

export default Footer;
