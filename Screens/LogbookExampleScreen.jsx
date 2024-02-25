import React from 'react';
import { ImageBackground,Dimensions, Image, Text, View, Button } from 'react-native';
import styles from '../style.js';

const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

function HomeScreen() {
  return (
    <View>

      <View style={styles.viewStyle}>
        <Text style={styles.titleStyle}>Trail Log</Text>
      </View>
      <View style={styles.logbookSection}>
        <Text style={styles.logbookText2}><B>Short Trail</B></Text>
        <Text style={styles.logbookText3}>
            {"\n"}25/02/2024
            {"\n"}{"\n"}1 Kilometre
            {"\n"}{"\n"}37 Minutes
            {"\n"}{"\n"}Approximately 160 - 250 calories burned
        </Text>
      </View>

      <View style={styles.logbookSection2}>
        <Text style={styles.logbookText2}><B>Images</B></Text>
      </View>
      </View>
  );
}

export default HomeScreen;
