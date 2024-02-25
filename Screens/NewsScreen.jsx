import React from 'react';
import { TouchableOpacity, ImageBackground,Dimensions, Image, Text, View } from 'react-native';
import styles from '../style.js';

const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

function HomeScreen({navigation}) {
  return (
    <View>

      <View style={styles.viewStyle}>
        <Text style={styles.titleStyle}>News & Events</Text>
      </View>
      <View>

        <TouchableOpacity style={styles.eventSection}
        onPress={() => navigation.navigate('EventExampleScreen')}>
        <Image
        style={styles.eventImage} source={{
          uri: 'https://i2-prod.aberdeenlive.news/incoming/article8678934.ece/ALTERNATES/s1200b/0_DSC_6437.jpg',
        }}/>

        <Text style={styles.eventText}>
        <B>
        Duthie Park Light Show!</B>

        
        </Text>
        </TouchableOpacity>

      </View>
      
      <View>

        <View style={styles.eventSection}>
        <Image
        style={styles.eventImage} source={{
          uri: 'https://images.parkrun.com/blogs.dir/1056/files/2018/08/20840820_827454537416416_4322164581192630910_n.jpg',
        }}/>

        <Text style={styles.eventText}>
        <B>
        Park Run!
        </B>
        </Text>
        </View>

      </View>


      </View>
  );
}

export default HomeScreen;
