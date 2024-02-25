import React from 'react';
import {Image, Text, View, ScrollView } from 'react-native';
import styles from '../style.js';

function QuestionScreen() {
  return (
    <View>
      <View style={styles.viewStyle}>
        <Text style={styles.titleStyle}>FAQ</Text>
      </View>
      <View>
        <View style={styles.question}>
        <Text style={styles.defaultText}>Is there an entrance fee?</Text>
        </View>
        <View style={styles.answer}>
        <Text style={styles.defaultText}>No, both the park and winter gardens are free to enter. Duthie park relies on donations from the public.</Text>
        </View>
      </View>

      <View>
        <View style={styles.question}>
        <Text style={styles.defaultText}>Are there bathroom facilities?</Text>
        </View>
        <View style={styles.answer}>
        <Text style={styles.defaultText}>There is a chargeable Automated Public Convenience in the park which is available at all times.</Text>
        </View>
      </View>

      <View>
        <View style={styles.question}>
        <Text style={styles.defaultText}>What transport is there to the park?</Text>
        </View>
        <View style={styles.answer}>
        <Text style={styles.defaultText}>There is (limited) parking at the park, and bike stands. Buses 17, 18, X6, X7, X8, 204 have stops at the park.</Text>
        </View>
      </View>

      <View>
        <View style={styles.question}>
        <Text style={styles.defaultText}>Are dogs allowed in the park?</Text>
        </View>
        <View style={styles.answer}>
        <Text style={styles.defaultText}>Dogs are allowed at Duthie park, but owners must respect the leashed zones of the premises.</Text>
        </View>
      </View>
    </View>
  );
}

export default QuestionScreen;