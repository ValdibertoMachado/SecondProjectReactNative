import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    view: {
      width: '100%',
      backgroundColor: 'gray',
      height: 56,
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
      borderRadius: 6,
    },

    touchableopacity:{
      flex: 1,
      height: 56,
      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 6,

    },

    text:{
      flex: 1,
      fontSize: 16,
      color: 'black',
    },
    
    materialicons:{
      marginLeft: 16,
      marginRight: 4,

    },
  });