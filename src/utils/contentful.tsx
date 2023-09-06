
import { createClient } from 'contentful';
const getCredentials=()=>{
  return [process.env.CONTENTFUL_SPACE_ID??'kkqbqm4hi2mi',process.env.CONTENTFUL_ACCESS_TOKEN??'9TeIhvGmpq_sCPoYBtHFQIBxKVL9RlpmosUGx1uGvfQ'];
}
const client = createClient({
  space: getCredentials()[0],
  accessToken: getCredentials()[1],
});

// Retrieve the list of blog posts from Contentful
export const getAlbums = async () => {
  const response = await client.getEntries({
    content_type: 'album',
  });

  return response.items;
};

export const getAlbum = async (id:string) => {
  const response = await client.getEntry(id);

  return response;
};
