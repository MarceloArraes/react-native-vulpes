import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Platform, View } from 'react-native';
import { Header, H3 } from 'react-native-vulpes';

export default {
  title: 'Example/Header',
  component: Header,
  argTypes: {
    backAction: {
      description: 'an action to be executed when the back button is clicked',
      control: 'fn',
    },
  },
};

const actionExample = () => {
  console.warn('BACK ACTION');
};

const HeaderExample = ({ backAction = actionExample, ...rest }) => (
  <Header backAction={backAction} {...rest} />
);

const HeaderExampleTitle = ({ backAction = actionExample, ...rest }) => (
  <Header
    backAction={backAction}
    title={'Titulo no header'}
    subtitle={'Escolha ou pesquise um local para fazer check-in'}
    {...rest}
  />
);

const ContentComponent = () => {
  const style = {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <View style={style}>
      <H3 color={'white'}>GoGood</H3>
    </View>
  );
};

const list = [
  {
    action: () => {},
    icon: 'chat',
    showMarker: true,
  },
  {
    action: () => {},
    icon: 'notification_empty',
    showMarker: true,
  },
  {
    action: () => {},
    icon: 'calendar',
    showMarker: true,
  },
];

export const Example1 = HeaderExample.bind({});
Example1.args = {
  backAction: actionExample,
};

export const Example2 = HeaderExample.bind({});
Example2.args = {
  backAction: actionExample,
  title: 'Titulo no header',
  subtitle: 'Escolha ou pesquise um local para fazer check-in',
};

export const Example3 = HeaderExample.bind({});
Example3.args = {
  backAction: actionExample,
  title: 'Titulo no header',
  menuList: list,
};

export const Example4 = HeaderExample.bind({});
Example4.args = {
  backAction: () => null,
  advanceAction: actionExample,
  advanceText: 'Pular',
};

export const Example5 = HeaderExample.bind({});
Example5.args = {
  backAction: () => null,
  advanceAction: actionExample,
  advanceText: 'Pular',
  title: 'Titulo no header',
  subtitle: 'Subtítulo no header',
  menuList: [
    {
      icon: 'notification_empty',
      showMarker: true,
      action: () => null,
    },
    {
      icon: 'notification_empty',
      showMarker: false,
      action: () => null,
    },
  ],
  contentComponent: <ContentComponent />,
};

if (Platform.OS === 'android') {
  const fillStories = storiesOf('Color', module).addDecorator((Story) => (
    <View>
      <Story />
    </View>
  ));

  fillStories.add('Header', HeaderExample, Example1.args);
  fillStories.add('Header', HeaderExampleTitle, Example2.args);
}
