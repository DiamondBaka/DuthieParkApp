import HomeScreen from './Screens/HomeScreen';
import QuestionScreen from './Screens/QuestionScreen';
import NewsScreen from './Screens/NewsScreen';
import TrailScreen from './Screens/TrailsScreen';
import MapScreen from './Screens/MapScreen';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-ico-material-design';

const Tab = createBottomTabNavigator(); 
const screenOptions = {
    tabBarStyle:{
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        elevation: 0,
        height: 60
    }
}


function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName='Home' screenOptions={screenOptions}>
                <Tab.Screen name="Home" component={HomeScreen}
                options={{headerShown:false, statusBarColor:"#adcb95",
                tabBarIcon: ({focused})=>{
                    return (<Icon name="home-button" height="30" width="30" />)
                }
                }}/>
                <Tab.Screen name="Question" component={QuestionScreen}
                options={{headerShown:false, statusBarColor:"#adcb95",
                tabBarIcon: ({focused})=>{
                    return (<Icon name="help-round-button" height="30" width="30" />)
                }
                }}/>
                <Tab.Screen name="Map" component={MapScreen}
                options={{headerShown:false, statusBarColor:"#adcb95",
                tabBarIcon: ({focused})=>{
                    return (<Icon name="map-placeholder" height="30" width="30" />)
                }
                }}/>
                <Tab.Screen name="News" component={NewsScreen}
                options={{headerShown:false, statusBarColor:"#adcb95",
                tabBarIcon: ({focused})=>{
                    return (<Icon name="screen-with-news-sections" height="30" width="30" />)
                }
                }}/>
                <Tab.Screen name="Trail" component={TrailScreen}
                options={{headerShown:false, statusBarColor:"#adcb95",
                tabBarIcon: ({focused})=>{
                    return (<Icon name="man-walking-directions-button" height="30" width="30" />)
                }
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}
export default App;