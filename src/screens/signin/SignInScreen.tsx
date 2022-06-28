import { Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


import { styles }   from './SigninStyle';
import logo from '../../assets/logo-shx.png';

import { MyButton } from '../../components/button/MyButton';
import { MyTextInput } from '../../components/textInput/MyTextInput';


export default function SignInScreen({ navigation }) {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image resizeMode="contain" source={logo} style={styles.logo} />
        <MyTextInput placeholder="email" />
        <MyTextInput placeholder="password" secureTextEntry/>
        <MyButton title="Entrar no App" />
      </SafeAreaView>
    );
  }