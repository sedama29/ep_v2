import React, { useEffect, useState } from 'react';
import { Text, View, Button, Image,TouchableOpacity } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import google from '../assets/images/btn_google_signin_dark_normal_web.png'
import BWImage from '../assets/images/BW_Logo.png'
import { styles } from './style/style_index';
import { Link } from 'expo-router';


WebBrowser.maybeCompleteAuthSession();

export default function App() {
    const [userInfo, setUserInfo] = useState(null);
    const navigation = useNavigation();


    const [request, response, promptAsync] = Google.useAuthRequest({
      redirectUri: 'https://auth.expo.io/@sedama/demo_firebase', 
      expoClientId: '967080811201-hi7kf09nmddbuqc6b8nc3n56lr8dqvv7.apps.googleusercontent.com',
      webClientId: '967080811201-hi7kf09nmddbuqc6b8nc3n56lr8dqvv7.apps.googleusercontent.com',
      iosClientId: '967080811201-bulinrrf63qa5lblrr1ruc0vii1hi8ke.apps.googleusercontent.com',
      androidClientId: '967080811201-bulinrrf63qa5lblrr1ruc0vii1hi8ke.apps.googleusercontent.com',
    },{
        projectNameForProxy:'@sedama/demo_firebase'
    });

    useEffect(() => {
        if (response?.type === 'success') {
            getUserInfo(response.authentication.accessToken);
        } else if (response?.type === 'error') {
            console.error('Authentication error:', response.error);
        }
    }, [response]);

    const getUserInfo = async (token) => {
        try {
            const userInfoResponse = await fetch('https://www.googleapis.com/userinfo/v2/me', {
                headers: { Authorization: `Bearer ${token}` },
            });
            const userData = await userInfoResponse.json();
            setUserInfo(userData);
            AsyncStorage.setItem('@user', JSON.stringify(userData));
            navigation.navigate('drawer')
        } catch (error) {
            console.error('Failed to fetch user data:', error);
        }
    };

    return (
        <View style={styles.container}>
      <Image
        source={BWImage}
        style={styles.logo}
      />
      <Text style={styles.description}>The Enterococcus Predictor (or ep), an AI-enabled system to predict the level or counts of enterococcus
        bacteria for a geographical area, is currently in development. If you are a registered user, please use your Google account to log in. If you are having issues logging in, please contact info@enterococcus.today.
      </Text>
      <TouchableOpacity onPress={() => promptAsync()}>
          <View>
            <Image
              source={google}
              style={styles.logo2}
            />
          </View>
      </TouchableOpacity>

      <Text style={styles.agreementText}>
        I agree to the{' '}
        <Link href={'/disclamier'}>
          <Text style={styles.hyperlink}>Terms and Conditions</Text>
        </Link>
      </Text>
    </View>
    );
}

