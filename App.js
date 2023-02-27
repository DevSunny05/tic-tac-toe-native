import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import bg from './assets/bg.jpeg'

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.bg} resizeMode='contain'>
        <View style={styles.map}>
              <View style={styles.circle}/>
              <View style={styles.cross} >
                  <View style={styles.crossline}/>
                  <View style={[styles.crossline,styles.crosslineReverse]}/>
              </View>
        </View>
      </ImageBackground>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#2b3236',
    
  },
  bg:{
    width:'100%',
    height:'100%',
    alignItems:'center',
    justifyContent:'center',
    paddingTop:20
  },
  map:{
    borderWidth:1,
    borderColor:'white',
    width:'80%',
    aspectRatio:1
  },
  circle:{
    width:75,
    height:75,
    borderRadius:50,
    alignItems: 'center',
    justifyContent: 'center',
    margin:10,
    borderWidth:10,
    borderColor:'white',
    position:'absolute',
    
    top:105*0,
    left:105*1,

    
  },
  cross:{
    marginLeft:10,
    position:'absolute'
    
  },
 
  crossline:{
    position:'absolute',
    left:32.5,
    width:10,
    height:70,
    borderRadius:0.5,
    backgroundColor:'white',
    transform:[
      {
        rotate:'45deg',
      }
    ]
  },
  crosslineReverse:{
    transform:[
      {
        rotate:'-45deg'
      }
    ]
  }

});
