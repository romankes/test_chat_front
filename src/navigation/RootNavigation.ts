import React from 'react';
import {NavigationContainerRef} from '@react-navigation/native';
import {Routes} from './Routes';

export const navigationRef = React.createRef<NavigationContainerRef<any>>();

export const navigate = (name: Routes, params?: any) => {
  if (navigationRef.current) navigationRef.current.navigate(name, params);
};

export const goBack = () => {
  if (navigationRef.current && navigationRef.current.canGoBack())
    navigationRef.current.goBack();
};

export const reset = ({
  index,
  routes,
}: {
  index: number;
  routes: {name: Routes; params?: any}[];
}) => {
  if (navigationRef.current) navigationRef.current.reset({index, routes});
};

export const getCurrent = () => {
  if (navigationRef.current) {
    return navigationRef.current.getCurrentRoute()?.name;
  }
};
