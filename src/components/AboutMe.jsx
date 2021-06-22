import { Link } from 'react-router-dom';

const AboutMe = () => {
  return (

    <div className="main">
      <div className="container main-aboutme">
        <img className="main-picture" src="./images/glacier-2019-02.jpg" alt={"ice land"} />
        <div className="article">
          <h2>About me</h2>
          <p>
            My name is Hao Gong and I am from China.
          </p>
          <p>
            When I was in university I studied in the computer science department. After graduated from university,  I have worked as a software developer for more than  20 years.
            I have always been passionate about learning something interesting and I like to travel all over the world.
          </p>
          <p>
            There are three people in my family, my wife, my son, and me.  I hope they could come to Canada soon.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
