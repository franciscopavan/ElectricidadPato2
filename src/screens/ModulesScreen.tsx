import React, { useState } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity,
  StyleSheet, SafeAreaView, StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TierBadge } from '../components/TierBadge';
import { Colors } from '../theme/colors';
import { MODULES } from '../data/modules';
import { useAuth } from '../context/AuthContext';
import { RootStackParamList, SubscriptionTier } from '../types';

type NavProp = NativeStackNavigationProp<RootStackParamList>;

const FILTERS: { label: string; value: SubscriptionTier | 'all' }[] = [
  { label: 'Todos', value: 'all' },
  { label: '✓ Gratis', value: 'free' },
  { label: '★ Basic', value: 'basic' },
  { label: '⚡ Pro', value: 'pro' },
];

export function ModulesScreen() {
  const navigation = useNavigation<NavProp>();
  const { canAccess } = useAuth();
  const [filter, setFilter] = useState<SubscriptionTier | 'all'>('all');

  const filtered = filter === 'all' ? MODULES : MODULES.filter(m => m.tier === filter);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.background} />
      <View style={styles.topBar}>
        <Text style={styles.screenTitle}>📚 Módulos</Text>
      </View>

      {/* Filtros */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterScroll} contentContainerStyle={styles.filterRow}>
        {FILTERS.map(f => (
          <TouchableOpacity
            key={f.value}
            style={[styles.filterChip, filter === f.value && styles.filterChipActive]}
            onPress={() => setFilter(f.value)}
          >
            <Text style={[styles.filterText, filter === f.value && styles.filterTextActive]}>
              {f.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        {filtered.map(module => (
          <View key={module.id} style={styles.moduleSection}>
            <View style={styles.moduleSectionHeader}>
              <Text style={styles.moduleSectionIcon}>{module.icon}</Text>
              <View style={styles.moduleSectionInfo}>
                <Text style={styles.moduleSectionTitle}>{module.title}</Text>
                <Text style={styles.moduleSectionDesc}>{module.description}</Text>
              </View>
              <TierBadge tier={module.tier} />
            </View>

            {module.lessons.map(lesson => {
              const locked = !canAccess(lesson.tier);
              return (
                <TouchableOpacity
                  key={lesson.id}
                  style={[styles.lessonRow, locked && styles.lessonRowLocked]}
                  onPress={() => {
                    if (locked) {
                      navigation.navigate('Subscription');
                    } else {
                      navigation.navigate('Lesson', { lessonId: lesson.id, moduleId: module.id });
                    }
                  }}
                  activeOpacity={0.7}
                >
                  <View style={styles.lessonIconBg}>
                    <Text style={styles.lessonIcon}>{locked ? '🔒' : lesson.icon}</Text>
                  </View>
                  <View style={styles.lessonInfo}>
                    <Text style={[styles.lessonTitle, locked && styles.lockedText]}>
                      {lesson.title}
                    </Text>
                    <Text style={styles.lessonMeta}>
                      ⏱ {lesson.duration} • {lesson.tags.slice(0, 2).join(', ')}
                    </Text>
                  </View>
                  <Text style={styles.lessonArrow}>{locked ? '' : '›'}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
        <View style={{ height: 30 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.background },
  topBar: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 12,
  },
  screenTitle: { fontSize: 24, fontWeight: 'bold', color: Colors.text },
  filterScroll: { flexGrow: 0 },
  filterRow: {
    paddingHorizontal: 16,
    paddingBottom: 12,
    gap: 8,
  },
  filterChip: {
    paddingHorizontal: 16,
    paddingVertical: 7,
    borderRadius: 20,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  filterChipActive: {
    backgroundColor: Colors.primary + '22',
    borderColor: Colors.primary,
  },
  filterText: { fontSize: 13, color: Colors.textSecondary, fontWeight: '500' },
  filterTextActive: { color: Colors.primary },
  scroll: { flex: 1 },
  moduleSection: {
    marginHorizontal: 16,
    marginBottom: 20,
    backgroundColor: Colors.surface,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.border,
    overflow: 'hidden',
  },
  moduleSectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  moduleSectionIcon: { fontSize: 28 },
  moduleSectionInfo: { flex: 1 },
  moduleSectionTitle: { fontSize: 15, fontWeight: 'bold', color: Colors.text },
  moduleSectionDesc: { fontSize: 12, color: Colors.textSecondary, marginTop: 2 },
  lessonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    paddingHorizontal: 16,
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  lessonRowLocked: { opacity: 0.6 },
  lessonIconBg: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: Colors.surfaceLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lessonIcon: { fontSize: 18 },
  lessonInfo: { flex: 1 },
  lessonTitle: { fontSize: 14, fontWeight: '600', color: Colors.text },
  lockedText: { color: Colors.textMuted },
  lessonMeta: { fontSize: 11, color: Colors.textMuted, marginTop: 3 },
  lessonArrow: { fontSize: 22, color: Colors.textMuted },
});
