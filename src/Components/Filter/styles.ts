
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    view: {
      width: '100%',
      flexDirection:'row',
      marginTop: 20,
    },

    touchableopacitytrue:{
      height: 38,
      width: 70,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 4,
      borderColor: 'green',
      margin: 12,
      backgroundColor: 'green',
      
    },

    touchableopacityfalse:{
      height: 38,
      width: 70,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 4,
      margin: 12,
      backgroundColor: 'red',
    },

    text:{
      fontSize: 14,
      textTransform: "uppercase",
    },
    
  });