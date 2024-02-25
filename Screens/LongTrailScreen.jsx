import React from 'react';
import { ImageBackground,Dimensions, Image, Text, View, Button } from 'react-native';
import styles from '../style.js';

const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

function HomeScreen() {
  return (
    <View>

      <View style={styles.viewStyle}>
        <Text style={styles.titleStyle}>Long Trail</Text>
      </View>
      <View>

      </View>

      <View>
        <Text style={styles.defaultText}>
              <B>Description:</B> A longer trail that takes shows you the best of the park's monuments and natural offerings
              {"\n\n"}
              <B>Length:</B> 1.9km
              {"\n\n"}
              <B>Time (Approx.):</B> 1 Hour
              {"\n\n"}
              <B>Monuments: </B> 20
        </Text>
        </View>
        <View style={styles.trailButton}>
        <Button
        title="Start Trail" 
        color="#adcb95">
        </Button>
        </View>
      </View>
  );
}

export default HomeScreen;
