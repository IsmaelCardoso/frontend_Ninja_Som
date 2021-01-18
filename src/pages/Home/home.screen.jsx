/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/no-array-index-key */
import React, { useCallback, useEffect, useState } from 'react';

import { v4 } from 'uuid';
import api from '../../services/api';

import formatValue from '../../utils/formatValue';
import formatCurrenciDecimal from '../../utils/formatCurrenciDecimal';

import { useModal } from '../../hooks/Modal';

import imgEletricGuitar from '../../assets/imgEletricGuitar.png';
import imgMicrophone from '../../assets/imgMicrophone.png';
import imgSoundTable from '../../assets/imgSoundTable.png';
import imgKeyboard from '../../assets/imgKeyboard.png';
import imgGuitar from '../../assets/imgGuitar.png';
import imgDrums from '../../assets/imgDrums.png';
import imgProfessionalInstruments from '../../assets/imgProfessionalInstruments.png';
import imgProfessionalAudio from '../../assets/imgProfessionalAudio.png';
import imgMusicalInstruments from '../../assets/imgMusicalInstruments.png';
import line from '../../assets/line.png';
import logoAKG from '../../assets/logoAKG.png';
import logoRoland from '../../assets/logoRoland.png';
import logoBoss from '../../assets/logoBoss.png';
import logoShure from '../../assets/logoShure.png';
import fotoTestimonial from '../../assets/fotoTestimonial.png';

import ButtonStandard from '../../components/Button';

import {
  Container,
  Banner,
  ContentBanner,
  Categories,
  DivFlexRow,
  VitrineContainer,
  ContainerTitle,
  AdsContainer,
  StandardAdCard,
  AdTitle,
  AdDescription,
  AdPrice,
  BrandsContainer,
  BrandsContent,
  AboutUsContainer,
  AboutUsContent,
  BoxTestimonial,
  BoxTestimonialText,
} from './home.css';

const categoriesData = [
  {
    img: imgEletricGuitar,
    title: 'GUITARRAS',
  },
  {
    img: imgMicrophone,
    title: 'MICROFONES',
  },
  {
    img: imgSoundTable,
    title: 'MESA DE SOM',
  },
  {
    img: imgKeyboard,
    title: 'TECLADOS',
  },
  {
    img: imgGuitar,
    title: 'VIOLÃO',
  },
  {
    img: imgDrums,
    title: 'BATERIAS',
  },
];

const productsArr = [
  {
    productName: 'Bateria Eletrônica',
    descriptionShort:
      'Many desktop publishing packages and web page editors now Many',
    photo:
      'http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-bateria-eletronica.png',
    price: 149990,
  },
  {
    productName: 'Kit de Pratos',
    descriptionShort:
      'Many desktop publishing packages and web page editors now Many',
    photo:
      'http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-kit-pratos.png',
    price: 149990,
  },
  {
    productName: 'Pedal Duplo para Bumbo',
    descriptionShort:
      'Many desktop publishing packages and web page editors now Many',
    photo:
      'http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-pedal-duplo-para-dumbo.png',
    price: 149990,
  },
  {
    productName: 'Módulo para Bateria',
    descriptionShort:
      'Many desktop publishing packages and web page editors now Many',
    photo:
      'http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-modulo-para-bateria.png',
    price: 149990,
  },
  {
    productName: 'Prato 17” Medium Crash',
    descriptionShort:
      'Many desktop publishing packages and web page editors now Many',
    photo:
      'http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-prato-17-medium-crash.png',
    price: 149990,
  },
  {
    productName: 'Kit Bag para Tambores',
    descriptionShort:
      'Many desktop publishing packages and web page editors now Many',
    photo:
      'http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-kit-bag-para-tambores.png',
    price: 149990,
  },
  {
    productName: 'Banco para Bateria',
    descriptionShort:
      'Many desktop publishing packages and web page editors now Many',
    photo:
      'http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-banco-para-bateria.png',
    price: 149990,
  },
  {
    productName: 'Pedestal para Percussão',
    descriptionShort:
      'Many desktop publishing packages and web page editors now Many',
    photo:
      'http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-pedestal-para-percussao.png',
    price: 149990,
  },
  {
    productName: 'Mixer de Video',
    descriptionShort:
      'Many desktop publishing packages and web page editors now Many',
    photo:
      'http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-mixer-de-video.png',
    price: 149990,
  },
  {
    productName: 'Guitarra Jackson',
    descriptionShort:
      'Many desktop publishing packages and web page editors now Many',
    photo:
      'http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-guitarra-jackson.png',
    price: 149990,
  },
  {
    productName: 'Contrabaixo Elétrico',
    descriptionShort:
      'Many desktop publishing packages and web page editors now Many',
    photo:
      'http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-contrabaixo-eletrico.png',
    price: 149990,
  },
  {
    productName: 'Sistema de Microfone s/ Fio',
    descriptionShort:
      'Many desktop publishing packages and web page editors now Many',
    photo:
      'http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-sistema-de-microfones-sem-fio.png',
    price: 149990,
  },
];

const brands = [
  {
    img: logoAKG,
    title: 'AKG',
  },
  {
    img: logoRoland,
    title: 'Roland',
  },
  {
    img: logoBoss,
    title: 'Boss',
  },
  {
    img: logoShure,
    title: 'Shure',
  },
];

const Home = () => {
  const [products, setProducts] = useState(productsArr);

  const { addModal } = useModal();

  const handleListProducts = useCallback(async () => {
    const response = await api.get('produtos.json');
  }, []);

  useEffect(() => {
    handleListProducts();
  }, [handleListProducts]);

  return (
    <Container>
      <Banner type="large" img={imgProfessionalInstruments}>
        <ContentBanner type="large">
          <span>Novos produtos</span>

          <div>
            <span>Instrumentos</span>
            <span>Profissionais</span>
          </div>

          <ButtonStandard type="button" buttonType="baseLine">
            Confira
          </ButtonStandard>
        </ContentBanner>
      </Banner>

      <Categories>
        {categoriesData.map(category => (
          <div key={v4()}>
            <button type="button">
              <img src={category.img} alt={category.title} />
              {category.title}
            </button>
          </div>
        ))}
      </Categories>

      <DivFlexRow>
        <Banner type="medium" img={imgProfessionalAudio} filterGrey>
          <ContentBanner type="medium">
            <span>Novidades</span>
            <img src={line} alt="line" />

            <div>
              <span>Áudio</span>
              <span>Profissional</span>
            </div>

            <ButtonStandard type="button" buttonType="white">
              Confira
            </ButtonStandard>
          </ContentBanner>
        </Banner>
        <Banner type="medium" img={imgMusicalInstruments}>
          <ContentBanner type="medium">
            <span>Novidades</span>
            <img src={line} alt="line" />

            <div>
              <span>Instrumentos</span>
              <span>Musicais</span>
            </div>

            <ButtonStandard type="button" buttonType="white">
              Confira
            </ButtonStandard>
          </ContentBanner>
        </Banner>
      </DivFlexRow>

      <VitrineContainer>
        <ContainerTitle session="main">
          <div>
            <strong>Instrumentos </strong>
            <strong>Destaques</strong>
          </div>

          <div>
            <span>
              it is a long established fact that a reader will be distracted by
              the readable
            </span>
          </div>
        </ContainerTitle>

        <AdsContainer>
          {products.map(
            (product, index) =>
              index < 8 && (
                <button
                  type="button"
                  key={v4()}
                  onClick={() => addModal(product)}
                >
                  <StandardAdCard>
                    <img src={product.photo} alt={product.name} />
                    <AdTitle>
                      <span>{product.name}</span>
                    </AdTitle>
                    <AdDescription>
                      <span>{product.descriptionShort}</span>
                    </AdDescription>
                    <AdPrice>
                      <span>
                        {formatValue(formatCurrenciDecimal(product.price))}
                      </span>
                    </AdPrice>
                  </StandardAdCard>
                </button>
              ),
          )}
        </AdsContainer>

        <ButtonStandard type="button" buttonType="blue">
          Ver mais
        </ButtonStandard>
      </VitrineContainer>

      <BrandsContainer>
        <ContainerTitle session="branch">
          <div>
            <strong>As </strong>
            <strong>Melhores </strong>
            <strong>Marcas</strong>
          </div>

          <div>
            <span>
              it is a long established fact that a reader will be distracted by
              the readable
            </span>
          </div>
        </ContainerTitle>

        <BrandsContent>
          {brands.map(brand => (
            <img src={brand.img} alt={brand.title} />
          ))}
        </BrandsContent>
      </BrandsContainer>

      <AboutUsContainer>
        <AboutUsContent>
          <ContainerTitle session="aboutUs">
            <div>
              <strong />
              <strong>Sobre nós </strong>
            </div>

            <div>
              <span>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using ‘Content
                here, content here’, making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for ‘lorem
                ipsum’ will uncover many web sites still in their infancy. Lorem
                Ipsum as their default model text, and a search for ‘lorem
                ipsum’ will uncover many web sites still in their infancy. Lorem
                Ipsum as their default model text, and a search for ‘lorem
                ipsum’ will uncover many web sites still in their infancy.
              </span>
            </div>
          </ContainerTitle>
        </AboutUsContent>
      </AboutUsContainer>
      <BoxTestimonial>
        <img src={fotoTestimonial} alt="Foto" />
        <div>
          <span>Felipe Salmim</span>
          <span>Designer</span>
        </div>

        <BoxTestimonialText>
          <span>
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for ‘lorem ipsum’
          </span>
        </BoxTestimonialText>
      </BoxTestimonial>
    </Container>
  );
};

export default Home;
