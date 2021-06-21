import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="container header-container">
        <nav>
          <img className="logo" src="./images/headpic-01.png" alt={"logo"} />
          <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/about-me">about me</Link></li>
            <li><Link to="blog-page">blog</Link></li>
            <li><Link to="/contact-me">contact me</Link></li>
            <li><Link to="research">research</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
