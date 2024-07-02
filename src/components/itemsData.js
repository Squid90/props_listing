import  etsy  from '../data/etsy.json';

  console.log('Данные из файла через JSON:', JSON.parse(JSON.stringify(etsy)));
  console.log('Данные из файла без JSON:', etsy);


   export const itemsData = [etsy[0]]
  // export const itemsData = [JSON.parse(JSON.stringify(etsy))[0]]



// export const itemsData = [
//   {
//     "listing_id": 708099714,
//     "url": "https://www.etsy.com/listing/708099714/beautiful-lodolite-quartz-rutile-mix?utm_source=netoapi&utm_medium=api&utm_campaign=api",
//     "MainImage": {
//       "url_570xN": "https://i.etsystatic.com/16754592/r/il/63cb4f/1945247446/il_570xN.1945247446_kh4u.jpg"
//     },
//     "title": "Beautiful Lodolite Quartz Rutile Mix Gemstone, 23x18mm, 29Cts Lodolite Quartz Rutile Gemstone, Handmade Jewelry Making Loose Gemstone BB-400",
//     "currency_code": "USD",
//     "price": "15.99",
//     "quantity": 1
//   },
//   {
//     "listing_id": 708099714,
//     "url": "https://www.etsy.com/listing/708099714/beautiful-lodolite-quartz-rutile-mix?utm_source=netoapi&utm_medium=api&utm_campaign=api",
//     "MainImage": {
//       "url_570xN": "https://i.etsystatic.com/16754592/r/il/63cb4f/1945247446/il_570xN.1945247446_kh4u.jpg"
//     },
//     "title": "Beautiful Lodolite Quartz Rutile Mix Gemstone, 23x18mm, 29Cts Lodolite Quartz Rutile Gemstone, Handmade Jewelry Making Loose Gemstone BB-400",
//     "currency_code": "USD",
//     "price": "15.99",
//     "quantity": 1
//   },
//   {
//     "listing_id": 708099714,
//     "url": "https://www.etsy.com/listing/708099714/beautiful-lodolite-quartz-rutile-mix?utm_source=netoapi&utm_medium=api&utm_campaign=api",
//     "MainImage": {
//       "url_570xN": "https://i.etsystatic.com/16754592/r/il/63cb4f/1945247446/il_570xN.1945247446_kh4u.jpg"
//     },
//     "title": "Beautiful Lodolite Quartz Rutile Mix Gemstone, 23x18mm, 29Cts Lodolite Quartz Rutile Gemstone, Handmade Jewelry Making Loose Gemstone BB-400",
//     "currency_code": "USD",
//     "price": "15.99",
//     "quantity": 1
//   },
//   {
//     "listing_id": 708099714,
//     "url": "https://www.etsy.com/listing/708099714/beautiful-lodolite-quartz-rutile-mix?utm_source=netoapi&utm_medium=api&utm_campaign=api",
//     "MainImage": {
//       "url_570xN": "https://i.etsystatic.com/16754592/r/il/63cb4f/1945247446/il_570xN.1945247446_kh4u.jpg"
//     },
//     "title": "Beautiful Lodolite Quartz Rutile Mix Gemstone, 23x18mm, 29Cts Lodolite Quartz Rutile Gemstone, Handmade Jewelry Making Loose Gemstone BB-400",
//     "currency_code": "USD",
//     "price": "15.99",
//     "quantity": 1
//   },
//   {
//     "listing_id": 708099714,
//     "url": "https://www.etsy.com/listing/708099714/beautiful-lodolite-quartz-rutile-mix?utm_source=netoapi&utm_medium=api&utm_campaign=api",
//     "MainImage": {
//       "url_570xN": "https://i.etsystatic.com/16754592/r/il/63cb4f/1945247446/il_570xN.1945247446_kh4u.jpg"
//     },
//     "title": "Beautiful Lodolite Quartz Rutile Mix Gemstone, 23x18mm, 29Cts Lodolite Quartz Rutile Gemstone, Handmade Jewelry Making Loose Gemstone BB-400",
//     "currency_code": "USD",
//     "price": "15.99",
//     "quantity": 1
//   },{
//     "listing_id": 708099714,
//     "url": "https://www.etsy.com/listing/708099714/beautiful-lodolite-quartz-rutile-mix?utm_source=netoapi&utm_medium=api&utm_campaign=api",
//     "MainImage": {
//       "url_570xN": "https://i.etsystatic.com/16754592/r/il/63cb4f/1945247446/il_570xN.1945247446_kh4u.jpg"
//     },
//     "title": "Beautiful Lodolite Quartz Rutile Mix Gemstone, 23x18mm, 29Cts Lodolite Quartz Rutile Gemstone, Handmade Jewelry Making Loose Gemstone BB-400",
//     "currency_code": "USD",
//     "price": "15.99",
//     "quantity": 1
//   },
// ];