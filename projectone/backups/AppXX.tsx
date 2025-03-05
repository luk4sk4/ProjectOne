import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import FetchData from '../modules/data.js'
import FetchDataId from '../modules/data_by_id.js'
import FetchSerials from '../modules/data_serials.js'

const actualID = 1

const DatabaseDisplay: React.FC = () => { 
    console.log(FetchSerials())
    return (
      <View>
        <Text>Database Valuse:</Text>
      </View>
    );
  };
  
  export default DatabaseDisplay;