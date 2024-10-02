import React, { useState } from 'react';
import {
  View,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const DATA = [
  {
    id: '1',
    title: 'Cá nấu lẩu, nấu mì mini...',
    shop: 'Devang',
    image: require('./images/ca_nau_lau.png'),
  },
  {
    id: '2',
    title: '1KG KHÔ GÀ BƠ TỎI...',
    shop: 'LTD Food',
    image: require('./images/ga_bo_toi.png'),
  },
  {
    id: '3',
    title: 'Xe cần cẩu đa năng',
    shop: 'Thế giới đồ chơi',
    image: require('./images/xa_can_cau.png'),
  },
  {
    id: '4',
    title: 'Đồ chơi dạng mô hình',
    shop: 'Thế giới đồ chơi',
    image: require('./images/do_choi_dang_mo_hinh.png'),
  },
  {
    id: '5',
    title: 'Lảnh đạo giãn đơn',
    shop: 'Minh Long Book',
    image: require('./images/lanh_dao_gian_don.png'),
  },
  {
    id: '6',
    title: 'Hiểu lòng con trẻ',
    shop: 'Minh Long Book',
    image: require('./images/hieu_long_con_tre.png'),
  },
];

const Item = ({ item, onPress, backgroundColor}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.item, { backgroundColor }]}>
    <View style={styles.itemRow}>
      <Image source={item.image} style={styles.image} />
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.row}>
          <Text>Shop </Text>
          <Text>{item.shop}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.chatButton}>
        <Text style={styles.chatFont}>Chat</Text>
      </TouchableOpacity>
    </View>
  </TouchableOpacity>
);

const ChatScreen = () => {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#fff' : '#e6e6e6';

    return (
      <View>
        <View>
          <Item
            item={item}
            onPress={() => setSelectedId(item.id)}
            backgroundColor={backgroundColor}
          />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function ArrowLeft() {
  return (
    <TouchableOpacity>
      <Image
        style={{ width: 24, height: 24, marginLeft: 24 }}
        source={require('./images/ant-design_arrow-left-outlined.png')}
      />
    </TouchableOpacity>
  );
}

function Cart() {
  return (
    <TouchableOpacity>
      <Image
        style={{ width: 24, height: 24, marginRight: 24 }}
        source={require('./images/bi_cart-check.png')}
      />
    </TouchableOpacity>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={ChatScreen}
          options={{
            title: 'Chat',
            headerStyle: {
              backgroundColor: '#1BA9FF',
            },
            headerTintColor: '#fff',
            headerTitleStyle: styles.headerTitle,
            headerTitleAlign: 'center',
            headerLeft: (prop) => <ArrowLeft {...prop} />,
            headerRight: (prop) => <Cart {...prop} />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 2,
    marginHorizontal: 16,
    borderColor: '#C4C4C4',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 16,
    marginBottom: 8,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
  },
  chatButton: {
    backgroundColor: 'red',
    paddingVertical: 12,
    paddingHorizontal: 28,
    marginLeft: 8,
  },
  chatFont: {
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'light',
  },
});

export default App;
