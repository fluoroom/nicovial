import AlbumPage from "./Album";
import { getAlbum, getAlbums } from "../../../src/utils/contentful";

export async function generateMetadata({ params, searchParams },parent) {
  const album = (await getAlbum(params.album)).fields;

  // optionally access and extend (rather than replace) parent metadata

  return {
    ...(await parent),
    title: album.title+" - Nico Vial | Portfolio",
  };
}
const Page = async ({ params }) => {
  const album = await getAlbum(params.album);
  return <AlbumPage album={album.fields} />;
};

export async function generateStaticParams() {
    const albums = await getAlbums()   
    return albums.map((album) => ({
      album: album.sys.id,
    }))
  }

export default Page;
