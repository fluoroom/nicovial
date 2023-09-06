"use client";
import React, { useEffect, useState } from "react";
import Layout from "../../../src/components/layout";
import Card from "../../../src/components/Card";
import Gallery from "../../../src/components/Gallery";
import { getAlbum } from "../../../src/utils/contentful";
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Nico Vial | Portfolio'
}

const AlbumPage=({ params}) => {
  
  const [album, setAlbum] = useState({
    title: "",
    photos: [{ fields: { file: { url: "a" } }, sys: { id: "" } }],
  });
  useEffect(() => {
    document.title="Nico Vial | Portfolio";
    getAlbum(params.album).then((res) => {
      setAlbum(JSON.parse(JSON.stringify(res.fields)));
      document.title=`${res.fields.title} - Nico Vial | Portfolio`;
    });
  }, []);

  var title0;
  var title1;
  var title;
  if (album.title) {
    title = album.title.split("(");
    title0 = title[0];
    if (title[1]) {
      title1 = "(" + title[1];
      title0 = title0.slice(0, -1);
    }
  }
  var description;
  description = "";

  return (
    <Layout>
      <style jsx>
        {`
          @media (min-width: 901px) {
            #galleryText {
              position: absolute;
              text-align: center;
              top: 0;
              left: 0;
              height: 100vh;
              display: flex;
              z-index: 1;
              align-items: center;
              width: 35vw;
              justify-content: center;
              margin-left: 2em;
              flex-direction: column;
            }
            #galleryText > h2 {
              font-size: 4.5em;
              text-align: center;
              vertical-align: middle;
              margin-bottom: 0.5em;
              text-shadow: 0px 0px 0.2em black, 0px 0px 0.2em black,
                0px 0px 0.2em black;
            }
            #galleryText p {
              display: block;
            }
            #galleryText p a {
              text-decoration: underline;
            }
            .small {
              font-size: 0.6em;
            }
          }
          @media (max-width: 900px) {
            #galleryText {
              position: absolute;
              text-align: center;
              top: 0;
              left: 0;
              height: 100vh;
              display: flex;
              align-items: center;
              width: 65vw;
              justify-content: center;
              margin-left: 1.5em;
              flex-direction: column;
            }
            #galleryText > h2 {
              font-size: 4.5em;
              text-align: center;
              vertical-align: middle;
              margin-bottom: 0.5em;
              text-shadow: 0px 0px 0.2em black, 0px 0px 0.2em black,
                0px 0px 0.2em black;
            }
            #galleryText p {
              display: block;
            }
            #galleryText p a {
              text-decoration: underline;
            }
            .small {
              font-size: 0.6em;
            }
          }
        `}
      </style>
      <div id="galleryText">
        <h2>
          {title0}
          <br />
          <span className="small">{title1}</span>
        </h2>
        <div dangerouslySetInnerHTML={{ __html: description }}></div>
      </div>
      <Gallery leftPadding>
        {album.title &&
          album.photos.map((photo) => {
            return (
              <Card
                src={photo.fields.file.url}
                key={photo.sys.id}
                title=""
                link=""
              />
            );
          })}
      </Gallery>
    </Layout>
  );
};
export default AlbumPage;
