import React from 'react'
import ReactLoading from "react-loading"
import styled from 'styled-components'

interface Props {
  condition: any
  positive: any
  negative?: any
}

const Condition: React.FunctionComponent<Props> = ({condition, positive, negative}) => {
    if (condition)
        return positive
    return negative || (
              <Styles>
                <ReactLoading type={"spinningBubbles"} color="#fff" />
              </Styles>
    )
}

export default Condition


const Styles = styled.div`
  display: flex;
  height: 80vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`
