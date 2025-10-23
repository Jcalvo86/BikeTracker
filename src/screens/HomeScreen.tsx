import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BikeTracker</Text>
      <Text style={styles.subtitle}>Registra tus recorridos en bicicleta</Text>
      
      <TouchableOpacity 
        style={styles.startButton}
        onPress={() => navigation.navigate('Tracking' as never)}
      >
        <Text style={styles.buttonText}>Iniciar Seguimiento</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.historyButton}
        onPress={() => navigation.navigate('History' as never)}
      >
        <Text style={styles.historyButtonText}>Ver Historial</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.statsButton}
        onPress={() => navigation.navigate('Stats' as never)}
      >
        <Text style={styles.statsButtonText}>Estadísticas</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#7f8c8d',
    marginBottom: 40,
    textAlign: 'center',
  },
  startButton: {
    backgroundColor: '#3498db',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 25,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  historyButton: {
    backgroundColor: '#95a5a6',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 20,
    marginBottom: 15,
  },
  historyButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  statsButton: {
    backgroundColor: '#e74c3c',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 20,
  },
  statsButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
