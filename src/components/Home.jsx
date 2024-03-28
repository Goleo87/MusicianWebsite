
import Fano from "/Fano1.png";
function Home() {
  return (
    <div className="homepage">
      <div className="text">
        <h2>Welcome to my website
        </h2>
        <p>
          This is the home page where you can
          find some information about me.
          <p>You can navigate to other pages using the
          links above.</p> 
        </p>
      </div>
      <img className="hme" src={Fano} alt="picture of the intro" />
    </div>
  );
}

export default Home;
