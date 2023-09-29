import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News key="business"  category="business" />} />
            <Route exact path="/Health" element={<News key="Health" category="Health" />} />
            <Route exact  path="/Business" element={<News key="Business" category="Business" />} />
            <Route exact path="/Science" element={<News key="Science"  category="Science" />} />
            <Route exact path="/Entertainment" element={<News key="Entertainment"  category="Entertainment" />} />
            <Route exact path="/Technology" element={<News key="Technology"  category="Technology" />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
