import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutMe from './components/AboutMe';
import ContactPage from './components/ContactPage';
import BlogPage from './components/BlogPage';
import BlogPostPage from './components/BlogPostPage';


function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/about-me">
          <AboutMe />
        </Route>
        <Route path="/contact-me">
          <ContactPage />
        </Route>
        <Route path="/blog-page">
          <BlogPage />
        </Route>
        <Route path="/blog-post-page/:slogon">
          <BlogPostPage />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;

//       Home Page
// About Me Page
// Contact Page
// Blog Page
// Blog Post Page
