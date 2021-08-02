import * as React from "react"
import { StyledSpinnerNext } from "baseui/spinner"
import {useStyletron} from 'baseui';
import { Table } from "baseui/table-semantic";
import {Heading, HeadingLevel} from 'baseui/heading';

import useFetch from "../components/useFetch"
import ErrorCard from "../components/ErrorCard"

interface ForecastBodyProps {
  filterMaxTemp: string
  filterMinTemp: string
  city: string
  country: string
}

interface ForecastBodyProps {
  datetime: string
  temp: number
  weather: any
  min_temp: number
  max_temp: number
}

// I would much rather have the backend do this logic
const transformData = (data: any, filterMaxTemp: string, filterMinTemp: string) => {
  return data.reduce((acc: any, { datetime, temp, weather, min_temp, max_temp }: ForecastBodyProps) => {
    acc.push([
      datetime.replace(/(\d{4})\-(\d{2})\-(\d{2})/, '$3/$2'), 
      Math.round(temp)+"°C", 
      Math.round(max_temp)+"°C", 
      Math.round(min_temp)+"°C", 
      weather.description
    ])
    return acc
  }, []).filter((temp: any) => {
    if (filterMaxTemp !== "") return Number(temp[2].replace("°C", "")) >= Number(filterMaxTemp)
    else if ( filterMinTemp !== "") return Number(temp[3].replace("°C", "")) <= Number(filterMinTemp)
    else return true
  })
}

const ForecastBody = ({city, country, filterMaxTemp, filterMinTemp}: ForecastBodyProps) => {
  const [css] = useStyletron();
  const {
    data = { city_name : "", data: {}},
    isLoading,
    hasError,
    errorMessage,
  } = useFetch(
    `/forecast/daily?city=${city}&country=${country}`)

  if (hasError) { console.log(errorMessage); return <ErrorCard />};
  if (isLoading) return <StyledSpinnerNext />;
  
  return (
    <>
    <HeadingLevel>
      <Heading>{data?.city_name}</Heading>
    </HeadingLevel>
    <div className={css({display: "grid"})}>
    <Table
      columns={["Date", "Temprature", "Max Temprature", "Min Temprature", "Description"]}
      data={transformData(data?.data, filterMaxTemp, filterMinTemp)}
    />
    </div>
    </>
  )
};

export default ForecastBody