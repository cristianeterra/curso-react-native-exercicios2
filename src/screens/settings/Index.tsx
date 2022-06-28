import React from 'react';
import { Button, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function SettingsScreen({ navigation }) {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Settings Screen</Text>
        <Button
          title="Go to Profile"
          onPress={() => navigation.navigate('Profile')}
        />
      </SafeAreaView>
    );
  }
  