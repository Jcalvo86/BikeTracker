import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function StatsScreen() {
  const navigation = useNavigation();

  // Datos de ejemplo para las estadísticas
  const stats = {
    totalDistance: 45.2,
    totalTime: 180, // minutos
    totalRoutes: 12,
    averageSpeed: 15.1,
    thisWeek: {
      distance: 12.5,
      routes: 3,
    },
    thisMonth: {
      distance: 45.2,
      routes: 12,
    }
  };

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Estadísticas</Text>
      
      <View style={styles.overviewContainer}>
        <Text style={styles.sectionTitle}>Resumen General</Text>
        
        <View style={styles.statsGrid}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{stats.totalDistance} km</Text>
            <Text style={styles.statLabel}>Distancia Total</Text>
          </View>
          
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{formatTime(stats.totalTime)}</Text>
            <Text style={styles.statLabel}>Tiempo Total</Text>
          </View>
          
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{stats.totalRoutes}</Text>
            <Text style={styles.statLabel}>Rutas</Text>
          </View>
          
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{stats.averageSpeed} km/h</Text>
            <Text style={styles.statLabel}>Velocidad Promedio</Text>
          </View>
        </View>
      </View>

      <View style={styles.periodContainer}>
        <Text style={styles.sectionTitle}>Esta Semana</Text>
        <View style={styles.periodStats}>
          <View style={styles.periodItem}>
            <Text style={styles.periodValue}>{stats.thisWeek.distance} km</Text>
            <Text style={styles.periodLabel}>Distancia</Text>
          </View>
          <View style={styles.periodItem}>
            <Text style={styles.periodValue}>{stats.thisWeek.routes}</Text>
            <Text style={styles.periodLabel}>Rutas</Text>
          </View>
        </View>
      </View>

      <View style={styles.periodContainer}>
        <Text style={styles.sectionTitle}>Este Mes</Text>
        <View style={styles.periodStats}>
          <View style={styles.periodItem}>
            <Text style={styles.periodValue}>{stats.thisMonth.distance} km</Text>
            <Text style={styles.periodLabel}>Distancia</Text>
          </View>
          <View style={styles.periodItem}>
            <Text style={styles.periodValue}>{stats.thisMonth.routes}</Text>
            <Text style={styles.periodLabel}>Rutas</Text>
          </View>
        </View>
      </View>

      <View style={styles.achievementsContainer}>
        <Text style={styles.sectionTitle}>Logros</Text>
        <View style={styles.achievementItem}>
          <Text style={styles.achievementText}>🏆 Primera ruta completada</Text>
        </View>
        <View style={styles.achievementItem}>
          <Text style={styles.achievementText}>🚴 10 rutas completadas</Text>
        </View>
        <View style={styles.achievementItem}>
          <Text style={styles.achievementText}>⚡ Velocidad promedio > 15 km/h</Text>
        </View>
      </View>

      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>Volver al Inicio</Text>
      </TouchableOpacity>
    </ScrollView>
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
  overviewContainer: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statCard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    width: '48%',
    marginBottom: 10,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3498db',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#7f8c8d',
    textAlign: 'center',
  },
  periodContainer: {
    marginBottom: 30,
  },
  periodStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  periodItem: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  periodValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#27ae60',
    marginBottom: 5,
  },
  periodLabel: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  achievementsContainer: {
    marginBottom: 30,
  },
  achievementItem: {
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
  achievementText: {
    fontSize: 16,
    color: '#2c3e50',
    fontWeight: '500',
  },
  backButton: {
    backgroundColor: '#95a5a6',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 20,
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});
