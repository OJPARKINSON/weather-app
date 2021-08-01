import * as React from "react"
import { StyledSpinnerNext } from "baseui/spinner"
import { Card, StyledBody, StyledTitle } from "baseui/card"

import useFetch from "../components/useFetch"
import Layout from "../components/layout"
import Seo from "../components/seo"

interface WeatherCardBodyProps {
  data: any
}

const WeatherCardBody = ({ data }: WeatherCardBodyProps) => (
  <>
    <StyledTitle>{data?.data?.[0]?.timezone}</StyledTitle>
    <StyledTitle>{Math.round(data?.data?.[0]?.temp)}°C</StyledTitle>
    <StyledBody>{data?.data?.[0]?.weather?.description}</StyledBody>
  </>
)

const IndexPage = () => {
  const {
    data = {},
    isLoading,
    hasError,
    errorMessage,
  } = useFetch(
    "https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=-74&lat=40"
  )

  if (hasError) return "Error" + JSON.stringify(errorMessage)

  return (
    <Layout>
      <Seo title="Home" />
      <h1>Today's forecast</h1>
      <Card>
        {isLoading ? <StyledSpinnerNext /> : <WeatherCardBody data={data} />}
      </Card>
    </Layout>
  )
}

export default IndexPage
