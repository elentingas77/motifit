import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { useHistory } from "react-router-dom"
import MotifitTitle from 'Components/reusable/MotifitTitle'
import ScoreBG from '../../assets/images/scoreBG.jpg'
import { Button, IconButton, Typography } from '@mui/material'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import SentimentVerySatisfiedTwoToneIcon from '@mui/icons-material/SentimentVerySatisfiedTwoTone';
import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';
import {
  TumblrShareButton,
  TumblrIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

const Score: React.FunctionComponent<{}> = () => {
  let history = useHistory();  

  const feedback = useSelector((state: any) => state.fitness.feedback);
  const { completedWorkouts, completedChallenges, score, calories } = feedback;

  const shareText = `I am making great progress and becoming healthier with Motifit. I have completed ${completedWorkouts} workout${completedWorkouts !== 1 ? 's' : ''}, ${completedChallenges} challenge${completedChallenges !== 1 ? 's' : ''} and burned ${calories} calories. My overall score is ${score}.`;
  const url = 'https://motifit-project.onrender.com';

  return (
    <Styles>
      <MotifitTitle>Score</MotifitTitle>
      
      <div style={{ marginLeft: 'auto', marginRight: 'auto', width: 300, display: 'flex', justifyContent: 'space-between' }}>
        <TwitterShareButton url={url} title={shareText} ><TwitterIcon round={true} /></TwitterShareButton>
        <WhatsappShareButton url={url} title={shareText} ><WhatsappIcon round={true} /></WhatsappShareButton>
        <TumblrShareButton url={url} caption={shareText} ><TumblrIcon round={true} /></TumblrShareButton> 
      </div>

      <div 
        style={{ width: 700, height: 700,  backgroundImage: `url(${ScoreBG})`, borderRadius: '50%', 
        marginTop: 11, marginBottom: 11, marginLeft: 'auto', marginRight: 'auto', display: "flex", justifyContent: 'center', alignItems: 'center'  }}
      >

        <Typography sx={{ textAlign: 'center' }} variant="h4">

          <IconButton sx={{ color: 'black' }} >
              <SportsGymnasticsIcon />
          </IconButton>

          {`You have completed`}
          <br />
          {`${completedWorkouts} workout${completedWorkouts !== 1 ? 's' : ''}, ${completedChallenges} challenge${completedChallenges !== 1 ? 's' : ''}`}
          <br />
          {`and burned ${calories} calories.`}
          <br />
          {`Your overall score`}
          <br />
          {`is ${score}.`}
          <br />
          
          <IconButton sx={{ color: 'black' }} >
              <AutoAwesomeIcon />
              <SentimentVerySatisfiedTwoToneIcon />
          </IconButton>
        </Typography>
      </div>

      <Button onClick={() => history.push('/workouts')} 
        sx={{ bgcolor: '#cddc39', color: 'black', width: '350px', marginLeft: 'auto', marginRight: 'auto'}} startIcon={<EmojiEventsTwoToneIcon />} variant="contained">
          Start a new workout</Button>
    </Styles>
  )
}

export default Score;

const Styles = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: start;
  
`
