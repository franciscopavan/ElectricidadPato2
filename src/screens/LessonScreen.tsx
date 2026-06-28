import React from 'react';
import {
  View, Text, ScrollView, TouchableOpacity,
  StyleSheet, SafeAreaView, StatusBar,
} from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { TierBadge } from '../components/TierBadge';
import { Colors } from '../theme/colors';
import { MODULES } from '../data/modules';
import { RootStackParamList } from '../types';

type LessonRoute = RouteProp<RootStackParamList, 'Lesson'>;

export function LessonScreen() {
  const navigation = useNavigation();
  const route = useRoute<LessonRoute>();
  const { lessonId, moduleId } = route.params;

  const module = MODULES.find(m => m.id === moduleId);
  const lesson = module?.lessons.find(l => l.id === lessonId);

  if (!lesson || !module) {
    return (
      <View style={styles.error}>
        <Text style={styles.errorText}>Lección no encontrada</Text>
      </View>
    );
  }

  // Simple markdown-ish renderer
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, i) => {
      if (line.startsWith('# ')) {
        return <Text key={i} style={styles.h1}>{line.slice(2)}</Text>;
      }
      if (line.startsWith('## ')) {
        return <Text key={i} style={styles.h2}>{line.slice(3)}</Text>;
      }
      if (line.startsWith('### ')) {
        return <Text key={i} style={styles.h3}>{line.slice(4)}</Text>;
      }
      if (line.startsWith('> ')) {
        return (
          <View key={i} style={styles.callout}>
            <Text style={styles.calloutText}>{line.slice(2)}</Text>
          </View>
        );
      }
      if (line.startsWith('- ')) {
        return (
          <View key={i} style={styles.bulletRow}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>{line.slice(2)}</Text>
          </View>
        );
      }
      if (line.startsWith('**') && line.endsWith('**')) {
        return <Text key={i} style={styles.bold}>{line.slice(2, -2)}</Text>;
      }
      if (line.trim() === '' || line.startsWith('|') || line.startsWith('---')) {
        return <View key={i} style={{ height: line.trim() === '' ? 8 : 0 }} />;
      }
      return <Text key={i} style={styles.body}>{line}</Text>;
    });
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.background} />

      {/* Nav bar */}
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backText}>‹ Atrás</Text>
        </TouchableOpacity>
        <TierBadge tier={lesson.tier} />
      </View>

      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        {/* Lesson header */}
        <View style={styles.header}>
          <Text style={styles.headerIcon}>{lesson.icon}</Text>
          <Text style={styles.headerTitle}>{lesson.title}</Text>
          <Text style={styles.headerMeta}>⏱ {lesson.duration} • {module.title}</Text>
          <View style={styles.tagsRow}>
            {lesson.tags.map(tag => (
              <View key={tag} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Content */}
        <View style={styles.content}>
          {renderContent(lesson.content)}
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.background },
  error: { flex: 1, backgroundColor: Colors.background, alignItems: 'center', justifyContent: 'center' },
  errorText: { color: Colors.textSecondary, fontSize: 16 },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  backBtn: { padding: 4 },
  backText: { color: Colors.primary, fontSize: 16, fontWeight: '600' },
  scroll: { flex: 1 },
  header: {
    padding: 24,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    alignItems: 'center',
  },
  headerIcon: { fontSize: 48, marginBottom: 12 },
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: Colors.text, textAlign: 'center', marginBottom: 8 },
  headerMeta: { fontSize: 13, color: Colors.textMuted, marginBottom: 12 },
  tagsRow: { flexDirection: 'row', gap: 6, flexWrap: 'wrap', justifyContent: 'center' },
  tag: {
    backgroundColor: Colors.surfaceLight,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  tagText: { fontSize: 11, color: Colors.textSecondary },
  content: { padding: 20, gap: 4 },
  h1: { fontSize: 22, fontWeight: 'bold', color: Colors.text, marginTop: 16, marginBottom: 8 },
  h2: { fontSize: 18, fontWeight: 'bold', color: Colors.primary, marginTop: 20, marginBottom: 6 },
  h3: { fontSize: 15, fontWeight: '700', color: Colors.text, marginTop: 14, marginBottom: 4 },
  body: { fontSize: 14, color: Colors.textSecondary, lineHeight: 22 },
  bold: { fontSize: 14, fontWeight: 'bold', color: Colors.text, lineHeight: 22 },
  callout: {
    backgroundColor: Colors.primary + '18',
    borderLeftWidth: 3,
    borderLeftColor: Colors.primary,
    borderRadius: 6,
    padding: 12,
    marginVertical: 8,
  },
  calloutText: { fontSize: 13, color: Colors.text, lineHeight: 20 },
  bulletRow: { flexDirection: 'row', gap: 8, marginVertical: 2 },
  bullet: { color: Colors.primary, fontSize: 16, lineHeight: 22 },
  bulletText: { flex: 1, fontSize: 14, color: Colors.textSecondary, lineHeight: 22 },
});
