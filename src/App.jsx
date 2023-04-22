import { Profile } from './components/profile/Profile';
import { Statistics } from './components/statistics/Statistics';
import { Section } from './components/statistics/Section';
import { FriendList } from './components/friends/FriendList';
import { TransactionHistory } from './components/transactions/TransactionHistory';
import user from './components/profile/user.json';
import data from './components/statistics/data.json';
import friends from './components/friends/friends.json';
import transactions from './components/transactions/transactions';

export const App = () => {
  const statsData = data.map(item => ({
    id: item.id,
    label: item.label,
    percentage: item.percentage,
  }));
  const friendsData = friends.map(item => ({
    id: item.id,
    avatar: item.avatar,
    name: item.name,
    isOnline: item.isOnline,
  }));
  const transactionsData = transactions.map(item => ({
    id: item.id,
    type: item.type,
    amount: item.amount,
    currency: item.currency,
  }));
  return (
    <div
      style={{
        height: '100vh',
        textAlign: 'center',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {/* React homework template */}
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Section>
        <Statistics stats={statsData} />
      </Section>

      <FriendList friends={friendsData} />

      <TransactionHistory transactions={transactionsData} />
    </div>
  );
};
