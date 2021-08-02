import * as React from "react"
import { StyledBody, StyledTitle } from "baseui/card"

interface WeatherCardBodyProps {
  timezone: string
  temp: number
  min_temp: number
  max_temp: number
  weather: {
    description: string
  }
}

const WeatherCardBody = ({ timezone, temp, weather }: WeatherCardBodyProps) => (
  <>
    {timezone && <StyledTitle>City: {timezone}</StyledTitle>}
    <StyledBody>Temprature: {Math.round(temp)}°C</StyledBody>
    <StyledBody>Description: {weather?.description}</StyledBody>
  </>
)

export default WeatherCardBody