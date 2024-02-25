import HomeScreen from './Screens/HomeScreen';
import QuestionScreen from './Screens/QuestionScreen';
import NewsScreen from './Screens/NewsScreen';
import TrailScreen from './Screens/TrailsScreen';
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
                    return (<Icon name="house" height="40" width="40" />)
                }
                }}/>
                <Tab.Screen name="Question" component={QuestionScreen}/>
                <Tab.Screen name="News" component={NewsScreen}/>
                <Tab.Screen name="Trail" component={TrailScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}
export default App;