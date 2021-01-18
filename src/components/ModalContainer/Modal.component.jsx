/* eslint-disable prettier/prettier */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import { FiX, FiChevronRight } from 'react-icons/fi';

import formatValue from '../../utils/formatValue';
import formatCurrenciDecimal from '../../utils/formatCurrenciDecimal';

import { useModal } from '../../hooks/Modal'

import {
  Container,
  StandardAdCard,
  AdTitle,
  AdPrice,
  AdDescription,
  ButtonBlueSolid,
  ButtonClose,
} from './Modal.css';

const Modal = ({ product }) => {
  const { removeModal } = useModal();

  return product
    ? product.map(item => (
      <Container key={item.id}>
        <StandardAdCard>
          <img src={item.photo} alt={item.productName} />
          <div>
            <AdTitle>
              <span>{item.productName}</span>
            </AdTitle>
            <AdPrice>
              <span>{formatValue(formatCurrenciDecimal(item.price))}</span>
            </AdPrice>
            <AdDescription>
              <span>{item.descriptionShort}</span>
            </AdDescription>

            <button type="button">
              <span>Veja mais detalhes do produto</span>
              <FiChevronRight size={13} />
            </button>

            <ButtonBlueSolid type="button">
              Adicionar ao carrinho
            </ButtonBlueSolid>
          </div>
          <ButtonClose onClick={() => removeModal(item.id)}>
            <button type="button">
              <FiX size={25} />
            </button>
          </ButtonClose>
        </StandardAdCard>
      </Container>
    ))
    : null;
};

export default Modal;
