import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';

interface DuckLogoProps {
  size?: number;
  showText?: boolean;
}

export function DuckLogo({ size = 60, showText = true }: DuckLogoProps) {
  const fontSize = size * 0.7;
  const boltSize = size * 0.35;

  return (
    <View style={styles.container}>
      <View style={[styles.logoCircle, { width: size, height: size, borderRadius: size / 2 }]}>
        <Text style={[styles.duck, { fontSize }]}>🦆</Text>
        <Text style={[styles.bolt, { fontSize: boltSize }]}>⚡</Text>
      </View>
      {showText && (
        <Text style={styles.appName}>
          Electricidad<Text style={styles.appNameAccent}>Pato2</Text>
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 8,
  },
  logoCircle: {
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 20,
    elevation: 10,
  },
  duck: {
    position: 'absolute',
  },
  bolt: {
    position: 'absolute',
    bottom: -4,
    right: -4,
  },
  appName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.text,
    letterSpacing: 0.5,
  },
  appNameAccent: {
    color: Colors.primary,
  },
});
