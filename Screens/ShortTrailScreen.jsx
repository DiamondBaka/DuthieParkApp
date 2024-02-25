import React from 'react';
import { ImageBackground,Dimensions, Image, Text, View, Button } from 'react-native';
import styles from '../style.js';

const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

function ShortTrailScreen(navigation) {
  return (
    <View>

      <View style={styles.viewStyle}>
        <Text style={styles.titleStyle}>Short Trail</Text>
      </View>
      <View>

      </View>

      <View>
        <Text>
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
        <Button
        title="Start Trail" 
        color="#adcb95"
        onPress={() =>""}>
        </Button>
        </View>
      </View>
  );
}

export default ShortTrailScreen;
