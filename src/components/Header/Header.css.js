import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 154px;
`;

export const ContainerMainInfo = styled.div`
  height: 37px;
  background: #041e50;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 3;
`;

export const ContainerInfo = styled.div`
  max-width: 1280px;
  padding: 0 138px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ContentInfo = styled.div`
  height: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;

  img {
    margin-right: 16px;
    max-height: 21px;
  };

  strong {
    font-weight: 700;
    font-size: 10px;
    color: #FFFFFF;
  };
`;

export const TextInfoRegular = styled.strong`
  font-weight: 400 !important;
  margin-right: 2px;
`;

export const Divider = styled.span`
  font-weight: 300;
  font-size: 17px;
  color: #FFFFFF;
  opacity: 0.4;
`;

export const ConteninerMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 138px;
  max-width: 1280px;
  height: 75px;
  z-index: 2;
 `;

export const ContentMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;

  strong {
    font-weight: 700;
    font-size: 10px;
    color: #041E50;
  };

  span {
    font-weight: 400;
    font-size: 7px;
    color: #041E50;
  };
`;

export const DivFlexRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const ButtomTransparent = styled.button`
  background: transparent;
  border: none;
`;

export const Logo = styled.div`
  img {
    height: 28px;
    width: 179px;
  };
`;

export const Form = styled.form`
  margin: 20px 0;
  display: flex;
  align-items: center;

  input {
    flex: 1;
    width: 340px;
    height: 41px;
    border: 1px solid #707070;
    border-radius: 4px;
    padding: 19px;
    font-size: 9px;
  };

  img {
    height: 19px;
    width: 19px;
  };

  button {
    margin-left: -40px;
    border: none;
    background: transparent;
  };
`;

export const Whatsapp = styled.div`
  img {
    margin: 0 8px 0 40px;
    height: 22px;
    width: 22px;
  };
`;

export const User = styled.div`
  img {
    margin-right: 8px;
    height: 23px;
    width: 19px;
  };
`;

export const Poligono = styled.div`
  img {
    margin-left: 6px;
    height: 3px;
    width: 5px;
  };
`;

export const BoxCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  padding: 20px 10px;
  background: #041E50;
  z-index: -1;

  img {
    margin: 30px 0px 0px !important;
    width: 22px !important;
    height: 27px !important;
  };

  span {
    line-height: 16px;
    color: #FFFFFF;
    font-size: 7px;

    & + span {
      font-size: 10px !important;
    };
  };
`;

export const Bag = styled.div`
  img {
    margin-right: 0px !important;
    width: 22px !important;
    height: 27px !important;
  };
`;

export const ContainermainMenu = styled.div`
  height: 42px;
  background: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-top: 1px solid #C6C6C6;
  z-index: 1;
`;

export const ContainerMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 138px;
  width: 100%;
  max-width: 1280px;
  padding-right: 250px;
  height: 42px;
`;

export const ContentMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;

  button {
    font-weight: 700;
    font-size: 10px;
    color: #041E50;
    background: transparent;
    border: none;
    text-transform: uppercase;
  };
`;



