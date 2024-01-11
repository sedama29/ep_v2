

import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginPage() {
  const [userInfo, setUserInfo] = useState(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    redirectUri: 'https://auth.expo.io/@sedama/ep_v1', 
    expoClientId: '818720577294-6pb4fdd87m9t9bd04lvtf07cqd45ffs8.apps.googleusercontent.com',
    iosClientId: '818720577294-0l4p39cugsuu1c8pidllbp3r5hr1tvrq.apps.googleusercontent.com',
    androidClientId: '818720577294-0l4p39cugsuu1c8pidllbp3r5hr1tvrq.apps.googleusercontent.com',
    scopes: ['profile', 'email']
  });

  useEffect(() => {
    console.error("Response",response);

      if (response?.type === 'success') {
          getUserInfo(response.authentication.accessToken);
      } else if (response?.type === 'error') {
          console.error('Authentication error:', response.error);
      }
      else {
        console.error("Response",response);
      }
  }, [response]);

  const getUserInfo = async (token) => {
    console.error("token", token)
      try {
          const userInfoResponse = await fetch('https://www.googleapis.com/userinfo/v2/me', {
              headers: { Authorization: `Bearer ${token}` },
          });
          const userData = await userInfoResponse.json();
          setUserInfo(userData);
          AsyncStorage.setItem('@user', JSON.stringify(userData));
      } catch (error) {
          console.error('Failed to fetch user data:', error);
      }
  };

  return (
      <View style={styles.container}>
          {!userInfo ? (
              <Button
                  title='Sign in with Google v2'
                  disabled={!request}
                  onPress={() => promptAsync()}
              />
          ) : (
              <View style={styles.userInfo}>
                  <Image source={{ uri: userInfo.picture }} style={styles.image} />
                  <Text style={styles.text}>Email: {userInfo.email}</Text>
                  <Text style={styles.text}>Name: {userInfo.name}</Text>
              </View>
          )}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
  userInfo: {
      alignItems: 'center',
  },
  image: {
      width: 100,
      height: 100,
      borderRadius: 50,
  },
  text: {
      fontSize: 20,
      marginTop: 10,
  },
});

