import React from 'react';
import { ImageBackground,Dimensions, Image, Text, View, Button, TouchableOpacity} from 'react-native';
import styles from '../style.js';

const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

function ShortTrailScreen({navigation}) {
  return (
    <View>

      <View style={styles.viewStyle}>
        <Text style={styles.titleStyle}>Short Trail</Text>
      </View>
      <View>
        <Image style={styles.routeStyle} source={require("../imgs/ShortTrail.png")} />
      </View>

      <View style={styles.logbookSection}>
        <Text style={styles.defaultText}>
              <B>Description:</B> A short trail that takes you on a tour of the park's ponds, monuments and woodland.
              {"\n\n"}
              <B>Length:</B> 1km
              {"\n\n"}
              <B>Time (Approx.):</B> 0.5 Hours
              {"\n\n"}
              <B>Monuments: </B> 11
        </Text>
        </View>
        <View style={styles.trailButton}>
        <TouchableOpacity
        style={styles.startButton}
        color="#adcb95"
        onPress={() => navigation.navigate('ShortTrailStartScreen')}>
        <Text style={styles.trailText}>
          <B>Start Trail</B>
        </Text>
      </TouchableOpacity>
        </View>
      </View>
  );
}

export default ShortTrailScreen;
