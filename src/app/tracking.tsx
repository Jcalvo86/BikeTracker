import * as Location from 'expo-location';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function TrackingScreen() {
  const router = useRouter();
  const [isTracking, setIsTracking] = useState(false);
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [distance, setDistance] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permisos', 'Se necesita acceso a la ubicación para el seguimiento');
    }
  };

  const startTracking = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Error', 'Permisos de ubicación denegados');
        return;
      }

      setIsTracking(true);
      // Aquí implementaremos el seguimiento real más adelante
    } catch (error) {
      Alert.alert('Error', 'No se pudo iniciar el seguimiento');
    }
  };

  const stopTracking = () => {
    setIsTracking(false);
    // Aquí guardaremos la ruta más adelante
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seguimiento en Tiempo Real</Text>
      
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>{distance.toFixed(2)} km</Text>
          <Text style={styles.statLabel}>Distancia</Text>
        </View>
        
        <View style={styles.statBox}>
          <Text style={styles.statValue}>{Math.floor(time / 60)}:{(time % 60).toString().padStart(2, '0')}</Text>
          <Text style={styles.statLabel}>Tiempo</Text>
        </View>
      </View>

      <View style={styles.mapPlaceholder}>
        <Text style={styles.mapText}>Mapa aparecerá aquí</Text>
        <Text style={styles.mapSubtext}>Tu ubicación se mostrará en tiempo real</Text>
      </View>

      <TouchableOpacity 
        style={[styles.trackingButton, isTracking ? styles.stopButton : styles.startButton]}
        onPress={isTracking ? stopTracking : startTracking}
      >
        <Text style={styles.trackingButtonText}>
          {isTracking ? 'Detener Seguimiento' : 'Iniciar Seguimiento'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Text style={styles.backButtonText}>Volver al Inicio</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 30,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  statBox: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3498db',
  },
  statLabel: {
    fontSize: 14,
    color: '#7f8c8d',
    marginTop: 5,
  },
  mapPlaceholder: {
    backgroundColor: '#ecf0f1',
    height: 200,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    borderWidth: 2,
    borderColor: '#bdc3c7',
    borderStyle: 'dashed',
  },
  mapText: {
    fontSize: 18,
    color: '#7f8c8d',
    fontWeight: '600',
  },
  mapSubtext: {
    fontSize: 14,
    color: '#95a5a6',
    marginTop: 5,
  },
  trackingButton: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  startButton: {
    backgroundColor: '#27ae60',
  },
  stopButton: {
    backgroundColor: '#e74c3c',
  },
  trackingButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  backButton: {
    backgroundColor: '#95a5a6',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});
