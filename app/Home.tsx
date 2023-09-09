"use client";
import Layout from "../src/components/layout";
import Card from "../src/components/Card";
import Gallery from "../src/components/Gallery";

const Home = ({albums}) => {
  return (
    <Layout>
      <Gallery leftPadding={0}>
        {albums &&
          albums.map((album, index) => {
            return (
              <Card
                key={album.fields.cover.fields.file.url}
                src={album.fields.cover.fields.file.url}
                title={album.fields.title}
                link={"/album/" + album.sys.id}
              />
            );
          })}
      </Gallery>
    </Layout>
  );
};

export default Home;
