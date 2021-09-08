import React from 'react'
import { View, ScrollView, Text,ViewPropTypes } from "react-native";
import PropTypes from 'prop-types';
export function Row({children, style, }) {
    return (
        <View style={{ flexDirection: 'row',...style }}>{children}</View>

    )
}

export function Column({children, style, }) {
    return (
        <View style={{ flexDirection: 'column',...style }}>{children}</View>

    )
}


Row.propTypes = {
    style: ViewPropTypes.style
  };

  
  Column.propTypes = {
    style: ViewPropTypes.style
  };