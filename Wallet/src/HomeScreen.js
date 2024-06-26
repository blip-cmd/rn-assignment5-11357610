import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { transactions } from './TransactionData';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.profile}>
          <View style={styles.pic}>
            <Image source={require('../assets/profile.png')} style={styles.profileImage} />
          </View>
          <View>
            <View style={styles.header}>
              <Text style={styles.welcomeText}>Welcome back,</Text>
              <Text style={styles.userName}>Ryan Brown</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.search}>
            <Ionicons name="search" size={20} color="#000000" />
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <Image source={require('../assets/Card.png')} style={styles.cardImage} />
        </View>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.actionIconContainer}>
              <Ionicons name="arrow-up-outline" size={24} color="#000000" />
            </View>
            <Text style={styles.actionText}>Send</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.actionIconContainer}>
              <Ionicons name="arrow-down-outline" size={24} color="#000000" />
            </View>
            <Text style={styles.actionText}>Receive</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.actionIconContainer}>
              <Ionicons name="cash-outline" size={24} color="#000000" />
            </View>
            <Text style={styles.actionText}>Loan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.actionIconContainer}>
              <Ionicons name="cloud-upload-outline" size={24} color="#000000" />
            </View>
            <Text style={styles.actionText}>Topup</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.transactions}>
          <View style={styles.transactionHeader}>
            <Text style={styles.transactionTitle}>Transaction</Text>
            <Text style={styles.transactionSeeAll}>See All</Text>
          </View>
          {transactions.map(transaction => (
            <View key={transaction.id} style={styles.transactionItem}>
              <View style={styles.transactionActivity}>
                <View style={styles.transactionIconContainer}>
                  <Image style={styles.transactionIcon} source={transaction.icon} resizeMode='contain'/>
                </View>
                <View style={styles.transactionDetails}>
                  <Text style={styles.transactionText}>{transaction.name}</Text>
                  <Text style={styles.transactionCategory}>{transaction.category}</Text>
                </View>
              </View>
              <Text style={[
                styles.transactionAmount, 
                transaction.type === 'negative' ? styles.negativeAmount : styles.positiveAmount
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

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
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
    color: '#555',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
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
    color: '#000000',
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
    backgroundColor: '#F4F4F4',
    height: 60,
    width: 60,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionText: {
    marginTop: 5,
    fontSize: 12,
    color: '#000000',
  },
  transactionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  transactionSeeAll: {
    color: 'blue',
  },
  transactionActivity: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  transactionIconContainer: {
    backgroundColor: '#F4F4F4',
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
    color: '#000000',
  },
  transactionCategory: {
    fontSize: 14,
    color: '#888888',
  },
  transactionAmount: {
    fontSize: 16,
  },
  negativeAmount: {
    color: 'black',
  },
  positiveAmount: {
    color: 'blue',
  },
  search: {
    marginLeft: 'auto',
    height: 40,
    width: 40,
    backgroundColor: '#F4F4F4',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
