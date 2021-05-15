import React from 'react'
import Section from './Section'
import styled from 'styled-components'


function Home() {
    return (
        <Container>
            <Section
               title="Model S"
               description="Order Online For Touchless Delivery"
               backgroundImg="model-s.jpg"
               leftBtnText="Custom Order"
               rightBtnText="Existing Inventory"

            />
            <Section
              title="Model Y"
              description="Order Online For Touchless Delivery"
              backgroundImg="model-y.jpg"
              leftBtnText="Custom Order"
              rightBtnText="Existing Inventory"
            
            />
            <Section
              title="Model 3"
              description="Order Online For Touchless Delivery"
              backgroundImg="model-3.jpg"
              leftBtnText="Custom Order"
              rightBtnText="Existing Inventory"

            />
            <Section
              title="Lowest Cost Solar Panels in America"
              description="Money-back Guarantee"
              backgroundImg="solar-panel.jpg"
              leftBtnText="Order now"
              rightBtnText="Learn More"

            />
            <Section
              title="Solar for New Roofs"
              description="Solar Roof Costs Less Than a New Roofs Plus Solar Panels"
              backgroundImg="solar-roof.jpg"
              leftBtnText="Order now"
              rightBtnText="Learn More"

            />
            <Section
              title="Accessories"
              description=""
              backgroundImg="accessories.jpg"
              leftBtnText="Shop now"
            />
           
        </Container>
    )
}

export default Home

const Container = styled.div`
      height: 100vh;
`
  