import React from 'react';
import { ImageBackground,Dimensions, Image, Text, View } from 'react-native';
import styles from '../style.js';

const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

function HomeScreen() {
  return (
    <View>
    <View style = {styles.centerImage}>
      <ImageBackground
        style={styles.imageStyle} source={{
          uri: 'https://www.secret-scotland.com/datafiles/uploaded/cmsRefImage/popularPlaces/additional/main/main_77_Duthiebandstand.jpg',
        }}/>
        </View>
      <View style={styles.viewStyle}>
        <Text style={styles.titleStyle}>Home</Text>
      </View>
      <View>
      <Text style={styles.welcomeText}>Welcome to Duthie Park!</Text>
      </View>
      <View>
        <View>
        <Text style={style.defaultText}><B>About:</B> Duthie Park opened in 1883 after it was gifted to the city by Miss Elizabeth Crombie Duthie in 1880 for the ‘wellbeing and recreation of Aberdeen inhabitants.
        </Text>
        </View>

        <View>
          <Text style={style.defaultText}>
            <B>Events:</B> Our upcoming event is _. To see more events, check the event tab.

          </Text>
        </View>

        <View>
        <Text style={style.defaultText}>
        <B>Opening Times: </B> Our parks open and close at these times -
        </Text>
        </View>

        </View>

      </View>
  );
}

export default HomeScreen;
