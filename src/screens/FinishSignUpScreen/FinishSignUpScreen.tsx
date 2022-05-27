import React, {useRef} from 'react';

import {useStyles} from './useStyles';
import {useData} from './useData';

import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import {Avatar, Button, FilledField, Header, Text} from '@/components';
import ActionSheet from 'react-native-actions-sheet';
import {ImagePicker} from '@/components/ImagePicker/ImagePicker';
import {Controller} from 'react-hook-form';

export const FinishSignUpScreen = () => {
  const {styles} = useStyles();
  const {avatar, control, errors, handleSubmit, onUploadAvatar} = useData();

  const actionSheetRef = useRef<ActionSheet>(null);

  return (
    <SafeAreaView style={styles.wrapper}>
      <Header></Header>
      <View style={styles.container}>
        <Text textAlign="center" family="medium" size={16} margin={{top: 32}}>
          Finish Registration!
        </Text>
        <View style={styles.content}>
          <TouchableOpacity
            onPress={() => actionSheetRef.current?.show()}
            activeOpacity={0.8}
            style={styles.avatar}>
            <Avatar url={avatar?.uri || null} variant="round" />
          </TouchableOpacity>

          <Controller
            control={control}
            name="username"
            render={({field: {name, onBlur, onChange, value}}) => (
              <FilledField
                error={errors[name]}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                label="Username"
              />
            )}
          />
        </View>
        <Button onPress={handleSubmit}>Finish Sign Up</Button>
      </View>
      <ImagePicker
        actionSheetRef={actionSheetRef}
        onUploadItems={(images) => {
          if (images.length) {
            onUploadAvatar(images[0]);
          }
        }}
      />
    </SafeAreaView>
  );
};
