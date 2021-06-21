import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <nav>
          <img className="logo" src="./images/headpic-01.png" alt="" />
          <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/about-me">about me</Link></li>
            <li><Link to="blog">blog</Link></li>
            <li><Link to="/contact-me">contact me</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
