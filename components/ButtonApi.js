import React, { useState } from "react"
import styled from "styled-components/native"
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  ImageBackground,
} from "react-native"

export const ButtonApi = () => {
  const [quote, setQuote] = useState({})
  const [loading, setLoading] = useState(false)

  const generateQuote = () => {
    setLoading(true)

    fetch("https://friends-quotes-api.herokuapp.com/quotes/random")
      .then((res) => res.json())
      .then((data) => setQuote(data))
      .finally(() => setLoading(false))
  }

  /* Switchcases for images according to the characters name  */
  const CharactersImage = () => {
    switch (quote.character) {
      case "Chandler":
        return require("../assets/chandler.png")
        break
      case "Joey":
        return require("../assets/joey.png")
        break
      case "Monica":
        return require("../assets/monica.png")
        break
      case "Phoebe":
        return require("../assets/phoebe.png")
        break
      case "Rachel":
        return require("../assets/rachel.png")
        break
      case "Ross":
        return require("../assets/ross.png")
        break
      default:
        return require("../assets/bgfriendsclick.png")
    }
  }

  if (loading) return <ActivityIndicator />

  return (
    <>
      <Container>
        <Wrapper>
          <Image
            style={{ width: 300, height: 300 }}
            source={CharactersImage(quote.character)}
          />
          <TextWrapper>
            <QuoteText>"{quote.quote}"</QuoteText>
            <CharacterName> {quote.character}</CharacterName>
          </TextWrapper>
          <ApiButton onPress={generateQuote}>
            <Text> Get Your Quote </Text>
          </ApiButton>
        </Wrapper>
      </Container>
    </>
  )

  //
}
const Container = styled.View`
  flex: 1;
  background-color: #f1f1f1;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 20px 3px;
  border-radius: 10px;
  background-color: #965eb9;
`
const TextWrapper = styled.View`
  background-color: #3a3a3a1a;
  width: 300px;
  margin: 20px;
`

const QuoteText = styled.Text`
  font-weight: 700;
  color: #ffdf00;
  font-weight: 700;
  margin: 3px 20px;
  padding: 5px;
`
const CharacterName = styled.Text`
  color: #ffdf00;
  font-style: italic;
  margin: 3px 20px;
  text-align: left;
`
const ApiButton = styled.TouchableOpacity`
  width: 150px;
  background-color: #ffdf00;
  margin: 10px auto;
  padding: 10px;
  border-radius: 5px;
  align-items: center;
  display: flex;
`
