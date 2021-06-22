// import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="main">
      <div className="container  home-page">
        <div className="welcome-words">
          <h1>Welcome to my portfolio</h1>
          <p>I am a MITT student now. So far I learnt HTML, CSS, Javascript, React.</p>
          <p>This website is based on React and deployed on Github. </p>
        </div>
        <img className="main-picture" src="./images/glacier-2019-01.jpg" alt={"ice land"} />
      </div>
    </div>
  );
}

export default HomePage;
