
import './App.css';
import { Component } from 'react';

class Footer extends Component {
  render() {
    return(
      <footer>
        <h2>홍길동</h2>
        my React app is very good!
      </footer>
    );
  }
}

class Content extends Component {
  render(){
    return(
      <article>
        <h2>HTML</h2>
        HTML is HyperText Markup Language Language.
      </article>
    );
  }
}

class TOC extends Component {
  render(){
    return(
      <nav>
        <ul>
            <li><a href="#">HTML</a></li>
            <li><a href="#">CSS</a></li>
            <li><a href="#">JavaScript</a></li>
        </ul>
      </nav>
    );
  }
}

class Subject extends Component {
  render() {
    return (
      <header>
        <h1>WEB</h1>
        world wide web!
      </header>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
       <Subject></Subject>
       <TOC></TOC>
       <Content></Content>
       <Footer></Footer>
      </div>
    );
  }
}

export default App;
