import { StyleSheet, Text, View } from "react-native";

const StatsBar = ({ name, value }: { name: string; value: number }) => {
  const maxStatValue = 255; // Maximum possible stat value in Pokémon games
  const barWidth = (value / maxStatValue) * 100; // Calculate the width percentage based on the value

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.barBackground}>
        <View style={[styles.barFill, { width: `${barWidth}%` }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  name: {
    width: 60,
    fontSize: 16,
    fontWeight: 'bold',
  },
  barBackground: {
    flex: 1,
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    marginHorizontal: 8,
  },
  barFill: {
    height: '100%',
    backgroundColor: '#4caf50',
    borderRadius: 5,
  },
  value: {
    width: 40,
    fontSize: 16,
    textAlign: 'right',
  },
});

export default StatsBar;