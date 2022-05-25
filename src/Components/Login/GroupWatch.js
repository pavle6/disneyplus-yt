import React from 'react'
import styled from 'styled-components'
import bgImg from '../Images/Soul_Groupwatch.jpg';
const GroupWatch = () => {
    return (
        <>
            <Section>
                <Container>
                    <Content>
                        <h1 className="disney-titles">Virtual Movie Nights with</h1>
                        <h1 className="disney-titles">Group Watch</h1>
                        <li>Watch togather, even when apart</li>
                        <li>Stream with up to 6 friends</li>
                        <li>Pause, rewind, react togather</li>
                        <li>Easy setup and Sharing</li>
                    </Content>
                </Container>
            </Section>
        </>
    )
}

const Section = styled.section`
background: url(${bgImg})center/cover no-repeat;
height: 71vh;
display: flex;
align-items: center;
flex-direction: column;

@media screen and(min-width: 768px) and (max-width: 1200px) {
height: 61vh;
}

@media screen and(min-width: 280px) and (max-width: 767px) {
height: 55vh;
}
`;

const Container = styled.div`
width: 91%;
margin: 0 auto;

@media screen and(min-width: 280px) and (max-width: 991px) {
width: 85%;
}
`;

const Content = styled.div`
margin-top: 17vh;
@media screen and(min-width: 280px) and (max-width: 1200px) {
margin-top: 13vh;
}
.disney-titles {
    font-size: 2.3rem;
    font-weight: 500 !important;
    line-height: 2.5rem;

    @media screen and (min-width: 991px) and (max-width: 1200px) {
      font-size: 1.8rem;
      line-height: 2rem;
    }
    @media screen and (min-width: 550px) and (max-width: 991px) {
      font-size: 1.5rem;
      line-height: 1.8rem;
    }
    @media screen and (min-width: 375px) and (max-width: 550px) {
      font-size: 1.3rem;
      line-height: 1.7rem;
    }
    @media screen and (min-width: 280px) and (max-width: 375px) {
      font-size: 1.1rem;
      line-height: 1.3rem;
    }
  }

li{
    font-size: 1rem;
    font-weight: 300;

    @media screen and(min-width: 280px) and (max-width: 375px) {
font-size: 0.75rem;
}
}
`;

export default GroupWatch
