import React from 'react';
import {
  View, Text, ScrollView, TouchableOpacity,
  StyleSheet, StatusBar, SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import { DuckLogo } from '../components/DuckLogo';
import { TierBadge } from '../components/TierBadge';
import { Colors } from '../theme/colors';
import { MODULES } from '../data/modules';
import { useAuth } from '../context/AuthContext';
import { RootStackParamList, Module } from '../types';

type NavProp = NativeStackNavigationProp<RootStackParamList>;

export function HomeScreen() {
  const navigation = useNavigation<NavProp>();
  const { user, canAccess } = useAuth();

  const featuredLessons = MODULES.flatMap(m => m.lessons).slice(0, 3);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.background} />
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>

        {/* Header */}
        <LinearGradient
          colors={[Colors.secondary, Colors.background]}
          style={styles.header}
        >
          <View style={styles.headerTop}>
            <DuckLogo size={50} showText={false} />
            <View style={styles.headerText}>
              <Text style={styles.greeting}>
                {user ? `¡Hola, ${user.name}!` : '¡Bienvenido!'}
              </Text>
              <Text style={styles.subtitle}>Aprende electricidad paso a paso</Text>
            </View>
            {user && <TierBadge tier={user.tier} />}
          </View>

          {/* Search prompt */}
          <TouchableOpacity
            style={styles.searchBar}
            onPress={() => navigation.navigate('MainTabs', { screen: 'Modules' } as any)}
          >
            <Text style={styles.searchIcon}>🔍</Text>
            <Text style={styles.searchText}>Buscar temas...</Text>
          </TouchableOpacity>
        </LinearGradient>

        {/* Quick Stats */}
        <View style={styles.statsRow}>
          <StatCard icon="📚" label="Módulos" value={MODULES.length.toString()} />
          <StatCard icon="📖" label="Lecciones" value={MODULES.reduce((acc, m) => acc + m.lessons.length, 0).toString()} />
          <StatCard icon="🇲🇽" label="Norma" value="NOM-001" />
        </View>

        {/* Módulos */}
        <Text style={styles.sectionTitle}>Módulos de aprendizaje</Text>
        {MODULES.map((module) => (
          <ModuleCard
            key={module.id}
            module={module}
            locked={!canAccess(module.tier)}
            onPress={() => navigation.navigate('MainTabs', { screen: 'Modules' } as any)}
            onLockPress={() => navigation.navigate('Subscription')}
          />
        ))}

        {/* CTA si no tiene cuenta */}
        {!user && (
          <TouchableOpacity
            style={styles.ctaBanner}
            onPress={() => navigation.navigate('Login')}
          >
            <LinearGradient
              colors={[Colors.primary, Colors.primaryDark]}
              style={styles.ctaGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={styles.ctaTitle}>🦆 ¿Quieres más?</Text>
              <Text style={styles.ctaText}>Crea una cuenta y desbloquea lecciones avanzadas</Text>
              <Text style={styles.ctaButton}>Registrarme gratis →</Text>
            </LinearGradient>
          </TouchableOpacity>
        )}

        <View style={{ height: 30 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

function StatCard({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <View style={styles.statCard}>
      <Text style={styles.statIcon}>{icon}</Text>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

function ModuleCard({ module, locked, onPress, onLockPress }: {
  module: Module;
  locked: boolean;
  onPress: () => void;
  onLockPress: () => void;
}) {
  return (
    <TouchableOpacity
      style={[styles.moduleCard, locked && styles.moduleCardLocked]}
      onPress={locked ? onLockPress : onPress}
      activeOpacity={0.8}
    >
      <View style={[styles.moduleIconBg, { backgroundColor: module.color + '22' }]}>
        <Text style={styles.moduleIcon}>{module.icon}</Text>
      </View>
      <View style={styles.moduleInfo}>
        <View style={styles.moduleHeader}>
          <Text style={styles.moduleTitle}>{module.title}</Text>
          <TierBadge tier={module.tier} />
        </View>
        <Text style={styles.moduleDesc} numberOfLines={2}>{module.description}</Text>
        <Text style={styles.moduleLessons}>{module.lessons.length} lecciones</Text>
      </View>
      {locked && <Text style={styles.lockIcon}>🔒</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.background },
  scroll: { flex: 1 },
  header: {
    padding: 20,
    paddingTop: 30,
    gap: 16,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  headerText: { flex: 1 },
  greeting: { fontSize: 20, fontWeight: 'bold', color: Colors.text },
  subtitle: { fontSize: 13, color: Colors.textSecondary, marginTop: 2 },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    borderRadius: 12,
    padding: 12,
    gap: 8,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  searchIcon: { fontSize: 16 },
  searchText: { color: Colors.textMuted, fontSize: 14 },
  statsRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 12,
    marginTop: 4,
    marginBottom: 8,
  },
  statCard: {
    flex: 1,
    backgroundColor: Colors.surface,
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  statIcon: { fontSize: 20 },
  statValue: { fontSize: 18, fontWeight: 'bold', color: Colors.primary, marginTop: 4 },
  statLabel: { fontSize: 11, color: Colors.textSecondary, marginTop: 2 },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.text,
    paddingHorizontal: 16,
    marginBottom: 12,
    marginTop: 8,
  },
  moduleCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 16,
    padding: 16,
    gap: 14,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  moduleCardLocked: {
    opacity: 0.7,
  },
  moduleIconBg: {
    width: 52,
    height: 52,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  moduleIcon: { fontSize: 26 },
  moduleInfo: { flex: 1 },
  moduleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  moduleTitle: { fontSize: 15, fontWeight: '700', color: Colors.text, flex: 1, marginRight: 8 },
  moduleDesc: { fontSize: 12, color: Colors.textSecondary, lineHeight: 17 },
  moduleLessons: { fontSize: 11, color: Colors.textMuted, marginTop: 6 },
  lockIcon: { fontSize: 20 },
  ctaBanner: {
    marginHorizontal: 16,
    marginTop: 8,
    borderRadius: 16,
    overflow: 'hidden',
  },
  ctaGradient: { padding: 20, gap: 6 },
  ctaTitle: { fontSize: 18, fontWeight: 'bold', color: Colors.white },
  ctaText: { fontSize: 13, color: Colors.white + 'CC' },
  ctaButton: { fontSize: 14, fontWeight: 'bold', color: Colors.white, marginTop: 8 },
});
