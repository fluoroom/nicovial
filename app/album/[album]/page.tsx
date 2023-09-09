import AlbumPage from "./Album";
import { getAlbum } from "../../../src/utils/contentful";

export async function generateMetadata({ params, searchParams },parent) {
  const album = (await getAlbum(params.album)).fields;

  // optionally access and extend (rather than replace) parent metadata
  const parentData = await parent;

  return {
    ...(await parent),
    title: album.title+" - Nico Vial | Portfolio",
  };
}
const Page = async ({ params }) => {
  const album = await getAlbum(params.album);
  return <AlbumPage album={album.fields} />;
};

export default Page;
