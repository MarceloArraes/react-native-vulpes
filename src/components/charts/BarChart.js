import React, { Component } from 'react';
import { View } from 'react-native';
import { BarChart as BChart } from 'react-native-gifted-charts';
import { Colors } from '../../colors';
import { Small } from './../typos';

export class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      with: null,
    };

    this.nItems = 0;
    const { data } = props;
    if (data && data.data && data.data.length > 0) {
      this.nItems = data.data.length;
    }
  }

  topLabel(value) {
    return <Small>{value}</Small>;
  }

  xLabelStyle() {
    return {
      fontSize: 10,
    };
  }

  renderGraph(data) {
    if (!this.props.width) return null;

    const itens = this.nItems;
    const wa = this.props.width - 12 - 12;

    this.spacing = (wa * 0.2) / (itens - 1);
    this.barWidth = (wa * 0.8) / itens;

    for (const d of data.data) {
      d.topLabelComponent = () => this.topLabel(d.value);
      d.topLabelContainerStyle = { width: this.barWidth };
      d.onPress = () => console.log(d.value);
      d.labelTextStyle = this.xLabelStyle();
    }
    const sGraph = { flex: 1, paddingBottom: 16, marginLeft: -35 };
    return (
      <View style={sGraph}>
        <BChart
          data={data.data}
          width={this.props.width}
          barWidth={this.barWidth}
          spacing={this.spacing}
          initialSpacing={12}
          noOfSections={4}
          yAxisThickness={0}
          isAnimated
          yAxisLabelWidth={0}
          hideYAxisText
          cappedBars={false}
          capThickness={0}
          capColor={Colors.dark_gray}
          showGradient
          gradientColor={Colors['dark_' + data.color]}
          frontColor={Colors['light_' + data.color]}
        />
      </View>
    );
  }

  render() {
    const { data } = this.props;
    if (!data || !data.length === 0) return null;
    return this.renderGraph(data);
  }
}
