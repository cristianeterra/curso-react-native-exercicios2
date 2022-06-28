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
export function MyButton({title, style, ...rest}: MyButtonProps) {
  return (
    <TouchableOpacity {...rest} style={[styles.button, style]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    color: '#cccccc',
    fontSize: 16,
  },
  button: {
    marginTop: 40,
    backgroundColor: '#b53212',
    borderRadius: 8,
    padding: 20,
  },
  signInButton: {
    marginTop: 40,
    backgroundColor: '#b53212',
    borderRadius: 8,
    padding: 20,
  },
});