import styled, { css } from 'styled-components';

import { shade } from 'polished';


export const Container = styled.div`
  width: 100%;
  height: 3427px;

  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.85);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

export const StandardAdCard = styled.div`
  position: absolute;
  top: 1370px;
  left: 671;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 770px;
  height: 353px;
  margin-top: 27px;

  background: #FFFFFF;
  border-radius: 5px;
  padding: 16px 16px;

  img {
    max-width: 216px;
    max-height: 164px;
    margin: 0 50px 14px;
  };

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  button {
    display: flex;
    align-items: center;
    margin-top: 20px;

    background: transparent;
    border: none;
    text-decoration: underline;

    svg {
      margin: 4px 0 0 4px;
    };
  };
`;

export const AdTitle = styled.div`
  span {
    font-size: 20px;
    font-weight: 400;
  };
`;

export const AdPrice = styled.div`
  margin-top: 20px;

  span {
    font-size: 20px;
    font-weight: 900;
  };
`;

export const AdDescription = styled.div`
  flex: 1;
  text-align: start;
  margin-top: 20px;

  span {
    font-size: 10px;
    font-weight: 400;
    color: #222222;
  };
`;

export const ButtonBlueSolid = styled.button`
  display: flex;
  justify-content: center;

  width: 164px;
  height: 40px;
  margin-top: 20px;

  border: none;
  border-radius: 3px;
  background: #041E50 !important;
  text-decoration: none !important;
  color: #FFFFFF;

  font-size: 11px;
  font-weight: 700;
`;

export const ButtonClose = styled.div`
  width: 60px;
  height: 100%;
  text-align: end;

  > button {
    position: absolute;
    top: 0;
    left: 94%;
    color: #707070;
  }
`;
