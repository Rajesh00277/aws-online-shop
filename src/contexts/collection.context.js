import { createContext } from 'react';

import SHOP_DATA from './shop.data';

const collectionsContext = createContext(SHOP_DATA);

export default collectionsContext;
