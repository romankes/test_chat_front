import {Avatar, BackArrowIcon, Text} from '@/components';
import {useLoader} from '@/hooks';
import React, {FC, ReactNode} from 'react';

import {SafeAreaView, ScrollView, TouchableOpacity, View} from 'react-native';
import {useStyles} from './useStyles';

type TProps = {
  renderFooter?: ReactNode;
  children: ReactNode[];
  renderHeader?: ReactNode;

  isLoading?: boolean;

  title: string;
  onBack: () => any;

  url?: string | null;
};

export const DetailLayout: FC<TProps> = ({
  children,
  isLoading,
  renderFooter,
  renderHeader,
  onBack,
  title,
  url,
}) => {
  const {styles} = useStyles();

  const {renderLoader, isEnd} = useLoader({isLoading, height: 328});

  if (isEnd) {
    return <SafeAreaView>{renderLoader}</SafeAreaView>;
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={[styles.container, styles.header]}>
        <TouchableOpacity activeOpacity={0.6} onPress={onBack}>
          <BackArrowIcon color="dark" size={24} />
        </TouchableOpacity>
        <Text size={18} family="medium">
          {title}
        </Text>
        <View />
      </View>

      <ScrollView
        style={[styles.container, styles.content]}
        showsVerticalScrollIndicator={false}>
        <View style={styles.main}>
          <Avatar url={url} />
          <View style={styles.mainContent}>{renderHeader}</View>
        </View>

        <View style={styles.list}>{children}</View>
      </ScrollView>

      <View style={[styles.container]}>{renderFooter}</View>
    </SafeAreaView>
  );
};
