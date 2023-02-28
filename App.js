import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Alert, ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";
import bg from "./assets/bg.jpeg";

const emptyMap=[
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
]

export default function App() {
  const [map, setMap] = useState(emptyMap);

  const [currentTurn,setCurrentTurn]=useState('X')

  const onPress=(rowIndex,columnIndex)=>{
    console.log(rowIndex,columnIndex)
    if(map[rowIndex][columnIndex] !== ""){
      Alert.alert("Position already occupied")
      return;
    }

    setMap((existingmap)=>{
      const updatedmap=[...existingmap]
      existingmap[rowIndex][columnIndex] = currentTurn
      return updatedmap;
    })

    setCurrentTurn(currentTurn=== 'X'? 'O':'X')
    const winner=getWinner()
    if(winner){
      gameWon(winner)
    }else{
      checkTieSet()
    }
    
  }
  const getWinner=()=>{
    // check row
    for(let i=0; i<3;i++){
      let isRowXWinning= map[i].every((cell)=>cell === 'X')
      let isRowOWinning= map[i].every((cell)=>cell === 'O')
      if(isRowXWinning){
        return'X'
      }
      if(isRowOWinning){
        return'O'
      }
    }

    // check column
    for(let col=0;col<3;col++){
      let isColumnXWinner=true
      let isColumnOWinner=true
      for(let row=0; row<3;row++) {
        if(map[row][col] !== 'X'){
          isColumnXWinner=false
        }

        if(map[row][col] !== 'O'){
          isColumnOWinner=false
        }

      }

      if(isColumnXWinner){
        return'X'
        
      }
      if(isColumnOWinner){
        return'O'
        
      }
    }

    // diagonal
    let isDiagonal1OWinning=true
    let isDiagonal1XWinning=true
    let isDiagonal2OWinning=true
    let isDiagonal2XWinning=true
    for(let i=0; i<3; i++){
      if(map[i][i] !== 'O'){
        isDiagonal1OWinning=false
      }
      if(map[i][i] !== 'X'){
        isDiagonal1XWinning=false
      }

      if(map[i][2-i] !== 'O'){
        isDiagonal2OWinning=false
      }
      if(map[i][2-i] !== 'X'){
        isDiagonal2XWinning=false
      }

      
    }
    if (isDiagonal1OWinning || isDiagonal2OWinning) {
      return'O'
    }
    if (isDiagonal1XWinning || isDiagonal2XWinning) {
      return'X'
    }
    
  }

  const checkTieSet=()=>{
    if(!map.some((row)=>row.some((cell)=>cell ===""))){
      Alert.alert(`Match Tied`,`tie`,[
        {
          text:'Reset',
          onPress:resetGame
        }
      ])
    }
   
  }

  const gameWon=(player)=>{
    Alert.alert(`Hurrayy`,`Player ${player} won`,[
      {
        text:'Reset',
        onPress:resetGame
      }
    ])
  }

  const resetGame=()=>{
    setMap([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ])
    setCurrentTurn('X')
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.bg} resizeMode="contain">
        <View style={styles.map}>
          {map.map((row,rowIndex) => (
            <View key={`row-${rowIndex}`} style={styles.row}>
              {row.map((cell,columnIndex) => (
                <Pressable key={`row-${rowIndex}-col-${columnIndex}`} onPress={()=>onPress(rowIndex,columnIndex)} style={styles.cell}>
                  {cell === "O" && <View style={styles.circle} />}
                  {cell === "X" && (
                    <View style={styles.cross}>
                      <View style={styles.crossline} />
                      <View
                        style={[styles.crossline, styles.crosslineReverse]}
                      />
                    </View>
                  )}
                </Pressable>
              ))}
            </View>
          ))}

          {/* <View style={styles.circle}/>
              <View style={styles.cross} >
                  <View style={styles.crossline}/>
                  <View style={[styles.crossline,styles.crosslineReverse]}/>
              </View> */}
        </View>
      </ImageBackground>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2b3236",
  },
  bg: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
  map: {
    width: "80%",
    aspectRatio: 1,
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  cell: {
    width: 100,
    height: 100,
    flex: 1,
  },
  circle: {
    flex: 1,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    borderWidth: 10,
    borderColor: "white",

    // top: 105 * 0,
    // left: 105 * 1,
  },
  cross: {
    flex: 1,
  },

  crossline: {
    position: "absolute",
    left: "48%",
    width: 10,
    height: "100%",
    borderRadius: 5,
    backgroundColor: "white",
    transform: [
      {
        rotate: "45deg",
      },
    ],
  },
  crosslineReverse: {
    transform: [
      {
        rotate: "-45deg",
      },
    ],
  },
});
