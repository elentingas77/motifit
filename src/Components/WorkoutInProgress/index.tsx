import React from 'react'
import styled from 'styled-components'
import { useHistory, useLocation } from "react-router-dom"
import MotifitTitle from 'Components/reusable/MotifitTitle'
import ScoreBG from '../../assets/images/scoreBG.jpg'
import { Button, IconButton, Typography } from '@mui/material'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import GolfCourseTwoToneIcon from '@mui/icons-material/GolfCourseTwoTone';
import colors from '../../constants/colors'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const WorkoutInProgress: React.FunctionComponent<{}> = () => {
  let history = useHistory(); 
  let location = useLocation(); 

  const [speakerText, setSpeakerText] = React.useState("I am making great progress and becoming healthier with Motifit.");
  const msg = new SpeechSynthesisUtterance();

  const { id, title, role } = location?.state?.workout;
  console.log(id, title, role);

  const speechHandler = (msg) => {
    msg.text = speakerText;
    window.speechSynthesis.speak(msg);
  }

  return (
    <Styles>
      <MotifitTitle>{title}</MotifitTitle>
    
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }} >
      <div style={{ marginLeft: 32, display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
        <Typography sx={{ width: '300' }} variant="h6" >{'Workout move'}</Typography>
        <IconButton>
          <GolfCourseTwoToneIcon sx={{ color: colors.motifitPurple }} />
        </IconButton>
        <Typography variant="h6" >{' 5 points, 20 calories'}</Typography>
      </div>

      
      <div style={{ marginLeft: 20, display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
        <IconButton>
          <InfoOutlinedIcon sx={{ color: colors.motifitPurple }} />
        </IconButton>
        <Typography sx={{ maxWidth: '900px', marginRight: 5 }} variant="subtitle1" >
          {speakerText}{speakerText}{speakerText}{speakerText}
        </Typography>

      </div>
      <img 
        alt="fitness workout move"
        width={500}
        height={500}
        src={ScoreBG} 
        style={{ borderRadius: '15px', marginTop: 11, marginBottom: 11, marginLeft: 200, marginRight: 'auto'}}
      />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column' }} >
        <CountdownCircleTimer
              isPlaying
              duration={6}
              colors={['#9900ef', '#ff6900', '#fcb900', '#7bdcb5', '#eb144c', '#F7B801', '#A30000']}
              colorsTime={[59, 40, 30, 20, 10, 5]}
              onComplete={() => {
                console.log('completed');
                return { shouldRepeat: true };
              }}
            >
              {({ remainingTime }) => <Typography variant='h4'>{remainingTime}</Typography>}
            </CountdownCircleTimer>

        <Typography sx={{ 
          borderRadius: '5px',
          border: '1px solid ' + colors.motifitPurple,
          textAlign: 'center',
          padding: '1px',
          width: 'min-content',
          minWidth: '200px',
          marginTop: '20px',
        }} 
        color={colors.motifitPurple} variant="button">
          Move: {'2'}/{'20'}
        </Typography>

        <Typography sx={{ 
          borderRadius: '5px',
          border: '1px solid ' + colors.motifitPurple,
          textAlign: 'center',
          padding: '1px',
          width: 'min-content',
          minWidth: '200px',
          marginTop: '20px',
        }} 
        color={colors.motifitPurple} variant="button">
          Calories: {'2343'}
        </Typography>

        <Typography sx={{ 
          borderRadius: '5px',
          border: '1px solid ' + colors.motifitPurple,
          textAlign: 'center',
          padding: '1px',
          width: 'min-content',
          minWidth: '200px',
          marginTop: '20px',
          marginBottom: '40px',
        }} 
        color={colors.motifitPurple} variant="button">
          Score: {'972'}
        </Typography>

        <Typography sx={{ 
          borderRadius: '5px',
          border: '1px solid ' + colors.motifitGreen,
          textAlign: 'center',
          padding: '1px',
          width: 'min-content',
          minWidth: '200px',
          marginBottom: '40px',
        }} 
        color={colors.motifitGreen} variant="caption">
          {role}
        </Typography>
        
        <Button onClick={() => history.push('/score')} 
          sx={{ bgcolor: '#006b76', color: 'white', width: '200px', marginLeft: 'auto', marginRight: 'auto'}} variant="contained">
            Finish early</Button>
      </div>
      </div>
      {/* <Button onClick={() => speechHandler(msg)}>Motifit</Button> */}
    </Styles>
  )
}

export default WorkoutInProgress;

const Styles = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: start;
  
`
