import HomeScreen from './Screens/HomeScreen';
import QuestionScreen from './Screens/QuestionScreen';
import NewsScreen from './Screens/NewsScreen';
import TrailScreen from './Screens/TrailsScreen';
import MapScreen from './Screens/MapScreen';
import ShortTrailScreen from './Screens/ShortTrailScreen';
import ShortTrailStartScreen from './Screens/ShortTrailStartScreen';
import LongTrailScreen from './Screens/LongTrailScreen';
import LogbookScreen from './Screens/LogbookScreen';
import LogbookExampleScreen from './Screens/LogbookExampleScreen';
import EventExampleScreen from './Screens/EventExampleScreen';
import { StatusBar } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-ico-material-design';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator(); 
const screenOptions = {
    tabBarStyle:{
        position: "absolute",
        backgroundColor: "#adcb95",
        color: "black",
        bottom: 0,
        right: 0,
        left: 0,
        elevation: 0,
        height: 60
    },
    tabBarLabelStyle: {
        color: "black"
    }
}


function MainApp() {
    return (
        <>
            <StatusBar backgroundColor="#adcb95" barStyle="dark-content" />
            <Tab.Navigator initialRouteName='Home' screenOptions={screenOptions}>
                <Tab.Screen color="black" name="Home" component={HomeScreen}
                options={{headerShown:false,
                tabBarIcon: ({focused})=>{
                    return (<Icon name="home-button" height="30" width="30" style={{ opacity: focused ? 1 : 0.6 }}/>)
                }
                }}/>
                <Tab.Screen name="Question" component={QuestionScreen}
                options={{headerShown:false,
                tabBarIcon: ({focused})=>{
                    return (<Icon name="help-round-button" height="30" width="30" style={{ opacity: focused ? 1 : 0.6 }}/>)
                }
                }}/>
                <Tab.Screen name="Map" component={MapScreen}
                options={{headerShown:false,
                tabBarIcon: ({focused})=>{
                    return (<Icon name="map-placeholder" height="30" width="30" style={{ opacity: focused ? 1 : 0.6 }}/>)
                }
                }}/>
                <Tab.Screen name="News" component={NewsScreen}
                options={{headerShown:false,
                tabBarIcon: ({focused})=>{
                    return (<Icon name="screen-with-news-sections" height="30" width="30" style={{ opacity: focused ? 1 : 0.67 }}/>)
                }
                }}/>
                <Tab.Screen name="Trail" component={TrailScreen}
                options={{headerShown:false,
                tabBarIcon: ({focused})=>{
                    return (<Icon name="man-walking-directions-button" height="30" width="30" style={{ opacity: focused ? 1 : 0.6 }}/>)
                }
                }}/>
            </Tab.Navigator>
        </>
    );
}

function App(props) {
    return(
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen options={{headerShown:false}} name="MainApp" component={MainApp} />
                <Stack.Screen options={{headerStyle:{backgroundColor: "#ADCB95"}}}
name="ShortTrailScreen" component={ShortTrailScreen}/>
                <Stack.Screen options={{headerStyle:{backgroundColor: "#ADCB95"}}}
name="LongTrailScreen" component={LongTrailScreen}/>
                <Stack.Screen options={{headerStyle:{backgroundColor: "#ADCB95"}}}
name="LogbookScreen" component={LogbookScreen}/>
                <Stack.Screen options={{headerStyle:{backgroundColor: "#ADCB95"}}}
name="LogbookExampleScreen" component={LogbookExampleScreen}/>
                <Stack.Screen options={{headerStyle:{backgroundColor: "#ADCB95"}}}
name="ShortTrailStartScreen" component={ShortTrailStartScreen}/>
                <Stack.Screen  options={{headerStyle:{backgroundColor: "#ADCB95"}}}
name="EventExampleScreen" component={EventExampleScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;