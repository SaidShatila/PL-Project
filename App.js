import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {AppLoading,Asset} from 'expo';

import Navigation from './navigation';
import {Block} from './constants';


//import all images used
const images=[
  //plants
require('./'),
require('./'),
require('./'),
//explorer
require('./'),
require('./'),
require('./'),
//avatar
  require('./'),
];

export default class App extends React.Component{
  state ={
    isLoadingComplete: false,
  }
  handleresourcesAsync = async()=>{
    //we are caching all the images
    //for better performance on the app
    const cacheImages = images.map(img =>{
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages)
  }
  render(){
    if(!this.state.isLoadingComplete && !this.props.skipLoadingScreen){
      return(
        <AppLoading
        startAsync={this.handleResourceAsync}
        onError={error=>console.warn(error)}
        onFinish={()=>this.setState({isLoadingComplete: true})}
        />
      )
    }
    return(
      <Block White >
      <Navigation/>
      </Block>
    );
  }
}
const styles = StyleSheet.create({
  
});