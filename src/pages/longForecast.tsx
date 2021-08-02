import * as React from "react"
import { Input } from "baseui/input";

import Layout from "../components/layout"
import Seo from "../components/seo"
import ForecastBody from "../components/ForecastBodt";

const Locations = [
  {city: "London", country: "UK"}, 
  {city: "New York", country: "US"}, 
  {city: "Mumbai", country: "IN"}, 
  {city: "Sydney", country: "AU"}, 
  {city: "Tokyo", country: "JP"}
]

const LongForecast = () => {
  const [filterMaxTemp, setFilterMaxTemp] = React.useState("");
  const [filterMinTemp, setFilterMinTemp] = React.useState("");
  return (
    <Layout>
      <Seo title="Home" />
      <h1 style={{textAlign: "center"}}>16 day forecast</h1>
      
      <Input
        value={filterMaxTemp}
        onChange={e => setFilterMaxTemp(e.target.value)}
        placeholder="Filter max temp"
        type="number"
        clearOnEscape
      />
      <Input
        value={filterMinTemp}
        onChange={e => setFilterMinTemp(e.target.value)}
        placeholder="Filter min temp"
        type="number"
        clearOnEscape
      />
      {Locations.map(({city, country}) => 
          <ForecastBody city={city} country={country} filterMaxTemp={filterMaxTemp} filterMinTemp={filterMinTemp}  />
      )}
    </Layout>
)};
export default LongForecast


