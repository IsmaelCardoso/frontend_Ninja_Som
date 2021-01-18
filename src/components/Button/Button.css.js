import styled, { css } from 'styled-components';

import { shade } from 'polished';

const BannerButtonTypeVariation = {
  baseLine: css`
    border: none;
    border-bottom: 1px solid #FFFFFF;
    width: 64px;
    color: #FFFFFF;
  `,

  white: css`
    border: 1px solid #FFFFFF;
    border-radius: 4px;
    width: 155px;
    margin-top: 25px;
    color: #FFFFFF;
  `,

  blue: css`
    border: 1px solid #041E50;
    border-radius: 4px;
    width: 155px;
    margin-top: 25px;
`,
};

const ButtonStandard = styled.button`
  background: transparent;
  height: ${props => props?.height || '50px'};
  font-weight: ${props => props?.fontW || 'normal'};
  text-transform: uppercase;
  transition: background-color 0.2s;

  ${props => BannerButtonTypeVariation[props.buttonType || "white"]};
  ${props => props?.width && `width: ${props.width}`};

  &:hover {
  border-radius: 2px 2px;
  background: ${shade(0.1, 'rgba(112, 112, 112, 0.4)')};
};
`

export default ButtonStandard;
