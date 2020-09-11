import React from "react"
import styled from "styled-components"

type Props = {
  id: string
  name: string
  address?: string
  capital: number
}

const ColumnContainer = styled.div`
  display: flex;
  justify-content: center;
`

const ShortColumn = styled.div`
  min-width: 3rem;
`
const Column = styled.div`
  min-width: 10rem;
`

const LongColumn = styled.div`
  min-width: 20rem;
`

const PublisherRow: React.FC<Props> = props => {
  return (
    <ColumnContainer>
      <ShortColumn>{props.id}</ShortColumn>
      <Column>{props.name}</Column>
      <LongColumn>{props.address}</LongColumn>
      <Column>{props.capital}</Column>
    </ColumnContainer>
  )
}

export default PublisherRow
