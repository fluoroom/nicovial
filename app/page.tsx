"use client";
import React, { useEffect, useState } from "react";
import Layout from "../src/components/layout";
import Card from "../src/components/Card";
import Gallery from "../src/components/Gallery";
import { getAlbums } from "../src/utils/contentful";

const Page = () => {
  const [albums, setAlbums] = useState([]);
  function shuffleArray(array) {
    const newArray = [...array]; // Create a shallow copy of the input array to avoid modifying the original array.
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }
  useEffect(() => {
    document.title="Nico Vial | Portfolio";
    getAlbums().then((res) => {
      setAlbums(res);
    });
  }, []);

  return (
    <Layout>
      <Gallery leftPadding={0}>
        {albums &&
          shuffleArray(albums).map((album, index) => {
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

export default Page;
