import { StyleSheet, Text, View, TouchableOpacity, Image, Linking } from 'react-native';
import React from 'react';
import { styles } from './style/style_index';
import { Link } from 'expo-router';
import BWImage from '../assets/images/BW_Logo.png'
import google from '../assets/images/btn_google_signin_dark_normal_web.png'

export default function LoginPage() {
  return (
    <View style={styles.container}>
      <Image
        source={BWImage}
        style={styles.logo}
      />
      <Text style={styles.description}>The Enterococcus Predictor (or ep), an AI-enabled system to predict the level or counts of enterococcus
        bacteria for a geographical area, is currently in development. If you are a registered user, please use your Google account to log in. If you are having issues logging in, please contact info@enterococcus.today.
      </Text>
      <TouchableOpacity>
        <Link href={'/drawer'}>
          <View>
            <Image
              source={google}
              style={styles.logo2}
            />
          </View>
        </Link>
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


