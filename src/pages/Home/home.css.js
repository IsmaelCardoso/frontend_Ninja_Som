import styled, { css } from 'styled-components';

import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BannerTypeVariation = {
  large: css`
    align-items: flex-start;
    flex-direction: column;
    width: 1280px;
    height: 537px;
    margin-top: -32px;
    padding-left: 165px;
  `,

  medium: css`
    width: 640px;
    height: 376px;
    align-items: center;
  `,
};

export const Banner = styled.div`
  display: flex;
  justify-content: center;

  ${props => BannerTypeVariation[props.type || "large"]};

  ${props => !!props.filterGrey && 'filter: grayscale(60%)'};

  ${props => `background: url(${props.img}) no-repeat center`};
`;

const BannerContentTypeVariation = {
  large: css`
    width: 360px;
  `,

  medium: css`
    width: 100%;
  `,
};

export const ContentBanner = styled.div`
  ${props => BannerContentTypeVariation[props.type || "large"]};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  span {
    ${props => props.type === 'large' && 'font-size: 16px'};
    font-weight: 300;
    letter-spacing: 5px;
    color: #FFFFFF;
    text-transform: uppercase;
    text-align: center;
  };

  img {
    margin: 10px 0 15px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: ${props => props.type === "large" ? 'flex-start' : 'center'};

    span {
    font-weight: 900;
    font-size: 46px;
    text-align: start;

      & + span {
        font-weight: 300;
        font-size: 46px;
      };
    };
  };
`

export const Categories = styled.div`
  width: 1280px;
  height: 212px;
  padding: 34px 138px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: auto;
    height: auto;
    transition: background-color 0.2s;

    button {
      width: auto;
      height: auto;
      border: none;
      font-weight: 700;
      color: #707070;
      text-transform: uppercase;
      transition: color 0.2s;
      display: flex;
      align-items: center;
      flex-direction: column;
      background: transparent;

      &:hover {
        color: #041E50;

        img {
          background: ${shade(0.1, 'rgba(112, 112, 112, 0.4)')};
          border-radius: 100%;
        }
      };

      img {
        width: 106px;
        height: 106px;
        margin-bottom: 19px;
      };
    };
  };
`;

export const DivFlexRow = styled.div`
  display: flex;
`;

export const VitrineContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContainerTitleTypeVariation = {
  main: {
    fontW: 900,
    fontS: "16px",
    colors: '#222222',
  },
  branch: {
    fontW: 700,
    fontS: "16px",
    colors: '#A5A5A5',
  },

  aboutUs: {
    fontW: 700,
    fontS: "12px",
    colors: '#222222',
  },
}

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 51px;

  div {
    text-align: center;

    strong {
      font-size: 25px;
      text-transform: uppercase;

      & + strong {
        font-weight: ${props => ContainerTitleTypeVariation[props.session].fontW};

        & + strong {
          font-weight: 400;
          text-transform: uppercase;
        };
      };
    };

    & + div {
      margin-top: 15px;

      span {
        font-size: ${props => ContainerTitleTypeVariation[props.session].fontS};
        color: ${props => ContainerTitleTypeVariation[props.session].colors};
      };
    };
  };
`;

export const AdsContainer = styled.div`
  max-width: 1050px;
  width: 100%;
  margin: 16px 0 70px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;

  button {
    border: none;
    background: transparent;
  }
`;

export const StandardAdCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 216px;
  margin-top: 27px;
  padding: 16px 0;
  transition: 0.2s;

  &:hover {
    border-radius: 5px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

    img {
      transition: 0.2s;
      display: block;

      &:hover {
        transform: translateY(-15px);
      };
     };
  };

  img {
    max-width: 216px;
    max-height: 164px;
    margin-bottom: 14px;
  };
`;

export const AdTitle = styled.div`
  text-align: center;

  span {
    font-size: 15px;
    font-weight: 700;
  };
`;

export const AdDescription = styled.div`
  width: 202px;
  text-align: center;
  margin-top: 12px;
  overflow: hidden;

  span {
    font-size: 10px;
    font-weight: 300;
    color: #222222;
  };
`;

export const AdPrice = styled.div`
  text-align: center;
  margin-top: 12px;

  span {
    font-size: 18px;
    font-weight: 700;
  };
`;

export const BrandsContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BrandsContent = styled.div`
  width: 100%;
  height: 51px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AboutUsContainer = styled.div`
  max-width: 1001px;
  width: 100%;
  margin: 0 0 103px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AboutUsContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BoxTestimonial = styled.div`
  margin-bottom: -36px;
  width: 1002px;
  height: 174px;
  background: #F7F7F7;
  border-radius: 5px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;


  img {
    max-width: 80px;
    max-height: 80px;
    margin-right: 12px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    span {
      line-height: 16px;
      font-weight: 700;
      & + span {
        font-size: 10px;
      };
    };
  };
`;

export const BoxTestimonialText = styled.div`
  width: 551px;
  height: 76px;
  margin-left: 24px;
  padding: 0 25px;
  background: #FFFFFF;
  border-radius: 5px;
  box-shadow: -3px 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &:after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right: 10px solid #FFFFFF;
    left: -10px;
    top: 35%;
  }

  span {
    color: #2F2F2F;
    font-size: 13px;
    line-height: 16px;
  };
`;
