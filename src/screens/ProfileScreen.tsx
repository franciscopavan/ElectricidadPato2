import React from 'react';
import {
  View, Text, TouchableOpacity,
  StyleSheet, SafeAreaView, StatusBar, ScrollView, Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { DuckLogo } from '../components/DuckLogo';
import { TierBadge } from '../components/TierBadge';
import { Colors } from '../theme/colors';
import { useAuth } from '../context/AuthContext';

export function ProfileScreen() {
  const navigation = useNavigation();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    Alert.alert('Cerrar sesión', '¿Estás seguro?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Salir',
        style: 'destructive',
        onPress: () => {
          logout();
        },
      },
    ]);
  };

  if (!user) {
    return (
      <SafeAreaView style={styles.safe}>
        <StatusBar barStyle="light-content" backgroundColor={Colors.background} />
        <LinearGradient colors={[Colors.secondary, Colors.background]} style={styles.guestHeader}>
          <DuckLogo size={80} />
          <Text style={styles.guestTitle}>¡Únete a ElectricidadPato2!</Text>
          <Text style={styles.guestSubtitle}>Crea una cuenta para guardar tu progreso y desbloquear más contenido</Text>
        </LinearGradient>
        <View style={styles.guestActions}>
          <TouchableOpacity
            style={styles.primaryBtn}
            onPress={() => (navigation as any).navigate('Register')}
          >
            <Text style={styles.primaryBtnText}>Crear cuenta gratis 🦆</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.secondaryBtn}
            onPress={() => (navigation as any).navigate('Login')}
          >
            <Text style={styles.secondaryBtnText}>Ya tengo cuenta</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.subscribeBtn}
            onPress={() => (navigation as any).navigate('Subscription')}
          >
            <Text style={styles.subscribeBtnText}>⚡ Ver planes y precios</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.background} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <LinearGradient colors={[Colors.secondary, Colors.background]} style={styles.profileHeader}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{user.name.charAt(0).toUpperCase()}</Text>
          </View>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
          <TierBadge tier={user.tier} size="md" />
        </LinearGradient>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Mi suscripción</Text>
          <View style={styles.card}>
            <View style={styles.cardRow}>
              <Text style={styles.cardLabel}>Plan actual</Text>
              <TierBadge tier={user.tier} />
            </View>
            {user.tier !== 'pro' && (
              <TouchableOpacity
                style={styles.upgradeBtn}
                onPress={() => (navigation as any).navigate('Subscription')}
              >
                <Text style={styles.upgradeBtnText}>⚡ Mejorar plan</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Cuenta</Text>
          <View style={styles.card}>
            <TouchableOpacity style={styles.menuRow}>
              <Text style={styles.menuIcon}>✉️</Text>
              <Text style={styles.menuText}>Cambiar correo</Text>
              <Text style={styles.menuArrow}>›</Text>
            </TouchableOpacity>
            <View style={styles.divider} />
            <TouchableOpacity style={styles.menuRow}>
              <Text style={styles.menuIcon}>🔑</Text>
              <Text style={styles.menuText}>Cambiar contraseña</Text>
              <Text style={styles.menuArrow}>›</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
            <Text style={styles.logoutText}>Cerrar sesión</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 30 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.background },
  guestHeader: {
    padding: 40,
    alignItems: 'center',
    gap: 12,
  },
  guestTitle: { fontSize: 22, fontWeight: 'bold', color: Colors.text, textAlign: 'center' },
  guestSubtitle: { fontSize: 14, color: Colors.textSecondary, textAlign: 'center', lineHeight: 20 },
  guestActions: { padding: 24, gap: 12 },
  primaryBtn: { backgroundColor: Colors.primary, borderRadius: 12, padding: 16, alignItems: 'center' },
  primaryBtnText: { color: Colors.white, fontSize: 16, fontWeight: 'bold' },
  secondaryBtn: { backgroundColor: Colors.surface, borderRadius: 12, padding: 16, alignItems: 'center', borderWidth: 1, borderColor: Colors.border },
  secondaryBtnText: { color: Colors.text, fontSize: 16, fontWeight: '600' },
  subscribeBtn: { alignItems: 'center', padding: 8 },
  subscribeBtnText: { color: Colors.primary, fontSize: 15, fontWeight: '600' },
  profileHeader: {
    padding: 30,
    alignItems: 'center',
    gap: 8,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  avatarText: { fontSize: 32, fontWeight: 'bold', color: Colors.white },
  userName: { fontSize: 22, fontWeight: 'bold', color: Colors.text },
  userEmail: { fontSize: 14, color: Colors.textSecondary },
  section: { paddingHorizontal: 16, marginBottom: 16 },
  sectionTitle: { fontSize: 14, fontWeight: '600', color: Colors.textSecondary, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 },
  card: { backgroundColor: Colors.surface, borderRadius: 16, borderWidth: 1, borderColor: Colors.border, overflow: 'hidden' },
  cardRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16 },
  cardLabel: { fontSize: 15, color: Colors.text },
  upgradeBtn: { margin: 16, marginTop: 4, backgroundColor: Colors.primary + '22', borderRadius: 10, padding: 12, alignItems: 'center', borderWidth: 1, borderColor: Colors.primary },
  upgradeBtnText: { color: Colors.primary, fontWeight: '600' },
  menuRow: { flexDirection: 'row', alignItems: 'center', padding: 16, gap: 12 },
  menuIcon: { fontSize: 18 },
  menuText: { flex: 1, fontSize: 15, color: Colors.text },
  menuArrow: { fontSize: 20, color: Colors.textMuted },
  divider: { height: 1, backgroundColor: Colors.border, marginHorizontal: 16 },
  logoutBtn: { backgroundColor: Colors.danger + '18', borderRadius: 12, padding: 16, alignItems: 'center', borderWidth: 1, borderColor: Colors.danger + '40' },
  logoutText: { color: Colors.danger, fontSize: 16, fontWeight: '600' },
});
