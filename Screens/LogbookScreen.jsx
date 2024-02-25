import React from 'react';
import { ImageBackground,Dimensions, Image, Text, View } from 'react-native';
import styles from '../style.js';

const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

function HomeScreen() {
  return (
    <View>

      <View style={styles.viewStyle}>
        <Text style={styles.titleStyle}>Logbook</Text>
      </View>
      <View>

        <View style={styles.logbookEntry}>

        <Text style={styles.logbookText}>
        <B>
        Short Trail - 25/02/2024
        </B>
        </Text>
        </View>

        <View style={styles.logbookEntry}>

        <Text style={styles.logbookText}>
        <B>
        Long Trail - 20/02/2024
        </B>
        </Text>
        </View>

        <View style={styles.logbookEntry}>

        <Text style={styles.logbookText}>
        <B>
        Long Trail - 10/02/2024
        </B>
        </Text>
        </View>

                <View style={styles.logbookEntry}>

        <Text style={styles.logbookText}>
        <B>
        Long Trail - 5/02/2024
        </B>
        </Text>
        </View>
                <View style={styles.logbookEntry}>

        <Text style={styles.logbookText}>
        <B>
        Short Trail - 01/02/2024
        </B>
        </Text>
        </View>
                <View style={styles.logbookEntry}>

        <Text style={styles.logbookText}>
        <B>
        Long Trail - 25/01/2024
        </B>
        </Text>
        </View>

      </View>

      </View>
  );
}

export default HomeScreen;
