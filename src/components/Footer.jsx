import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="container footer-container">
        <a href="/"><i className="fab fa-facebook-square"></i></a>
        <a href="/"><i className="fab fa-twitter-square"></i></a>
        <a href="/"><i className="fab fa-instagram-square"></i></a>
      </div>
    </footer>
  );
}

export default Footer;
