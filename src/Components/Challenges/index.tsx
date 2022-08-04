import React from 'react'
import styled from 'styled-components'
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ChallengesListItem from '../reusable/ChallengesListItem';
import MotifitTitle from '../reusable/MotifitTitle';
import { Button } from '@mui/material';
import EmojiFlagsOutlinedIcon from '@mui/icons-material/EmojiFlagsOutlined';


const Challenges: React.FunctionComponent<{}> = () => {
  let history = useHistory();  
  
  const challenges = useSelector((state: any) => state.fitness.challenges);
  
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 900 },
      items: 4,
      slidesToSlide: 1 
    },
    tablet: {
      breakpoint: { max: 900, min: 464 },
      items: 2,
      slidesToSlide: 1 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 
    }
  };


  return (
    <Styles>
      <MotifitTitle>Challenges</MotifitTitle>

      <Carousel
        responsive={responsive}
        keyBoardControl={true}
        infinite={true}
        autoPlay={false}
        customTransition="all .5"
        transitionDuration={500}
        deviceType={'desktop'}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {challenges.map((challenge) => (
          <ChallengesListItem
            id={challenge.id}
            title={challenge.title}
            description={challenge.description}
            score={challenge.score}
            imagePath={challenge.imagePath}
            onClick={() => history.push('/challenge-in-progress/' + challenge.id, {challenge: challenge})}
        />
        ))}
      </Carousel>
      
      <Button 
        sx={{ bgcolor: '#1a237e', width: 'min-content', minWidth: '370px', marginLeft: 'auto', marginRight: 'auto', marginBottom: '10px', marginTop: '10px' }} 
        startIcon={<EmojiFlagsOutlinedIcon />} 
        variant="contained"
        size={'small'}
        onClick={() => {
          const randomChallenge = challenges[Math.floor(Math.random() * challenges.length)]
          history.push('/challenge-in-progress/' + randomChallenge.id, {challenge: randomChallenge})
         }}
      >Start a random challenge</Button> 
      </Styles>
  )
}

export default Challenges;

const Styles = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: start;
  width: 700px;

`
