import React from 'react';
import {
  View, Text, ScrollView, TouchableOpacity,
  StyleSheet, SafeAreaView, StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../theme/colors';
import { DuckLogo } from '../components/DuckLogo';

export function DisclaimerScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.background} />
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backText}>‹ Atrás</Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <DuckLogo size={60} showText={false} />
        <Text style={styles.title}>⚖️ Aviso Legal y{'\n'}Descargo de Responsabilidad</Text>
        <Text style={styles.update}>Última actualización: Junio 2026</Text>

        <Section title="1. Naturaleza del contenido">
          ElectricidadPato2 es una plataforma educativa con fines informativos únicamente.
          Todo el contenido publicado en esta aplicación — incluyendo lecciones, quizzes, diagramas
          y recomendaciones — tiene carácter <Bold>estrictamente didáctico</Bold> y no constituye asesoría
          técnica, profesional ni de ningún otro tipo.
        </Section>

        <Section title="2. Descargo de responsabilidad por accidentes">
          <Bold>ElectricidadPato2 y su propietario no asumen ninguna responsabilidad</Bold>, directa
          ni indirecta, por daños personales, lesiones, muerte, daños materiales, incendios,
          choques eléctricos, cortocircuitos, pérdidas económicas o cualquier otro perjuicio que
          pudiera resultar de:
          {'\n\n'}• Seguir total o parcialmente las instrucciones publicadas en esta aplicación.
          {'\n'}• Realizar instalaciones, reparaciones o modificaciones eléctricas basándose en el
          contenido aquí presentado.
          {'\n'}• Uso inadecuado de herramientas o materiales mencionados en la app.
          {'\n'}• Omitir medidas de seguridad descritas o no descritas en el contenido.
          {'\n'}• Trabajar con instalaciones eléctricas sin la capacitación o licencia adecuada.
        </Section>

        <View style={styles.warningBox}>
          <Text style={styles.warningTitle}>⚠️ ADVERTENCIA IMPORTANTE</Text>
          <Text style={styles.warningText}>
            El trabajo eléctrico puede causar <Text style={{ color: Colors.danger, fontWeight: 'bold' }}>
            lesiones graves o la muerte</Text>. Siempre contrata a un electricista certificado para
            realizar instalaciones reales. Esta aplicación no reemplaza la formación profesional
            ni la supervisión de un técnico cualificado.
          </Text>
        </View>

        <Section title="3. Obligación del usuario">
          El usuario acepta que es su <Bold>exclusiva responsabilidad</Bold> verificar que cualquier
          trabajo eléctrico que realice cumpla con las normas aplicables en su localidad
          (incluyendo la NOM-001-SEDE en México), obtener los permisos correspondientes y,
          cuando sea necesario, contratar a un profesional con licencia.
        </Section>

        <Section title="4. Precisión de la información">
          Aunque hacemos nuestro mejor esfuerzo para publicar contenido preciso y actualizado,
          <Bold> no garantizamos la exactitud, completitud ni vigencia</Bold> de la información.
          Los estándares eléctricos, normas y reglamentos cambian con el tiempo. Consulta siempre
          las versiones oficiales más recientes de las normas aplicables.
        </Section>

        <Section title="5. Limitación de garantías">
          Esta aplicación se proporciona <Bold>"tal cual"</Bold> y <Bold>"según disponibilidad"</Bold>,
          sin garantías de ningún tipo, expresas o implícitas. No garantizamos que la aplicación
          esté libre de errores, sea ininterrumpida o que los resultados obtenidos sean precisos o confiables.
        </Section>

        <Section title="6. Menores de edad">
          El contenido de esta aplicación está dirigido a personas mayores de 18 años. Los menores
          de edad no deben realizar trabajos eléctricos bajo ninguna circunstancia. Si eres menor
          de edad, usa esta app únicamente con fines educativos y bajo supervisión de un adulto.
        </Section>

        <Section title="7. Propiedad intelectual">
          Todo el contenido, diseño, texto, imágenes y elementos de ElectricidadPato2 son propiedad
          de sus respectivos autores. Queda prohibida su reproducción total o parcial sin
          autorización expresa por escrito.
        </Section>

        <Section title="8. Contacto">
          Si tienes dudas sobre este aviso legal, escríbenos a:{'\n'}
          <Bold>pavanafrancisco@gmail.com</Bold>
        </Section>

        <View style={styles.duckFooter}>
          <Text style={styles.duckFooterText}>
            🦆 ElectricidadPato2 — Aprende, pero con cuidado.{'\n'}
            El pato sabe, pero tú decides.
          </Text>
        </View>

        <TouchableOpacity style={styles.closeBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.closeBtnText}>Entendido ✓</Text>
        </TouchableOpacity>

        <View style={{ height: 30 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.sectionText}>{children}</Text>
    </View>
  );
}

function Bold({ children }: { children: React.ReactNode }) {
  return <Text style={styles.bold}>{children}</Text>;
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.background },
  navBar: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  backBtn: { padding: 4 },
  backText: { color: Colors.primary, fontSize: 16, fontWeight: '600' },
  content: { padding: 24, alignItems: 'center', gap: 4 },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.text,
    textAlign: 'center',
    lineHeight: 30,
    marginTop: 12,
  },
  update: { fontSize: 12, color: Colors.textMuted, marginBottom: 8 },
  section: {
    alignSelf: 'stretch',
    backgroundColor: Colors.surface,
    borderRadius: 14,
    padding: 16,
    marginTop: 12,
    borderWidth: 1,
    borderColor: Colors.border,
    gap: 6,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 2,
  },
  sectionText: {
    fontSize: 13,
    color: Colors.textSecondary,
    lineHeight: 21,
  },
  bold: {
    fontWeight: 'bold',
    color: Colors.text,
  },
  warningBox: {
    alignSelf: 'stretch',
    backgroundColor: Colors.danger + '18',
    borderRadius: 14,
    padding: 16,
    marginTop: 12,
    borderWidth: 1.5,
    borderColor: Colors.danger,
    gap: 8,
  },
  warningTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.danger,
  },
  warningText: {
    fontSize: 13,
    color: Colors.text,
    lineHeight: 21,
  },
  duckFooter: {
    alignSelf: 'stretch',
    marginTop: 20,
    padding: 16,
    backgroundColor: Colors.primary + '15',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: Colors.primary + '40',
    alignItems: 'center',
  },
  duckFooterText: {
    fontSize: 13,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
    fontStyle: 'italic',
  },
  closeBtn: {
    marginTop: 20,
    backgroundColor: Colors.primary,
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 48,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  closeBtnText: {
    color: Colors.black,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
