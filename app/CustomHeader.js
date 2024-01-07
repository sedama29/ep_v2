import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomHeader = ({ totalCount, showModal }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Home</Text>
      <TouchableOpacity onPress={showModal} style={styles.alertButton}>
        <Text style={styles.alertText}>({totalCount}) Alert</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 50,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  alertButton: {
    padding: 10,
  },
  alertText: {
    color: 'red',
    fontSize: 16,
  },
});

export default CustomHeader;
