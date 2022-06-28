import React from 'react';
import { Button, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function ProfileScreen({ navigation }) {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen !!!!!!!</Text>
        <Button
          title="Back to Settings"
          onPress={() => navigation.navigate('Settings')}
        />
      </SafeAreaView>
    );
  }
  