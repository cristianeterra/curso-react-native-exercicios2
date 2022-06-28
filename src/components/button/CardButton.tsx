import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';

interface MyButtonProps extends TouchableOpacityProps {
  title: string;
}
export function CardButton({title, style, ...rest}: MyButtonProps) {
  return (
    <TouchableOpacity {...rest} style={[styles.button, style]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    color: '#CCCCCC',
    fontSize: 16,
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#b53212',
    borderRadius: 8,
    margin: 20,
    height: 20,
    width: 60
  }
});