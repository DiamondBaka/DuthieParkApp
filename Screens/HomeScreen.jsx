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
      <View style={styles.welcomeSection}>
        <View>
        <Text style={styles.defaultText}>{"\n\n"}<B>About:</B> Duthie Park opened in 1883 after it was gifted to the city by Miss Elizabeth Crombie Duthie in 1880 for the ‘wellbeing and recreation of Aberdeen inhabitants.
        Duthie Park is loved by locals and visitors due to its wonderfully restored Victorian features such as the band stand, fountains, and boating ponds. The park also has an astro turf area for ball games and two other play areas; one for younger children and another 
        for the more adventurous child which has been voted best play space in Scotland. The Park Café is also very popular with visitors.
        </Text>
        </View>

        <View>
          <Text style={styles.defaultText}>
          {"\n"}<B>Events:</B> Our upcoming event is the Duthie Park Light Show. To see more events, check the events tab.

          </Text>
        </View>

        <View>
        <Text style={styles.defaultText}>
        {"\n"}<B>Opening Times: </B> Our park is open 24 hours, and the winter gardens operate on these times -
        {"\n"}10.30am – 5pm March to October
        {"\n"}10.30am – 4pm November to February
        </Text>
        </View>

        </View>

      </View>
  );
}

export default HomeScreen;
