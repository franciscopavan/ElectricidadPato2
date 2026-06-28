import React from 'react';
import {
  View, Text, ScrollView, TouchableOpacity,
  StyleSheet, SafeAreaView, StatusBar, Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { DuckLogo } from '../components/DuckLogo';
import { Colors } from '../theme/colors';
import { useAuth } from '../context/AuthContext';

const PLANS = [
  {
    id: 'free',
    name: 'Gratis',
    price: '$0',
    period: 'para siempre',
    color: Colors.free,
    icon: '✓',
    features: [
      'Fundamentos de electricidad',
      'Seguridad básica en el hogar',
      'Tipos de cables y herramientas',
      'Sin necesidad de cuenta',
    ],
    locked: [],
  },
  {
    id: 'basic',
    name: 'Basic',
    price: '$5',
    period: 'por mes',
    color: Colors.basic,
    icon: '★',
    popular: true,
    features: [
      'Todo lo de Gratis',
      'Cómo conectar contactos y apagadores',
      'Circuitos residenciales',
      'Iluminación LED y ahorro',
      'Soporte por email',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$20',
    period: 'por mes',
    color: Colors.pro,
    icon: '⚡',
    features: [
      'Todo lo de Basic',
      'Norma NOM-001-SEDE completa',
      'Diagramas eléctricos profesionales',
      'Instalaciones trifásicas',
      'Sistemas de puesta a tierra',
      'Certificación al finalizar',
    ],
  },
];

export function SubscriptionScreen() {
  const navigation = useNavigation();
  const { user } = useAuth();

  const handleSubscribe = (planId: string) => {
    if (!user) {
      Alert.alert(
        'Cuenta requerida',
        'Necesitas crear una cuenta para suscribirte.',
        [
          { text: 'Cancelar', style: 'cancel' },
          { text: 'Crear cuenta', onPress: () => (navigation as any).navigate('Register') },
        ]
      );
      return;
    }
    // TODO: integrar Stripe
    Alert.alert('Próximamente', 'El pago con Stripe se integrará pronto. 🦆⚡');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.background} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <LinearGradient colors={[Colors.secondary, Colors.background]} style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
            <Text style={styles.backText}>‹ Atrás</Text>
          </TouchableOpacity>
          <DuckLogo size={60} />
          <Text style={styles.headerTitle}>Elige tu plan</Text>
          <Text style={styles.headerSubtitle}>
            De cero a electricista profesional.{'\n'}Aprende a tu ritmo.
          </Text>
        </LinearGradient>

        {/* Plans */}
        <View style={styles.plansContainer}>
          {PLANS.map(plan => (
            <View
              key={plan.id}
              style={[styles.planCard, plan.popular && styles.planCardPopular, { borderColor: plan.popular ? plan.color : Colors.border }]}
            >
              {plan.popular && (
                <View style={[styles.popularBadge, { backgroundColor: plan.color }]}>
                  <Text style={styles.popularText}>MÁS POPULAR</Text>
                </View>
              )}

              <View style={styles.planHeader}>
                <View style={[styles.planIcon, { backgroundColor: plan.color + '22' }]}>
                  <Text style={[styles.planIconText, { color: plan.color }]}>{plan.icon}</Text>
                </View>
                <View>
                  <Text style={styles.planName}>{plan.name}</Text>
                  <View style={styles.planPriceRow}>
                    <Text style={[styles.planPrice, { color: plan.color }]}>{plan.price}</Text>
                    <Text style={styles.planPeriod}> USD/{plan.period}</Text>
                  </View>
                </View>
              </View>

              <View style={styles.planFeatures}>
                {plan.features.map((feature, i) => (
                  <View key={i} style={styles.featureRow}>
                    <Text style={[styles.featureCheck, { color: plan.color }]}>✓</Text>
                    <Text style={styles.featureText}>{feature}</Text>
                  </View>
                ))}
              </View>

              {plan.id !== 'free' && (
                <TouchableOpacity
                  style={[styles.subscribeBtn, { backgroundColor: plan.color }]}
                  onPress={() => handleSubscribe(plan.id)}
                >
                  <Text style={styles.subscribeBtnText}>
                    {user?.tier === plan.id ? '✓ Plan actual' : `Suscribirme a ${plan.name}`}
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          ))}
        </View>

        <Text style={styles.disclaimer}>
          * Precios en USD. Cancela cuando quieras. Pagos procesados de forma segura con Stripe.
        </Text>
        <View style={{ height: 30 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.background },
  header: {
    padding: 24,
    paddingTop: 16,
    alignItems: 'center',
    gap: 12,
  },
  backBtn: { alignSelf: 'flex-start', padding: 4, marginBottom: 8 },
  backText: { color: Colors.primary, fontSize: 16, fontWeight: '600' },
  headerTitle: { fontSize: 26, fontWeight: 'bold', color: Colors.text },
  headerSubtitle: { fontSize: 14, color: Colors.textSecondary, textAlign: 'center', lineHeight: 20 },
  plansContainer: { padding: 16, gap: 16 },
  planCard: {
    backgroundColor: Colors.surface,
    borderRadius: 20,
    borderWidth: 1.5,
    overflow: 'hidden',
  },
  planCardPopular: {
    shadowColor: Colors.basic,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  popularBadge: {
    paddingVertical: 6,
    alignItems: 'center',
  },
  popularText: { fontSize: 11, fontWeight: 'bold', color: Colors.white, letterSpacing: 1 },
  planHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    gap: 14,
  },
  planIcon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  planIconText: { fontSize: 22, fontWeight: 'bold' },
  planName: { fontSize: 18, fontWeight: 'bold', color: Colors.text },
  planPriceRow: { flexDirection: 'row', alignItems: 'baseline', marginTop: 2 },
  planPrice: { fontSize: 22, fontWeight: 'bold' },
  planPeriod: { fontSize: 12, color: Colors.textMuted },
  planFeatures: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    gap: 8,
  },
  featureRow: { flexDirection: 'row', gap: 10, alignItems: 'flex-start' },
  featureCheck: { fontSize: 14, fontWeight: 'bold', marginTop: 1 },
  featureText: { fontSize: 14, color: Colors.textSecondary, flex: 1, lineHeight: 20 },
  subscribeBtn: {
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  subscribeBtnText: { color: Colors.white, fontSize: 15, fontWeight: 'bold' },
  disclaimer: {
    fontSize: 11,
    color: Colors.textMuted,
    textAlign: 'center',
    paddingHorizontal: 24,
    lineHeight: 16,
  },
});
