import React from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  RefreshControl,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import style from '../styles/content';
import { Icon } from './icon';
import { H4 } from './typos';

export const Page = (props) => (
  <View style={{ ...style.pageContainer, ...props.style }}>
    {props.children}
  </View>
);

export const ContentView = ({ noPadding, style: customStyle, ...props }) => {
  let completeStyle = style.contentContainer;
  if (noPadding) {
    completeStyle = {
      ...completeStyle,
      ...style.noPadding,
    };
  }
  completeStyle = { ...completeStyle, ...customStyle };
  return (
    <View {...props} style={completeStyle}>
      {props.children}
    </View>
  );
};

export const ContentKeyboardAvoid = ({
  noPadding,
  style: customStyle,
  ...props
}) => {
  let completeStyle = style.contentContainer;
  let noPaddingStyle = { ...completeStyle, ...style.noPadding };

  let sk = { ...noPaddingStyle, ...props.containerStyle };
  let ss = { ...completeStyle, marginTop: 0, ...customStyle };
  if (noPadding) ss = { ...ss, ...style.noPadding };

  return (
    <KeyboardAvoidingView
      keyboardShouldPersistTaps="handled"
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      {...props}
      style={sk}
    >
      <ScrollView style={ss}>{props.children}</ScrollView>
    </KeyboardAvoidingView>
  );
};

export const Content = ({ noPadding, style: customStyle, ...props }) => {
  let completeStyle = style.contentContainer;
  if (noPadding) {
    completeStyle = {
      ...completeStyle,
      ...style.noPadding,
    };
  }
  let refreshControl = () => {
    let { onRefresh, refreshing } = props;
    if (!onRefresh) return null;
    return (
      <RefreshControl refreshing={refreshing || false} onRefresh={onRefresh} />
    );
  };
  completeStyle = { ...completeStyle, ...customStyle };
  return (
    <ScrollView
      {...props}
      style={completeStyle}
      refreshControl={refreshControl()}
    >
      <View style={style.dummyView} />
      <View>
        {props.title && <H4 style={style.contentTitle}>{props.title}</H4>}
        {props.onHelper && (
          <TouchableOpacity style={style.onHelper} onPress={props.onHelper}>
            <Icon name="help" size={20} />
          </TouchableOpacity>
        )}
      </View>
      {props.children}
    </ScrollView>
  );
};

const SepItemDefault = () => {
  const sepStyle = { height: 16 };
  return <View style={sepStyle} />;
};

export const ContentList = ({ noPadding, style: customStyle, ...props }) => {
  let completeStyle = style.contentContainer;

  if (noPadding) {
    completeStyle = {
      ...completeStyle,
      ...style.noPadding,
    };
  }

  completeStyle = { ...completeStyle, ...customStyle };

  let header = () => {
    return (
      <View>
        {props.title && <H4 style={style.contentTitle}>{props.title}</H4>}
        {props.ListHeaderComponent}
      </View>
    );
  };
  return (
    <FlatList
      contentContainerStyle={style.contentContainerList}
      style={completeStyle}
      ItemSeparatorComponent={SepItemDefault}
      {...props}
      ListHeaderComponent={header.bind(this)}
    >
      {props.children}
    </FlatList>
  );
};
