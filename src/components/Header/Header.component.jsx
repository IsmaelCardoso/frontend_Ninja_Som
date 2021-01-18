import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  Container,
  ContainerMainInfo,
  ContainerInfo,
  ContentInfo,
  TextInfoRegular,
  Divider,
  ConteninerMain,
  ContentMain,
  DivFlexRow,
  DivFlexColumn,
  ButtomTransparent,
  Logo,
  Form,
  Whatsapp,
  User,
  Poligono,
  BoxCart,
  Bag,
  ContainermainMenu,
  ContainerMenu,
  ContentMenu,
} from './Header.css';

import iconPadlock from '../../assets/iconPadlock.png';
import iconArrows from '../../assets/iconArrows.png';
import iconPercentage from '../../assets/iconPercentage.png';
import iconDeliveryTruck from '../../assets/iconDeliveryTruck.png';
import logoNinjaSom from '../../assets/logoNinjaSom.png';
import iconSearch from '../../assets/iconSearch.png';
import iconWhatsapp from '../../assets/iconWhatsapp.png';
import iconUser from '../../assets/iconUser.png';
import poligono from '../../assets/Poligono.png';
import iconBag from '../../assets/iconBag.png';

const Header = () => {
  const history = useHistory();

  return (
    <Container>
      <ContainerMainInfo>
        <ContainerInfo>
          <ContentInfo>
            <img src={iconPadlock} alt="Padlock Icon" />
            <TextInfoRegular>COMPRA</TextInfoRegular>
            <strong>100% SEGURA</strong>
          </ContentInfo>

          <Divider>|</Divider>

          <ContentInfo>
            <img src={iconArrows} alt="Arrows Icon" />
            <strong>1ª TROCA GRÁTIS</strong>
          </ContentInfo>

          <Divider>|</Divider>

          <ContentInfo>
            <img src={iconPercentage} alt="Percentage Icon" />
            <strong>5X SEM JUROS</strong>
          </ContentInfo>

          <Divider>|</Divider>

          <ContentInfo>
            <img src={iconDeliveryTruck} alt="Delivery Truck Icon" />
            <TextInfoRegular>ENTREGAS EM</TextInfoRegular>
            <strong>TODO O BRASIL</strong>
          </ContentInfo>
        </ContainerInfo>
      </ContainerMainInfo>

      <ConteninerMain>
        <ContentMain>
          <Logo>
            <ButtomTransparent type="button" onClick={() => history.push('/')}>
              <img src={logoNinjaSom} alt="Logo Ninja Som" />
            </ButtomTransparent>
          </Logo>
        </ContentMain>

        <ContentMain>
          <Form>
            <input placeholder="BUSQUE AQUI..." />
            <button type="submit">
              <img src={iconSearch} alt="Search icon" />
            </button>
          </Form>
        </ContentMain>

        <ContentMain>
          <ButtomTransparent
            type="button"
            onClick={() =>
              window.open(
                'https://api.whatsapp.com/send?phone=5511999999999',
                '_blank',
              )
            }
          >
            <DivFlexRow>
              <Whatsapp>
                <img src={iconWhatsapp} alt="Whatsapp icon" />
              </Whatsapp>
              <strong>(11) 99999-9999</strong>
            </DivFlexRow>
          </ButtomTransparent>
        </ContentMain>

        <ContentMain>
          <ButtomTransparent type="button">
            <DivFlexRow>
              <User>
                <img src={iconUser} alt="User icon" />
              </User>
              <DivFlexColumn>
                <strong>OLÁ VISITANTE</strong>
                <span>MINHA CONTA</span>
              </DivFlexColumn>
              <Poligono>
                <img src={poligono} alt="poligono" />
              </Poligono>
            </DivFlexRow>
          </ButtomTransparent>
        </ContentMain>

        <ContentMain>
          <ButtomTransparent type="button">
            <BoxCart>
              <Bag>
                <img src={iconBag} alt="Bag icon" />
              </Bag>
              <span>SEU CARRINHO</span>
              <span>0 item (s)</span>
            </BoxCart>
          </ButtomTransparent>
        </ContentMain>
      </ConteninerMain>

      <ContainermainMenu>
        <ContainerMenu>
          <ContentMenu>
            <button type="submit">TODAS AS CATEGORIAS</button>
          </ContentMenu>
          <ContentMenu>
            <button type="submit">SOM PROFISSIONAL</button>
          </ContentMenu>
          <ContentMenu>
            <button type="submit">INSTRUMENTOS MUSICAIS</button>
          </ContentMenu>
          <ContentMenu>
            <button type="submit">PROMOÇÕES</button>
          </ContentMenu>
          <ContentMenu>
            <button type="submit">CONTATO</button>
          </ContentMenu>
        </ContainerMenu>
      </ContainermainMenu>
    </Container>
  );
};

export default Header;
