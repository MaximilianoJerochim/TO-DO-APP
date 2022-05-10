import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from './Components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.TasksContainer}>
         <Text style={styles.Title}>
            Tarea de hoy
         </Text>

         <View style={styles.items}>
            <Task/>
         </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  TasksContainer: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  Title: {
    fontSize: 24,
    fontWeight: 'bold',
  }, 
  items: {

  }
});
