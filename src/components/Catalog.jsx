import React from 'react';
import { Listing } from './Listing';
import { itemsData } from './itemsData';


export const Catalog = () => (
  <div>
    <Listing items={itemsData} />
  </div>
);