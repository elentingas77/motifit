import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { useHistory } from "react-router-dom"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import WorkoutsListItem from '../reusable/WorkoutsListItem';
import MotifitTitle from '../reusable/MotifitTitle';
import { Button, IconButton, Typography } from '@mui/material';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import EmojiNatureOutlinedIcon from '@mui/icons-material/EmojiNatureOutlined';

const Workouts: React.FunctionComponent<{}> = () => {
  let history = useHistory();  

  const workouts = useSelector((state: any) => state.fitness.workouts);
  
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
      <MotifitTitle>Workouts</MotifitTitle>


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
        {workouts.map((workout) => (
          <WorkoutsListItem
            id={workout.id}
            title={workout.title}
            description={workout.description}
            role={workout.role}
            calories={workout.calories}
            imagePath={workout.imagePath}
            onClick={() => history.push('/workout-in-progress/' + workout.id, {workout: workout})}
        />
        ))}
      </Carousel>
      
      <Button 
        sx={{ bgcolor: '#e65100', width: 'min-content', minWidth: '350px', marginLeft: 'auto', marginRight: 'auto', marginBottom: '10px', marginTop: '10px' }} 
        startIcon={<InsertEmoticonIcon />} 
        variant="contained"
        size={'small'}
      >Start a random workout</Button>

        <Typography sx={{ padding: 2 }} variant="body2">
            <IconButton sx={{ color: '#006b76' }}>
              <FaceRetouchingNaturalIcon fontSize="large" />
            </IconButton>
            Did you know? 
            <IconButton sx={{ color: '#e65100' }} >
              <AutoAwesomeIcon fontSize="small" />
            </IconButton>
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
          neque doloribus, cupiditate num laborum fugiat deleniti? Eum
          quasi quidem quibusdam.
            <IconButton sx={{ color: '#006b76' }} >
              <EmojiNatureOutlinedIcon fontSize="large" />
            </IconButton>
        </Typography>    
      
      </Styles>
  )
}

export default Workouts;

const Styles = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: start;
  width: 700px;

`
