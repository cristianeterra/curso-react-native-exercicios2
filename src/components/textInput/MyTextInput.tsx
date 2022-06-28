import React from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';

export function MyTextInput(props: TextInputProps) {
  return (
    <TextInput placeholderTextColor="#727272" style={styles.input} {...props} />
  );
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 8,
    borderColor: '#FB542B',
    paddingHorizontal: 8,
    color: '#FB542B',
    borderWidth: 1,
    width: '100%',
    height: 50,
    marginBottom: 16,
  },
});