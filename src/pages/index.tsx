import * as React from "react"
import { StyledSpinnerNext } from "baseui/spinner"
import { Card } from "baseui/card"

import useFetch from "../components/useFetch"
import Layout from "../components/layout"
import Seo from "../components/seo"
import WeatherCardBody from "../components/WeatherCardBody"

const IndexPage = () => {
  // const {
  //   data = {},
  //   isLoading,
  //   hasError,
  //   errorMessage,
  // } = useFetch(
  //   "https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=-74&lat=40"
  // )

  // if (hasError) return "Error" + JSON.stringify(errorMessage)
  const data = {data: [{ timezone: "nyc", temp: 24, max_temp: 26, min_temp: 20, weather: { description: "bonk"}}, { timezone: "tokyo", temp: 34, max_temp: 36, min_temp: 30, weather: { description: "bonk"}}]}
  return (
    <Layout>
      <Seo title="Home" />
      <h1>Today's forecast</h1>
      <Card>
        {/* {isLoading ? <StyledSpinnerNext /> :  */}
        <WeatherCardBody {...data?.data?.[0]} />
      </Card>
    </Layout>
  )
}

export default IndexPage
