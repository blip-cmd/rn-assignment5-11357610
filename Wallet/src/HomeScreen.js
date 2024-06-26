import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { transactions } from './TransactionData';
import { useTheme } from './ThemeContext';

const HomeScreen = () => {
  const { isDarkTheme, colors } = useTheme();

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}>
      <ScrollView style={styles.container}>
        <View style={styles.profile}>
          <View style={styles.pic}>
            <Image source={require('../assets/profile.png')} style={styles.profileImage} />
          </View>
          <View>
            <View style={styles.header}>
              <Text style={[styles.welcomeText, { color: colors.text }]}>Welcome back,</Text>
              <Text style={[styles.userName, { color: colors.text }]}>Ryan Brown</Text>
            </View>
          </View>
          <TouchableOpacity style={[styles.search, { backgroundColor: colors.iconBackground }]}>
            <Ionicons name="search" size={20} color={colors.text} />
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <Image source={require('../assets/Card.png')} style={styles.cardImage} />
        </View>
        <View style={styles.actions}>
          {actions.map((action, index) => (
            <TouchableOpacity key={index} style={styles.actionButton}>
              <View style={[styles.actionIconContainer, { backgroundColor: colors.iconBackground }]}>
                <Ionicons name={action.icon} size={24} color={colors.text} />
              </View>
              <Text style={[styles.actionText, { color: colors.text }]}>{action.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.transactions}>
          <View style={styles.transactionHeader}>
            <Text style={[styles.transactionTitle, { color: colors.text }]}>Transaction</Text>
            <Text style={styles.transactionSeeAll}>See All</Text>
          </View>
          {transactions.map(transaction => (
            <View key={transaction.id} style={styles.transactionItem}>
              <View style={styles.transactionActivity}>
                <View style={[styles.transactionIconContainer, { backgroundColor: colors.iconBackground }]}>
                  <Image
                    style={styles.transactionIcon}
                    source={transaction.icon}
                    resizeMode='contain'
                  />
                </View>
                <View style={styles.transactionDetails}>
                  <Text style={[styles.transactionText, { color: colors.text }]}>{transaction.name}</Text>
                  <Text style={[styles.transactionCategory, { color: colors.subtext }]}>{transaction.category}</Text>
                </View>
              </View>
              <Text style={[
                styles.transactionAmount, 
                { color: transaction.type === 'negative' ? colors.negativeTransaction : colors.positiveTransaction }
              ]}>
                {transaction.amount}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const actions = [
  { label: 'Send', icon: 'arrow-up-outline' },
  { label: 'Receive', icon: 'arrow-down-outline' },
  { label: 'Loan', icon: 'cash-outline' },
  { label: 'Topup', icon: 'cloud-upload-outline' },
];

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 18,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  actionButton: {
    alignItems: 'center',
  },
  transactions: {
    marginBottom: 15,
    marginTop: 10,
  },
  transactionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 18,
  },
  profile: {
    flexDirection: 'row',
    marginTop: 50,
  },
  pic: {
    marginRight: 20,
    height: 50,
    width: 50,
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  card: {
    marginBottom: 30,
    marginTop: 25,
  },
  cardImage: {
    width: 'auto',
    height: 200,
    borderRadius: 15,
  },
  actionIconContainer: {
    height: 60,
    width: 60,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionText: {
    marginTop: 5,
    fontSize: 12,
  },
  transactionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  transactionSeeAll: {
    color: '#257CFF',
  },
  transactionActivity: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  transactionIconContainer: {
    height: 45,
    width: 45,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  transactionIcon: {
    height: 24,
    width: 24,
  },
  transactionDetails: {
    marginLeft: 20,
  },
  transactionText: {
    fontSize: 16,
  },
  transactionCategory: {
    fontSize: 14,
  },
  transactionAmount: {
    fontSize: 16,
  },
  search: {
    marginLeft: 'auto',
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
