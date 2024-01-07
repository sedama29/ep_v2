import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: '100%',
    // height: '100%',
    // backgroundColor:'white',
    borderRadius: 5,
  },
  pickerContainer: {
    width: '70%',
    borderRadius: 5,
    backgroundColor: 'lightgray',
    padding: 5,
    elevation: 3,
    overflow: 'hidden',
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center', 
  },
  
  dropdownContainer: {
    marginTop: 40, 
    marginLeft: 10, 
    marginRight: 10, 
    padding: 5,
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 3,
    overflow: 'hidden',
    borderColor: 'black', // Set the border color to black
    borderWidth: 1, // Add a border width

  },
  picker: {
    width: '100%',
    color: 'blue',
    backgroundColor: 'transparent',
    fontSize: 14, // Font size of the selected value
    paddingHorizontal: 10, // Add horizontal padding to the selected value
  },
  pickerItem: {
    paddingVertical: 8, 
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderColor: 'lightgray', 
  },
  pickerText: {
    fontSize: 14, // Font size for dropdown item text
  },


  container_data: {
    width: '100%',
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
  },
  container_location: {
    borderWidth:1,
    padding: 5,
    // height: 300,
    resizeMode: 'contain',
    borderRadius: 5,
    overflow: 'hidden',
  },
  container_image: {
    alignItems: 'center',
    width: '100%', 
    height: 'auto', 
    borderRadius: 5,
    overflow: 'hidden',
  },
  
  imageStyle: {
    borderWidth: 1,
    width: '100%',
    aspectRatio: 1.5, 
    resizeMode: 'contain',
  },

  container_contact: {
    alignItems: 'left',
    width: '100%',
    borderWidth: 1,
    padding: 5,
    // height: 500,
    borderRadius: 5,
  },

  textSpacing: {
    marginBottom: 10,
  },
  rowText: {
    fontWeight: 'bold'
  },
  dataRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    borderBottomWidth: 1,
    borderColor: '#ddd'
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'space-between',
    // backgroundColor: '#f2f2f2',
    padding: 5,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 11,
  },
  column: {
    width: '25%',
    textAlign: 'center',
    fontSize: 11,
  },

  headerText: {
    fontWeight: 'bold',
    padding: 5,
  },
  rowText: {
    padding: 5,
  },

  modalView: {
    flex: 1,
    marginTop: 20,
    padding:10,
    borderRadius: 5,

  },
  closeButton: {
    alignItems: "center",
    alignSelf: 'center', 
    backgroundColor: "blue",
    padding: 10,
    width: '20%',
    borderRadius: 5,
  },
  alertButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  alertText: {
    color: 'red',
    fontSize: 16,
  },
  boldText: {
    fontWeight: 'bold',
  },
  pickerAndDotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dotsButton: {
    fontSize:12,
    padding: 5,
  },
  modalView_2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle_2: {
    // Style for the image
    width: '90%',
    height: '50%',
    resizeMode: 'contain',
  },
  closeButton_image: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
  },
  dotTouchable: {
    position: 'absolute',
    width: 30,
    height: 30,
    left: 179 - 15,
    top: 380 - 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});