import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';

interface DuckLogoProps {
  size?: number;
  showText?: boolean;
  tagline?: boolean;
}

export function DuckLogo({ size = 60, showText = true, tagline = false }: DuckLogoProps) {
  const fontSize = size * 0.65;
  const boltSize = size * 0.38;

  return (
    <View style={styles.container}>
      <View style={[styles.logoCircle, { width: size, height: size, borderRadius: size / 2 }]}>
        <Text style={[styles.duck, { fontSize }]}>🦆</Text>
        <View style={[styles.boltBadge, { width: boltSize, height: boltSize, borderRadius: boltSize / 2 }]}>
          <Text style={[styles.bolt, { fontSize: boltSize * 0.6 }]}>⚡</Text>
        </View>
      </View>
      {showText && (
        <View style={styles.textContainer}>
          <Text style={[styles.appName, { fontSize: size * 0.35 }]}>
            Electricidad<Text style={styles.appNameAccent}>Pato</Text>
            <Text style={styles.appNameNum}>2</Text>
          </Text>
          {tagline && (
            <Text style={styles.tagline}>¡Cuak! Aprende electricidad 🦆⚡</Text>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 10,
  },
  logoCircle: {
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 24,
    elevation: 12,
    borderWidth: 2,
    borderColor: Colors.primaryLight,
  },
  duck: {
    position: 'absolute',
  },
  boltBadge: {
    position: 'absolute',
    bottom: -4,
    right: -4,
    backgroundColor: Colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: Colors.background,
  },
  bolt: {
    lineHeight: undefined,
  },
  textContainer: {
    alignItems: 'center',
    gap: 2,
  },
  appName: {
    fontWeight: 'bold',
    color: Colors.text,
    letterSpacing: 0.3,
  },
  appNameAccent: {
    color: Colors.primary,
  },
  appNameNum: {
    color: Colors.accent,
  },
  tagline: {
    fontSize: 12,
    color: Colors.textSecondary,
    letterSpacing: 0.2,
  },
});
