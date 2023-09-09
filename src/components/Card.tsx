
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
          .card {
            position: relative;
            margin-left: 6em;
          }
          .card:last-child {
            margin-right: 6em;
          }
          .card > a > img {
            max-height: 70vh;
            max-width: 100vw;
            position: relative;
            box-shadow: 0px 0px 30px 10px black;
            border-radius: 2px;
          }
          .card > a > h2 {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 3em;
            text-align: center;
            width: 100%;
            vertical-align: middle;
            text-shadow: 0px 0px 0.2em black, 0px 0px 0.2em black,
              0px 0px 0.2em black;
          }
          .small {
            font-size: 0.6em;
          }
          br {
            width: 0px;
          }
          .card > a {
            pointer-events: ${link ? "auto" : "none"};
          }
        }
        @media (max-width: 900px) {
          .card {
            position: relative;
            margin-left: 3em;
            margin-top: 4em;
          }
          .card:last-child {
            margin-right: 3em;
          }
          .card > a > img {
            max-height: 70vh;
            max-width: 100vw;
            box-shadow: 0px 0px 30px 10px black;
            border-radius: 2px;
          }
          br {
            width: 0px;
          }
          .card > a > h2 {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 3em;
            text-align: center;
            width: 100%;
            vertical-align: middle;
            text-shadow: 0px 0px 0.2em black, 0px 0px 0.2em black,
              0px 0px 0.2em black;
          }
          .small {
            font-size: 0.6em;
          }
        }
        @media (max-width: 900px) and (orientation: landscape) {
          .card {
            margin-top: 1em;
          }
          .card > a > h2 {
            font-size: 2em;
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
