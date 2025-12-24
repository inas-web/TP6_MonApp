import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DetailsScreen({ route }) {
  const { id } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📄 Écran de détails</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Informations reçues :</Text>

        {id && (
          <Text style={styles.idText}>
            ID : <Text style={styles.idValue}>{id}</Text>
          </Text>
        )}

        <Text style={styles.info}>
          Cet écran affiche les détails passés depuis l'écran d'accueil
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white',  
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#111',               
  },
  card: {
    backgroundColor: '#111',   
    padding: 20,
    borderRadius: 10,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 4,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#fff',           
  },
  idText: {
    fontSize: 16,
    marginBottom: 15,
    color: '#ddd',                 
  },
  idValue: {
    fontWeight: 'bold',
    color: '#fff',              
  },
  info: {
    fontSize: 14,
    color: '#bbb',                 
    fontStyle: 'italic',
  },
});
