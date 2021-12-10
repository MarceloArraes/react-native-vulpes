import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Colors } from '../colors';
import { Fonts } from '../fonts';
import { Text } from './text';

const generalMenuStyle = {
  flexDirection: 'column',
  borderRightWidth: 1,
  backgroundColor: Colors.white,
  borderRightColor: Colors.light_gray,
};

export const LeftMenu = (props) => {
  return (
    <View style={generalMenuStyle}>
      {React.Children.map(props.children, (child, i) => {
        return React.cloneElement(child, {
          justIcons: props.justIcons,
        });
      })}
    </View>
  );
};

const generalMenuItemStyle = {
  flex: 1,
  padding: 15,
  paddingLeft: 10,
  paddingRight: 10,
  flexDirection: 'row',
};

const adaptToType = (type, justIcons) => {
  console.log(type);
  if (justIcons) {
    if (type === Text) {
      return {
        width: 0,
        height: 0,
        overflow: 'hidden',
      };
    } else {
      return {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
      };
    }
  } else {
    return {};
  }
};

export const LeftMenuItem = ({ children, selected, onPress, justIcons }) => {
  return (
    <TouchableOpacity style={generalMenuItemStyle} onPress={onPress}>
      {React.Children.map(children, (child, i) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            color: selected ? 'black' : 'gray',
            fontStyle: selected ? Fonts.leftMenuTextBold : Fonts.leftMenuText,
            size: 18,
            style: {
              alignSelf: 'center',
              ...child.props.style,
              marginRight: 10,
              ...adaptToType(child.type, justIcons),
            },
          });
        }
        return child;
      })}
    </TouchableOpacity>
  );
};
