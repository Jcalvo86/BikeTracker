import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Datos de ejemplo para el historial
const mockRoutes = [
  { id: '1', date: '2024-01-15', distance: '5.2 km', duration: '25 min', route: 'Casa - Trabajo' },
  { id: '2', date: '2024-01-14', distance: '3.8 km', duration: '18 min', route: 'Trabajo - Casa' },
  { id: '3', date: '2024-01-13', distance: '7.1 km', duration: '32 min', route: 'Paseo por el parque' },
];

export default function HistoryScreen() {
  const navigation = useNavigation();

  const renderRouteItem = ({ item }: { item: any }) => (
    <View style={styles.routeItem}>
      <View style={styles.routeHeader}>
        <Text style={styles.routeName}>{item.route}</Text>
        <Text style={styles.routeDate}>{item.date}</Text>
      </View>
      <View style={styles.routeStats}>
        <Text style={styles.routeDistance}>{item.distance}</Text>
        <Text style={styles.routeDuration}>{item.duration}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historial de Rutas</Text>
      
      {mockRoutes.length > 0 ? (
        <FlatList
          data={mockRoutes}
          renderItem={renderRouteItem}
          keyExtractor={(item) => item.id}
          style={styles.routesList}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>No hay rutas registradas</Text>
          <Text style={styles.emptySubtext}>Comienza un seguimiento para ver tus rutas aquí</Text>
        </View>
      )}

      <TouchableOpacity 
        style={styles.startNewButton}
        onPress={() => navigation.navigate('Tracking' as never)}
      >
        <Text style={styles.startNewButtonText}>Nueva Ruta</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.goBack()}
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
  routesList: {
    flex: 1,
  },
  routeItem: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  routeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  routeName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    flex: 1,
  },
  routeDate: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  routeStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  routeDistance: {
    fontSize: 14,
    color: '#3498db',
    fontWeight: '600',
  },
  routeDuration: {
    fontSize: 14,
    color: '#27ae60',
    fontWeight: '600',
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#7f8c8d',
    fontWeight: '600',
    marginBottom: 10,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#95a5a6',
    textAlign: 'center',
  },
  startNewButton: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  startNewButtonText: {
    color: 'white',
    fontSize: 16,
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
