//connect application to sanity

import  SanityClient  from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url';

// create a sanity object
 export const client = SanityClient({
  projectId: 'cyqizus2',
  dataset: 'production',
  apiVersion: '2022-05-07',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN

});

// create a builder for the client and pass in image url builder
const builder = imageUrlBuilder(client);

// get the url source for the image
export const urlFor = (source) => builder.image(source)
