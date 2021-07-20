import borisPicture from "../ressources/pictures/boris-pic.jpg";

const LeftMain = () => {
  return (
    <div className="sideLeft">
      <h3 className="textTitleUnderLine">About Me :</h3>
      <p>Hey I am Boris Akpama.</p>
      <p>A React.js developer from Paris.</p>
      <img
        className="pictureAkpamaBoris"
        src={borisPicture}
        alt="the developer behind this project Boris Akpama"
      />
      <h3 className="textTitleUnderLine">Where can you find me ?</h3>
      <div>
        <a
          href="https://www.linkedin.com/in/borisakpama/"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/borisakpama/"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </div>
    </div>
  );
};
export default LeftMain;
