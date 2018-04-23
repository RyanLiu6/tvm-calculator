import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './components/registerServiceWorker';
import { Element, Events, scrollSpy, animateScroll as scroll } from 'react-scroll';


import App from './components/App';
import Test from './components/Test';
import Intro from './components/Intro';
import './index.css';

// class IndexPage extends Component {
//   componentDidMount() {
//     Events.scrollEvent.register('begin', (to, element) => {
//       console.log('begin', arguments)
//     })
//
//     Events.scrollEvent.register('end', function(to, element) {
//       console.log('end', arguments)
//     })
//
//     scrollSpy.update()
//   }
//
//   componentWillMount() {
//     Events.scrollEvent.remove('begin')
//     Events.scrollEvent.remove('end')
//   }
//
//   render() {
//     console.log("FUcK");
//     return (
//       <div style={{ height: '100%' }}>
//         <Intro />
//       </div>
//     )
//   }
// }

ReactDOM.render(
  <div>
    <Intro />
    <App />
  </div>,
  document.getElementById('root')
);

registerServiceWorker();
