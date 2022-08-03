import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ChallengesListItem from '../reusable/ChallengesListItem';
import MotifitTitle from '../reusable/MotifitTitle';
import { Button } from '@mui/material';
import colors from '../../constants/colors';
import EmojiFlagsOutlinedIcon from '@mui/icons-material/EmojiFlagsOutlined';

const challenges: any = [
  {
    id: 2345,
    title: 'Plank Challenge',
    description: 'this workout focuses on the muscles of the entire body',
    score: 564,
    imagePath: "workoutItem.jpg",
  },
  {
    id: 234534,
    title: 'Plank Challenge',
    description: 'this workout focuses on the muscles of the entire body',
    score: 564,
    imagePath: "workoutItem.jpg",
  },
  {
    id: 232445,
    title: 'Plank Challenge',
    description: 'this workout focuses on the muscles of the entire body',
    score: 564,
    imagePath: "workoutItem.jpg",
  },
  {
    id: 242345,
    title: 'Plank Challenge',
    description: 'this workout focuses on the muscles of the entire body',
    score: 564,
    imagePath: "workoutItem.jpg",
  },
  {
    id: 23657545,
    title: 'Plank Challenge',
    description: 'this workout focuses on the muscles of the entire body',
    score: 564,
    imagePath: "workoutItem.jpg",
  },
];

const Challenges: React.FunctionComponent<{}> = ({}) => {
  let history = useHistory();  
  
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
        ssr={true}
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
        {challenges.map(({ id, title, description, score, imagePath}) => (
          <ChallengesListItem
            id={id}
            title={title}
            description={description}
            score={score}
            imagePath={imagePath}
        />
        ))}
      </Carousel>
      
      <Button 
        sx={{ bgcolor: '#1a237e', width: 'min-content', minWidth: '370px', marginLeft: 'auto', marginRight: 'auto', marginBottom: '10px', marginTop: '10px' }} 
        startIcon={<EmojiFlagsOutlinedIcon />} 
        variant="contained"
        size={'small'}
      >Start a random challenge</Button> 
      </Styles>
  )
}

const mapStateToProps = state => {
  return {
    // transferMoneyLoading: state.accounts.transferMoneyLoading,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    // transferMoney: (from, to, amount) => dispatch(transferMoney(from, to, amount))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Challenges)

const Styles = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: start;
  width: 700px;

`
