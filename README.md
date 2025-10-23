# 🚴 BikeTracker

Una aplicación móvil desarrollada con React Native y Expo para registrar y hacer seguimiento de recorridos en bicicleta.

## 📱 Características

- **Seguimiento en Tiempo Real**: Registra tus rutas en bicicleta con GPS
- **Historial de Rutas**: Visualiza todos tus recorridos anteriores
- **Estadísticas Detalladas**: Analiza tu rendimiento y progreso
- **Interfaz Intuitiva**: Diseño limpio y fácil de usar
- **Multiplataforma**: Funciona en iOS, Android y Web

## 🚀 Tecnologías Utilizadas

- **React Native** - Framework para desarrollo móvil
- **Expo** - Plataforma de desarrollo y despliegue
- **Expo Router** - Sistema de navegación basado en archivos
- **TypeScript** - Tipado estático para JavaScript
- **Expo Location** - API de geolocalización
- **React Navigation** - Navegación entre pantallas

## 📦 Instalación

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm o yarn
- Expo CLI
- Dispositivo móvil con Expo Go o emulador

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/Jcalvo86/BikeTracker.git
   cd BikeTracker
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo**
   ```bash
   npx expo start
   ```

4. **Ejecutar en dispositivo**
   - **Android**: `npx expo start --android`
   - **iOS**: `npx expo start --ios`
   - **Web**: `npx expo start --web`

## 🏗️ Estructura del Proyecto

```
BikeTracker/
├── src/
│   └── app/                 # Rutas de Expo Router
│       ├── index.tsx        # Pantalla principal
│       ├── tracking.tsx     # Seguimiento en tiempo real
│       ├── history.tsx      # Historial de rutas
│       └── stats.tsx        # Estadísticas
├── app/                     # Estructura alternativa
├── components/              # Componentes reutilizables
├── assets/                  # Imágenes y recursos
├── constants/               # Constantes de la aplicación
├── hooks/                   # Hooks personalizados
└── package.json
```

## 📱 Pantallas

### 🏠 Pantalla Principal
- Bienvenida a BikeTracker
- Botones de navegación a todas las secciones
- Diseño limpio y atractivo

### 🚴 Seguimiento en Tiempo Real
- Iniciar/detener seguimiento de rutas
- Estadísticas en vivo (distancia, tiempo)
- Integración con GPS para ubicación
- Placeholder para mapa (próximamente)

### 📋 Historial de Rutas
- Lista de todas las rutas registradas
- Información detallada de cada recorrido
- Datos de ejemplo para demostración
- Botón para iniciar nueva ruta

### 📊 Estadísticas
- Resumen general de actividad
- Estadísticas por período (semana/mes)
- Sistema de logros y badges
- Métricas de rendimiento

## 🔧 Funcionalidades Implementadas

- ✅ Navegación entre pantallas
- ✅ Interfaz de usuario completa
- ✅ Integración con Expo Location
- ✅ Manejo de permisos de ubicación
- ✅ Estructura de datos para rutas
- ✅ Diseño responsivo

## 🚧 Funcionalidades Pendientes

- 🔄 Seguimiento real de ubicación GPS
- 🗺️ Integración de mapas
- 💾 Persistencia de datos
- 📈 Cálculo automático de distancias
- 🏆 Sistema de logros dinámico
- 📤 Exportación de datos
- 🔔 Notificaciones

## 🛠️ Scripts Disponibles

```bash
# Iniciar servidor de desarrollo
npm start

# Ejecutar en Android
npm run android

# Ejecutar en iOS
npm run ios

# Ejecutar en Web
npm run web

# Linter
npm run lint

# Resetear proyecto
npm run reset-project
```

## 📱 Compatibilidad

- **iOS**: 13.0+
- **Android**: API 21+ (Android 5.0)
- **Web**: Navegadores modernos

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Javier Calvo**
- GitHub: [@Jcalvo86](https://github.com/Jcalvo86)

## 📞 Soporte

Si tienes preguntas o necesitas ayuda, puedes:
- Abrir un issue en GitHub
- Contactar al desarrollador

---

¡Disfruta registrando tus aventuras en bicicleta! 🚴‍♂️✨