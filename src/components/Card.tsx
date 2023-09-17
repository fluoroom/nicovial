const Card = ({ src, title, link }) => {
  var title0;
  var title1;
  if (!title) {
    title = " ";
  }
  title = title.split("(");
  title0 = title[0];
  if (title[1]) {
    title1 = "(" + title[1];
    title0 = title0.slice(0, -1);
  }

  return (
    <>
      <style jsx>{`
        @media (min-width: 901px) {
          .card > a {
            pointer-events: ${link.length ? "auto" : "none"};
          }
        }
      `}</style>
      <div className="card">
        <a href={link}>
          <img src={src} />
          <h2>
            {title0}
            <br />
            <span className="small">{title1}</span>
          </h2>
        </a>
      </div>
    </>
  );
};

export default Card;
