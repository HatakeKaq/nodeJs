import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style= {styles.taskwrapper}>
      <Text style={styles.sectionTitle}>Tytul Taska</Text>
      <View style={styles.items}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    taskWrapper:{
      paddingTop:80,
      paddingHorizontal:20,
    },
    sectionTitle:{
      fontSize:24,
      flexWeight:'bold',
    },
    items:{
      marginTop:30,
    },
    alignItems: 'center',
    justifyContent: 'center',
  },
});
