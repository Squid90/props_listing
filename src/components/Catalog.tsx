import React from 'react';
import { Listing } from './Listing.tsx';
import { itemsData } from './itemsData.tsx';


export const Catalog = () => (
  <div>
    <Listing  items = {itemsData} />
  </div>
  
);
