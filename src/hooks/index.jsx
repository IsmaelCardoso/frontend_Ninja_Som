import React from 'react';

import { ModalProvider } from './Modal';

const AppProvider = ({ children }) => <ModalProvider>{children}</ModalProvider>;

export default AppProvider;
