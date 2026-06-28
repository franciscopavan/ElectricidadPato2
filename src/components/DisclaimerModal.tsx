import React, { useState, useEffect } from 'react';
import {
  View, Text, Modal, TouchableOpacity,
  StyleSheet, ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors } from '../theme/colors';

const DISCLAIMER_KEY = 'disclaimer_accepted_v1';

export function DisclaimerModal() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(DISCLAIMER_KEY).then(val => {
      if (!val) setVisible(true);
    });
  }, []);

  const accept = async () => {
    await AsyncStorage.setItem(DISCLAIMER_KEY, 'true');
    setVisible(false);
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={false}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.duck}>🦆⚡</Text>
          <Text style={styles.title}>Antes de continuar</Text>
          <Text style={styles.subtitle}>ElectricidadPato2</Text>
        </View>

        <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
          <View style={styles.warningBox}>
            <Text style={styles.warningTitle}>⚠️ ADVERTENCIA DE SEGURIDAD</Text>
            <Text style={styles.warningText}>
              El trabajo eléctrico puede causar{' '}
              <Text style={styles.red}>lesiones graves, incendios o la muerte</Text>.
              Nunca realices instalaciones eléctricas sin la capacitación adecuada.
            </Text>
          </View>

          <Text style={styles.bodyTitle}>Al usar esta app, aceptas que:</Text>

          {[
            '🦆 El contenido es SOLO educativo, no asesoría técnica profesional.',
            '⚡ ElectricidadPato2 NO se hace responsable de accidentes, daños personales, materiales o cualquier perjuicio derivado del uso de esta información.',
            '🔌 Siempre debes contratar a un electricista certificado para instalaciones reales.',
            '📋 Es tu responsabilidad cumplir con la NOM-001-SEDE y las normas de tu localidad.',
            '🔒 El pato enseña, pero tú decides. Úsalo bajo tu propio riesgo.',
          ].map((item, i) => (
            <View key={i} style={styles.item}>
              <Text style={styles.itemText}>{item}</Text>
            </View>
          ))}

          <Text style={styles.legal}>
            Para más información consulta nuestro Aviso Legal completo desde la sección de Perfil.
          </Text>
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.acceptBtn} onPress={accept}>
            <Text style={styles.acceptText}>Entendido, acepto continuar 🦆</Text>
          </TouchableOpacity>
          <Text style={styles.footerNote}>
            Al continuar aceptas el aviso legal y descargo de responsabilidad.
          </Text>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  header: {
    backgroundColor: Colors.surface,
    padding: 30,
    alignItems: 'center',
    gap: 6,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  duck: { fontSize: 52 },
  title: { fontSize: 22, fontWeight: 'bold', color: Colors.text },
  subtitle: { fontSize: 14, color: Colors.primary, fontWeight: '600' },
  scroll: { flex: 1, padding: 20 },
  warningBox: {
    backgroundColor: Colors.danger + '18',
    borderRadius: 14,
    padding: 16,
    borderWidth: 1.5,
    borderColor: Colors.danger,
    marginBottom: 20,
    gap: 8,
  },
  warningTitle: { fontSize: 14, fontWeight: 'bold', color: Colors.danger },
  warningText: { fontSize: 13, color: Colors.text, lineHeight: 20 },
  red: { color: Colors.danger, fontWeight: 'bold' },
  bodyTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 12,
  },
  item: {
    backgroundColor: Colors.surface,
    borderRadius: 12,
    padding: 14,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  itemText: { fontSize: 13, color: Colors.textSecondary, lineHeight: 20 },
  legal: {
    fontSize: 12,
    color: Colors.textMuted,
    textAlign: 'center',
    marginTop: 12,
    marginBottom: 8,
    fontStyle: 'italic',
  },
  footer: {
    padding: 20,
    gap: 8,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  acceptBtn: {
    backgroundColor: Colors.primary,
    borderRadius: 14,
    padding: 16,
    alignItems: 'center',
  },
  acceptText: { color: Colors.black, fontSize: 15, fontWeight: 'bold' },
  footerNote: { fontSize: 11, color: Colors.textMuted, textAlign: 'center' },
});
