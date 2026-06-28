import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SubscriptionTier } from '../types';
import { Colors } from '../theme/colors';

const TIER_CONFIG: Record<SubscriptionTier, { label: string; color: string; icon: string }> = {
  free: { label: 'Gratis', color: Colors.free, icon: '✓' },
  basic: { label: 'Basic', color: Colors.basic, icon: '★' },
  pro: { label: 'Pro', color: Colors.pro, icon: '⚡' },
};

interface TierBadgeProps {
  tier: SubscriptionTier;
  size?: 'sm' | 'md';
}

export function TierBadge({ tier, size = 'sm' }: TierBadgeProps) {
  const config = TIER_CONFIG[tier];
  const isSmall = size === 'sm';

  return (
    <View style={[styles.badge, { backgroundColor: config.color + '22', borderColor: config.color }, isSmall && styles.badgeSm]}>
      <Text style={[styles.icon, { color: config.color }, isSmall && styles.iconSm]}>{config.icon}</Text>
      <Text style={[styles.label, { color: config.color }, isSmall && styles.labelSm]}>{config.label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    borderWidth: 1,
    gap: 4,
  },
  badgeSm: {
    paddingHorizontal: 7,
    paddingVertical: 2,
  },
  icon: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  iconSm: {
    fontSize: 10,
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
  },
  labelSm: {
    fontSize: 10,
  },
});
