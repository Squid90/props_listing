import React from 'react';
import { Listing } from './Listing.tsx';
import etsy from '../data/etsy.json';

export interface Item {
  listing_id: number;
  url?: string;
  MainImage?: {
    url_570xN: string;
  };
  title?: string;
  currency_code?: string;
  price?: string;
  quantity?: number;
}


export const Catalog = () => {
  const data: Item[] = etsy.map(({listing_id, url, MainImage, title, currency_code, price, quantity}) => ({
    listing_id, url, MainImage, title, currency_code, price, quantity
  }))

  return (
    <div>
      <Listing  items = {data} />
    </div>
    
  )
};