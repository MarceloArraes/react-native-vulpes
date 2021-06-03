import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Platform, View } from 'react-native';
import { Content, ContentList, Header, Page } from 'react-native-vulpes';
import { Regular } from '../../../src/components/typos';

export default {
  title: 'Example/PageContent',
  component: Page,
  argTypes: {
    backAction: {
      description: 'an action to be executed when the back button is clicked',
      control: 'fn',
    },
  },
};

const backActionExample = () => {
  console.warn('BACK ACTION');
};

// example 1
const TemplatePageContent = (props) => (
  <Page>
    <Header backAction={backActionExample} title={'Titulo principal'} />
    <Content {...props}>
      <Regular>Texto interno ao content</Regular>
    </Content>
  </Page>
);
export const Example = TemplatePageContent.bind({});
Example.args = {
  title: 'Titulo interno',
};

// example 2
const TemplatePageContentList = (props) => (
  <Page>
    <Header
      backAction={backActionExample}
      title={'Content com lista'}
      subtitle={'Escolha ou pesquise um local para fazer check-in'}
    />
    <ContentList {...props} />
  </Page>
);

export const Example2 = TemplatePageContentList.bind({});
Example2.args = {
  title: 'Titulo interno para content com lista',
  data: [
    { id: 1, value: 'Item 1' },
    { id: 2, value: 'Item 2' },
  ],
  ListHeaderComponent: <Regular>List header</Regular>,
  renderItem: (item) => {
    return <Regular>{item.item.value}</Regular>;
  },
};

if (Platform.OS === 'android') {
  const fillStories = storiesOf('Color', module).addDecorator((Story) => (
    <View>
      <Story />
    </View>
  ));

  fillStories.add('PageContent', TemplatePageContent, Example.args);
  fillStories.add('PageContent', TemplatePageContentList, Example2.args);
}
