import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/Nav-header/App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <App/>
  ,document.getElementById('root')
);
registerServiceWorker();
// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }
//
// const user = {
//   firstName: 'Mario',
//   lastName: 'Sanchez'
// };
//
// const element = (
//   <h1>
//     Hola, {formatName(user)}!
//   </h1>
// );
//
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );
