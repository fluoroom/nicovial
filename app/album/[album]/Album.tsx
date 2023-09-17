"use client";
import Layout from "../../../src/components/layout";
import Card from "../../../src/components/Card";
import Gallery from "../../../src/components/Gallery";

const AlbumPage = ({ album }) => {
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
          album.photos.map((photo, index) => {
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
