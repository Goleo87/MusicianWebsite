import Fano from "/Fano1.png";
function Home() {
  return (
    <div className="homepage">
      <div className="text">
        <h1>Welcome to my Portfolio</h1>
        <p>
          Hello!, My name is Stefano and I am a web developer, Producer, Content
          Creator based in Germany.{" "}
        </p>
        <p>
          I am passionate about creating and developing websites, music, and
          videos. I am always looking for new projects and collaborations. Feel
          free to contact me.
        </p>
      </div>
      <img className="Img1" src={Fano} alt="picture of the intro" />
    </div>
  );
}

export default Home;
