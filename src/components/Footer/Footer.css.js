import styled from 'styled-components';

export const Background = styled.div`
  background: ${props => props.color === "blue" ? '#041e50' : '#FFFFFF'};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const ContainerMain = styled.div`
  width: 100%;
  height: 389px;
  padding-top: 108px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const ContentMain = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  ${props => props.marginTop && 'margin-top: 30px'};

  span {
    font-weight: 700;
    color: #FFFFFF;
    margin-bottom: 20px;
    text-transform: uppercase;
  };

  strong {
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
    color: #FFFFFF;
    margin-bottom: 20px;
  };

  button {
    background: transparent;
    border: none;
    font-size: 12px;
    line-height: 20px;
    color: #FFFFFF;
    text-transform: uppercase;
  };

  div {
    display: flex;
    flex-direction: row;

    img {
      max-height: 48px;

      & + img {
        margin-left: 7px;
      };
    };
  };
`;

export const SocialMidia = styled.div`
  margin-top: 40px;

  button {
    background: transparent;
    border: none;

    img {
      max-width: 15px;
      max-height: 15px;
    };

    & + button {
      margin-left: 20px;
    };
  };
`;

export const BoxNewsletter = styled.div`
  margin-top: -46px;
  width: 276px;
  height: 249px;
  background: #FFFFFF;
  padding: 33px 26px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;

  div {
    span {
      font-size: 14px;
      line-height: 24px;
      & + span {
        font-weight: 700;
      };
    };
  };

  span {
    font-size: 10px;
  };
`;

export const Form = styled.form`
  margin: 5px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  input {
    flex: 1;
    width: 218px;
    height: 44px;
    border: none;
    border-bottom: 1px solid #041E50;
    padding: 10px 21px;
    font-size: 12px;

    &::placeholder {
      color: #041E50;
    }

    & + input {
      margin-top: 10px;
    };
  };
`;

export const ContainerInfo = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentInfo = styled.div`
  max-width: 1280px;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  span {
    width: 507px;
    font-size: 10px;
    font-weight: 400;
    color: #010101;
    letter-spacing: 0;
  };

  div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 74px;
    flex: 1;

    img {
      max-height: 36px;

      & + img {
        margin-left: 41px;
      };
    };
  };
`;

