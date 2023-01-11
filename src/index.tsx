
import React from 'react'; // Import React

import ReactDOM from 'react-dom';
import { AppRegistry } from 'react-native';
import { App } from './App';


console.log(`React: ${React}`);
console.log(`React: ${React.version}`);

AppRegistry.registerComponent('App', () => App);
AppRegistry.runApplication('App', {
  initialProps: {},
  rootTag: document.getElementById('root')
});