import { Link } from 'react-router-dom';

const AboutMe = () => {
  return (

    <div className="main">
      <div className="container main-aboutme">
        <h2>winter</h2>
        <div className="theme theme-01">
          <div className="card card-1-1">
            <img src="images/20210227101447.jpg" alt="my family" className="aboutme-img" />
            <span className="aboutme-message">family</span>
          </div>
          <div className="card card-1-6">
            <img src="images/20210227101409.jpg" alt="my family" className="aboutme-img" />
            <span>family</span>
          </div>
          <div className="card card-1-2">
            <img src="images/20210227101443.jpg" alt="my family" className="aboutme-img" />
            <span>family</span>
          </div>
          <div className="card card-1-3">
            <img src="images/20210227101432.jpg" alt="my family" className="aboutme-img" />
            <span>family</span>
          </div>
          <div className="card card-1-4">
            <img src="images/20210227101437.jpg" alt="my family" className="aboutme-img" />
            <span>family</span>
          </div>
          <div className="card card-1-5">
            <img src="images/20210227101427.jpg" alt="my family" className="aboutme-img" />
            <span>family</span>
          </div>

        </div>
        <h2>summer</h2>
        <div className="theme theme-02">
          <div className="card card-2-1">
            <img src="images/20210227101505.jpg" alt="my wife" className="aboutme-img" />
            <span>family</span>
          </div>
          <div className="card card-2-2">
            <img src="images/20210227101457.jpg" alt="my wife" className="aboutme-img" />
            <span>family</span>
          </div>
          <div className="card card-2-2">
            <img src="images/20210227101501.jpg" alt="my wife" className="aboutme-img" />
            <span>family</span>
          </div>
        </div>
        <h2>exercise</h2>
        <div className="theme theme-03">
          <div className="card card-3-1">
            <img src="images/20210227101452.jpg" alt="my wife" className="aboutme-img" />
            <span>family</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
