import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    linkText: {
        color: 'blue',
        textDecorationLine: 'underline'
      },
      sectionHeader: {
        fontWeight: 'bold',
        marginTop: 10,
        fontSize: 11,
      },
      row_contact: {
        flexDirection: 'row',
        alignItems: 'center', // Ensure items are aligned centrally in the row
      },
      column_contact: {
        width: Platform.OS === 'ios' ? '30%' : '25%', // Adjust width for label column
        fontSize: 11,
      },
      value_contact: {
        width: Platform.OS === 'ios' ? '70%' : '75%', // Adjust width for value column
        fontSize: 11,
      },
})