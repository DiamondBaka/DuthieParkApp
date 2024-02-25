import React from 'react';
import { ImageBackground,Dimensions, Image, Text, View } from 'react-native';
import styles from '../style.js';

const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

function HomeScreen() {
  return (
    <View>
      <View style={styles.viewStyle}>
        <Text style={styles.titleStyle}>Trails</Text>
      </View>
      <View>
        <View style={styles.trailSection}>
          <Text style={styles.trailText}>
            <B>Short Trais</B>
          </Text>
        </View>
        <View style={styles.trailSection}>
          <Text style={styles.trailText}>
            <B>Long Trail</B>
          </Text>
        </View>
        <View style={styles.trailSection}>
          <Text style={styles.trailText}>
            <B>Logbook</B>
          </Text>
        </View>
      </View>
    </View>
  );
}

export default HomeScreen;
