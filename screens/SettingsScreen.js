import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true); // activé par défaut en mode sombre

  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚙️ Paramètres</Text>
      
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Activer les notifications</Text>
        <Switch
          value={notifications}
          onValueChange={setNotifications}
          trackColor={{ false: '#555', true: '#444' }}
          thumbColor={notifications ? '#fff' : '#888'}
        />
      </View>
      
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Mode sombre</Text>
        <Switch
          value={darkMode}
          onValueChange={setDarkMode}
          trackColor={{ false: '#555', true: '#444' }}
          thumbColor={darkMode ? '#fff' : '#888'}
        />
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>À propos</Text>
        <Text style={styles.version}>Version 1.0.0</Text>
        <Text style={styles.info}>
          Application React Native avec navigation
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',     
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#222',               
    textAlign: 'center',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#222',     
  },
  settingText: {
    fontSize: 16,
    color: '#222',                  
  },
  section: {
    marginTop: 40,
    padding: 15,
    backgroundColor: '#111',      
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#fff',                 
  },
  version: {
    fontSize: 14,
    color: '#ccc',                
    marginBottom: 5,
  },
  info: {
    fontSize: 14,
    color: '#aaa',                  
  },
});
