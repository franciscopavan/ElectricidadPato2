import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
  SafeAreaView, StatusBar, ScrollView, Animated,
} from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { Colors } from '../theme/colors';
import { MODULES } from '../data/modules';
import { QUIZZES } from '../data/quizzes';
import { useProgress } from '../context/ProgressContext';
import { RootStackParamList, QuizQuestion } from '../types';

type QuizRoute = RouteProp<RootStackParamList, 'Quiz'>;

const PASS_SCORE = 70;

export function QuizScreen() {
  const navigation = useNavigation();
  const route = useRoute<QuizRoute>();
  const { lessonId, moduleId } = route.params;
  const { saveQuizResult } = useProgress();

  const module = MODULES.find(m => m.id === moduleId);
  const lesson = module?.lessons.find(l => l.id === lessonId);
  const questions: QuizQuestion[] = QUIZZES[lessonId] ?? [];

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState<number[]>([]);

  if (!lesson || questions.length === 0) {
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.center}>
          <Text style={styles.errorText}>No hay preguntas para esta lección.</Text>
          <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
            <Text style={styles.btnText}>Volver</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const q = questions[current];
  const score = Math.round((correctCount / questions.length) * 100);
  const passed = score >= PASS_SCORE;

  const handleSelect = (idx: number) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    if (idx === q.correctIndex) {
      setCorrectCount(c => c + 1);
    } else {
      setWrongAnswers(prev => [...prev, current]);
    }
  };

  const handleNext = () => {
    if (current + 1 >= questions.length) {
      const finalScore = Math.round(((correctCount + (selected === q.correctIndex ? 1 : 0)) / questions.length) * 100);
      saveQuizResult(lessonId, finalScore);
      setFinished(true);
    } else {
      setCurrent(c => c + 1);
      setSelected(null);
      setAnswered(false);
    }
  };

  if (finished) {
    return (
      <SafeAreaView style={styles.safe}>
        <StatusBar barStyle="light-content" backgroundColor={Colors.background} />
        <ScrollView contentContainerStyle={styles.resultsContainer}>
          <Text style={styles.resultEmoji}>{passed ? '🎉' : '📚'}</Text>
          <Text style={styles.resultTitle}>{passed ? '¡Excelente!' : 'Sigue practicando'}</Text>
          <Text style={styles.resultSubtitle}>
            {passed
              ? 'Pasaste el quiz. ¡Conocimiento adquirido!'
              : `Necesitas ${PASS_SCORE}% para pasar. Revisa la lección e intenta de nuevo.`}
          </Text>

          <View style={[styles.scoreCircle, { borderColor: passed ? Colors.success : Colors.danger }]}>
            <Text style={[styles.scoreNumber, { color: passed ? Colors.success : Colors.danger }]}>{score}%</Text>
            <Text style={styles.scoreLabel}>Calificación</Text>
          </View>

          <View style={styles.scoreDetails}>
            <View style={styles.scoreDetailRow}>
              <Text style={styles.scoreDetailIcon}>✅</Text>
              <Text style={styles.scoreDetailText}>{correctCount} correctas de {questions.length}</Text>
            </View>
            <View style={styles.scoreDetailRow}>
              <Text style={styles.scoreDetailIcon}>❌</Text>
              <Text style={styles.scoreDetailText}>{questions.length - correctCount} incorrectas</Text>
            </View>
          </View>

          {wrongAnswers.length > 0 && (
            <View style={styles.reviewSection}>
              <Text style={styles.reviewTitle}>Repasa estas respuestas:</Text>
              {wrongAnswers.map(idx => {
                const wq = questions[idx];
                return (
                  <View key={idx} style={styles.reviewCard}>
                    <Text style={styles.reviewQuestion}>{wq.question}</Text>
                    <Text style={styles.reviewCorrect}>✅ {wq.options[wq.correctIndex]}</Text>
                    <Text style={styles.reviewExplanation}>{wq.explanation}</Text>
                  </View>
                );
              })}
            </View>
          )}

          <View style={styles.resultActions}>
            {!passed && (
              <TouchableOpacity
                style={[styles.btn, { backgroundColor: Colors.primary }]}
                onPress={() => {
                  setCurrent(0);
                  setSelected(null);
                  setAnswered(false);
                  setCorrectCount(0);
                  setFinished(false);
                  setWrongAnswers([]);
                }}
              >
                <Text style={styles.btnText}>🔄 Intentar de nuevo</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity
              style={[styles.btn, { backgroundColor: Colors.surfaceLight }]}
              onPress={() => (navigation as any).navigate('MainTabs')}
            >
              <Text style={[styles.btnText, { color: Colors.text }]}>
                {passed ? '🏠 Ir al inicio' : 'Volver a módulos'}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.background} />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backText}>✕</Text>
        </TouchableOpacity>
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBarFill, { width: `${((current) / questions.length) * 100}%` }]} />
        </View>
        <Text style={styles.counter}>{current + 1}/{questions.length}</Text>
      </View>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
        {/* Question */}
        <Text style={styles.lessonLabel}>{lesson.icon} {lesson.title}</Text>
        <Text style={styles.question}>{q.question}</Text>

        {/* Options */}
        <View style={styles.options}>
          {q.options.map((option, idx) => {
            let optionStyle = styles.option;
            let textStyle = styles.optionText;

            if (answered) {
              if (idx === q.correctIndex) {
                optionStyle = { ...styles.option, ...styles.optionCorrect };
                textStyle = { ...styles.optionText, color: Colors.white };
              } else if (idx === selected && idx !== q.correctIndex) {
                optionStyle = { ...styles.option, ...styles.optionWrong };
                textStyle = { ...styles.optionText, color: Colors.white };
              }
            } else if (idx === selected) {
              optionStyle = { ...styles.option, ...styles.optionSelected };
            }

            return (
              <TouchableOpacity
                key={idx}
                style={optionStyle}
                onPress={() => handleSelect(idx)}
                activeOpacity={answered ? 1 : 0.7}
              >
                <View style={styles.optionLetter}>
                  <Text style={styles.optionLetterText}>
                    {['A', 'B', 'C', 'D'][idx]}
                  </Text>
                </View>
                <Text style={textStyle}>{option}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Explanation after answering */}
        {answered && (
          <View style={[styles.explanation, selected === q.correctIndex ? styles.explanationCorrect : styles.explanationWrong]}>
            <Text style={styles.explanationIcon}>
              {selected === q.correctIndex ? '✅ ¡Correcto!' : '❌ Incorrecto'}
            </Text>
            <Text style={styles.explanationText}>{q.explanation}</Text>
          </View>
        )}
      </ScrollView>

      {/* Next button */}
      {answered && (
        <View style={styles.footer}>
          <TouchableOpacity style={styles.nextBtn} onPress={handleNext}>
            <Text style={styles.nextBtnText}>
              {current + 1 >= questions.length ? 'Ver resultados →' : 'Siguiente →'}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.background },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 16, padding: 24 },
  errorText: { color: Colors.textSecondary, fontSize: 16, textAlign: 'center' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  backBtn: { padding: 4 },
  backText: { color: Colors.textSecondary, fontSize: 18, fontWeight: 'bold' },
  progressBarContainer: {
    flex: 1,
    height: 6,
    backgroundColor: Colors.surfaceLight,
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: Colors.primary,
    borderRadius: 3,
  },
  counter: { fontSize: 13, color: Colors.textSecondary, fontWeight: '600', minWidth: 35, textAlign: 'right' },
  scroll: { flex: 1 },
  scrollContent: { padding: 20, gap: 16, paddingBottom: 40 },
  lessonLabel: { fontSize: 13, color: Colors.textMuted },
  question: { fontSize: 19, fontWeight: 'bold', color: Colors.text, lineHeight: 27 },
  options: { gap: 10, marginTop: 8 },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    borderRadius: 14,
    padding: 14,
    gap: 12,
    borderWidth: 1.5,
    borderColor: Colors.border,
  },
  optionSelected: {
    borderColor: Colors.primary,
    backgroundColor: Colors.primary + '18',
  },
  optionCorrect: {
    borderColor: Colors.success,
    backgroundColor: Colors.success,
  },
  optionWrong: {
    borderColor: Colors.danger,
    backgroundColor: Colors.danger,
  },
  optionLetter: {
    width: 30,
    height: 30,
    borderRadius: 8,
    backgroundColor: Colors.surfaceLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionLetterText: { fontSize: 13, fontWeight: 'bold', color: Colors.textSecondary },
  optionText: { flex: 1, fontSize: 14, color: Colors.text, lineHeight: 20 },
  explanation: {
    borderRadius: 14,
    padding: 16,
    gap: 8,
    borderWidth: 1,
    marginTop: 4,
  },
  explanationCorrect: {
    backgroundColor: Colors.success + '18',
    borderColor: Colors.success + '40',
  },
  explanationWrong: {
    backgroundColor: Colors.danger + '18',
    borderColor: Colors.danger + '40',
  },
  explanationIcon: { fontSize: 15, fontWeight: 'bold', color: Colors.text },
  explanationText: { fontSize: 13, color: Colors.textSecondary, lineHeight: 20 },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  nextBtn: {
    backgroundColor: Colors.primary,
    borderRadius: 14,
    padding: 16,
    alignItems: 'center',
  },
  nextBtnText: { color: Colors.white, fontSize: 16, fontWeight: 'bold' },
  // Results
  resultsContainer: { padding: 24, alignItems: 'center', gap: 16 },
  resultEmoji: { fontSize: 64 },
  resultTitle: { fontSize: 28, fontWeight: 'bold', color: Colors.text },
  resultSubtitle: { fontSize: 14, color: Colors.textSecondary, textAlign: 'center', lineHeight: 20 },
  scoreCircle: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
  },
  scoreNumber: { fontSize: 36, fontWeight: 'bold' },
  scoreLabel: { fontSize: 12, color: Colors.textMuted },
  scoreDetails: { gap: 8, alignSelf: 'stretch' },
  scoreDetailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: Colors.surface,
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  scoreDetailIcon: { fontSize: 18 },
  scoreDetailText: { fontSize: 14, color: Colors.text },
  reviewSection: { alignSelf: 'stretch', gap: 12 },
  reviewTitle: { fontSize: 16, fontWeight: 'bold', color: Colors.text },
  reviewCard: {
    backgroundColor: Colors.surface,
    borderRadius: 14,
    padding: 14,
    gap: 8,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  reviewQuestion: { fontSize: 14, fontWeight: '600', color: Colors.text },
  reviewCorrect: { fontSize: 13, color: Colors.success, fontWeight: '600' },
  reviewExplanation: { fontSize: 12, color: Colors.textSecondary, lineHeight: 18 },
  resultActions: { alignSelf: 'stretch', gap: 10 },
  btn: {
    backgroundColor: Colors.primary,
    borderRadius: 14,
    padding: 16,
    alignItems: 'center',
  },
  btnText: { color: Colors.white, fontSize: 15, fontWeight: 'bold' },
});
