// import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="main">
      <div className="container  home-page">
        <img className="logo" src="./images/headpic-01.png" alt={"logo"} />
        <img className="logo" src="/images/headpic-01.png" alt={"logo"} />
        <img className="logo" src="/public/images/headpic-01.png" alt={"logo"} />
        <img className="logo" src="./../public/images/headpic-01.png" alt={"logo"} />
        <img className="logo" src="./../../public/images/headpic-01.png" alt={"logo"} />
        <img className="main-picture" src="/public/images/glacier-2019-01.jpg" alt={"ice land"} />
        <img className="main-picture" src="./images/glacier-2019-01.jpg" alt={"ice land"} />
        <img className="main-picture" src="/images/glacier-2019-01.jpg" alt={"ice land"} />
        <img className="main-picture" src="./../images/glacier-2019-01.jpg" alt={"ice land"} />
        <img className="main-picture" src="./../../public/images/glacier-2019-01.jpg" alt={"ice land"} />
        <h2>glacier 2019</h2>
        <p></p>
      </div>
    </div>
  );
}

export default HomePage;
