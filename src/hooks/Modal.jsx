import React, { createContext, useCallback, useContext, useState } from 'react';

import { v4 } from 'uuid';

import Modal from '../components/ModalContainer';

const ModalContext = createContext({});

const ModalProvider = ({ children }) => {
  const [product, setProduct] = useState([]);

  const addModal = useCallback(
    ({ productName, descriptionShort, photo, price }) => {
      const id = v4();

      const modal = {
        id,
        productName,
        descriptionShort,
        photo,
        price,
      };

      setProduct([modal]);
    },
    [],
  );

  const removeModal = useCallback(() => {
    setProduct([]);
  }, []);

  return (
    <ModalContext.Provider value={{ addModal, removeModal }}>
      {children}
      <Modal product={product} />
    </ModalContext.Provider>
  );
};

const useModal = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }

  return context;
};

export { ModalProvider, useModal };
