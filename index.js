import { AppRegistry, YellowBox } from 'react-native';
// import App from './src/nav/indexNav';

// import App from './src/views/moreMove'


import App from './src/App'

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated']);
AppRegistry.registerComponent('rn_project', () => App);
