import trollFaceImage from "../img/Troll-Face.png"

function Header() {
  return (
    <header className="header">
      <img className="header--image" src={trollFaceImage} alt="Troll face" />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="project">React Project</h4>
    </header>
  );
}

export default Header;