import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Quiz = ({ navigation }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const getQuiz = async () => {
    const url = 'https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple&encode=url3986';
    const res = await fetch(url);
    const data = await res.json();
    setQuestions(data.results);
  };

  useEffect(() => {
    getQuiz();
  }, []);

  if (questions.length === 0) {
    return <Text>Loading...</Text>;
  }

  const currentQuestion = questions[currentQuestionIndex];
  const options = [
    ...currentQuestion.incorrect_answers,
    currentQuestion.correct_answer,
  ].sort();

  const handleNext = () => {
    if (selectedOption === currentQuestion.correct_answer) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleShowResult = () => {
    if (selectedOption === currentQuestion.correct_answer) {
      setScore(score + 1);
    }
    navigation.navigate('Result', { score });
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.question}>Q. {decodeURIComponent(currentQuestion.question)}</Text>
      </View>
      <View style={styles.option}>
        {options.map((option, index) => (
          <TouchableOpacity 
            key={index} 
            style={[
              styles.optionButton,
              selectedOption === option && styles.selectedOptionButton
            ]}
            onPress={() => setSelectedOption(option)}
          >
            <Text style={styles.optionText}>{decodeURIComponent(option)}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity
          style={styles.button}
          onPress={handlePrevious}
        >
          <Text style={styles.buttonText}>PREVIOUS</Text>
        </TouchableOpacity>
        {currentQuestionIndex < questions.length - 1 ? (
          <TouchableOpacity
            style={styles.button}
            onPress={handleNext}
          >
            <Text style={styles.buttonText}>NEXT</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.button}
            onPress={handleShowResult}
          >
            <Text style={styles.buttonText}>SHOW RESULT</Text>
          </TouchableOpacity>
        )}
      </View>
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
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  question: {
    fontSize: 25,
  },
  optionText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  optionButton: {
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: '#219ebc',
    paddingHorizontal: 12,
    borderRadius: 15,
  },
  selectedOptionButton: {
    backgroundColor: '#8ecae6',
  },
});
