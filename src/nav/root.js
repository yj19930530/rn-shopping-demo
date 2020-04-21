import {
    createStackNavigator,
} from 'react-navigation';

// import Login from "../views/login/login";
import TabNav from '../nav/tab';

const App = createStackNavigator({
    // Login: {
    //     screen: Login,
    //     navigationOptions: {
    //         header: null
    //     }
    // },
    TabNav: {
        screen: TabNav,
        navigationOptions: {
            header: null
        }
    },
    // mine: {
    //     screen: mine,
    //     navigationOptions: {
    //         headerStyle: {
    //             backgroundColor: "#42BD56"
    //         },
    //         headerTitleStyle: {
    //             color: "#FFFFFF"
    //         },
    //         headerTintColor: "#FFFFFF"
    //     },
    // },
});

export default App;