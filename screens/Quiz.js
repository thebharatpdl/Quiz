import React, { useEffect,useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Quiz = ({ navigation }) => {
  const [question,seetQuestion]=useState([]);
  const [ques,setQuiz]=useState(0);
  const getQuiz =async() =>{
    const url='https://opentdb.com/api.php?amount=10&type=multiple';
    const res=await fetch(url);
    const data=await res.json();
   seetQuestion(data.results);
  };

  useEffect(()=>{
    getQuiz()
  },[])

return (
  
  <View style={styles.container}>
    {
      question&&
      <View>
      <View style={styles.top}>
      <Text style={styles.question}>Q.This is really cool question</Text>
    </View>
    <View style={styles.option}>
      <TouchableOpacity style={styles.optionButton}>
        <Text style={styles.option}>Cool option 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionButton}>
        <Text style={styles.option}>Cool option 2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionButton}>
        <Text style={styles.option}>Cool option 3</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionButton}>
        <Text style={styles.option}>Cool option 4</Text>
      </TouchableOpacity>
    </View>


    <View style={styles.bottom}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>SKIP</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>NEXT</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>END</Text>
</TouchableOpacity> */}
    </View>
    </View>}
  </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    height: '100%',
  },
  top: {
    marginVertical: 15,
  },
  option: {
    marginVertical: 15,
    flex: 1,
  },
  bottom: {
    marginBottom: 15,
    paddingVertical: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  button: {
  
    backgroundColor: '#3a86ff',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 350,
    marginBottom:10,
    paddingHorizontal:15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  question:{
    fontSize:25,
  },
  option:{
    fontSize:20,
    fontWeight: 'bold',
   color: '#fff',
 
  },
  optionButton:{
    paddingVertical:12,
    marginVertical:6,
    backgroundColor:'#219ebc',
    paddingHorizontal:12,
    borderRadius:15,
  }
});

