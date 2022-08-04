import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useLocation } from "react-router-dom"
import MotifitTitle from 'Components/reusable/MotifitTitle'
import { Alert, Button, IconButton, Snackbar, Typography } from '@mui/material'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import GolfCourseTwoToneIcon from '@mui/icons-material/GolfCourseTwoTone';
import colors from '../../constants/colors'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Rest from '../../assets/images/rest.jpg';
import { addCalories, addScore, addWorkout } from 'store/fitness/actions/creators'

const WorkoutInProgress: React.FunctionComponent<{}> = () => {
  let history = useHistory(); 
  let location = useLocation(); 

  const { id, title, role, workoutInProgress } = location?.state?.workout;

  const moves = useSelector((state: any) => state.fitness.moves);
  const motivationalMessages = useSelector((state: any) => state.fitness.motivationalMessages);
  const dispatch = useDispatch();

  const [currentMoveIndex, setCurrentMoveIndex] = React.useState(0);
  const [currentMove, setCurrentMove] = React.useState<any>(null);
  const [isRestMove, setIsRestMove] = React.useState<boolean>(false);
  const [currentWorkoutId, setCurrentWorkoutId] = React.useState<any>(id);

  
  const [currentCalories, setCurrentCalories] = React.useState(0);
  const [currentScore, setCurrentScore] = React.useState(0);

  const [open, setOpen] = React.useState(false);

  const msg = new SpeechSynthesisUtterance();

  const speechHandler = (text) => {
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  React.useEffect(() => {
    let move = moves?.filter(({ id }) => id === workoutInProgress[currentMoveIndex])?.pop()
    let isRestMove = workoutInProgress[currentMoveIndex] === 0;

    console.log('setting START move: ', move, isRestMove);

    if (move) {
      setIsRestMove(false);
      setCurrentMove(move);
      setCurrentMoveIndex(currentMoveIndex + 1);
      speechHandler(move?.instructions);
    } else if (isRestMove) {
      setCurrentMoveIndex(currentMoveIndex + 1);
      speechHandler('Rest time!');
      setIsRestMove(true)
    } else {
      setIsRestMove(false);
      setCurrentMoveIndex(0);
      setCurrentMove(null);
      setCurrentWorkoutId(null);
      history.push('/score')
    }
  }, [currentWorkoutId]);


  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Styles>
      <MotifitTitle>{title}</MotifitTitle>
    
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ display: 'flex', flexDirection: 'column', width: '900px' }} >
      <div style={{ marginLeft: 32, display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
        <Typography sx={{ width: '300' }} variant="h6" >{isRestMove ? 'Rest Time!' : currentMove?.title}</Typography>
        <IconButton>
          <GolfCourseTwoToneIcon sx={{ color: colors.motifitPurple }} />
        </IconButton>
        {!isRestMove && 
        <Typography variant="h6" >
          {' ' + currentMove?.score + ' points, ' + currentMove?.calories + ' calories'}
        </Typography>}
      </div>

      
      {!isRestMove && <div style={{ marginLeft: 20, display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
        <IconButton>
          <InfoOutlinedIcon sx={{ color: colors.motifitPurple }} />
        </IconButton>
        <Typography sx={{ maxWidth: '900px', marginRight: 5 }} variant="subtitle1" >
          {currentMove?.instructions}
        </Typography>
      </div>}

      <img 
        alt="fitness workout move"
        width={480 * 1.3}
        height={270 * 1.3}
        src={ currentMove?.imagePath && !isRestMove ? require(`../../assets/images/${currentMove?.imagePath}`) : Rest} 
        style={{ borderRadius: '15px', marginTop: 11, marginBottom: 11, marginLeft: 100, marginRight: 'auto'}}
      />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column' }} >
        <CountdownCircleTimer
              isPlaying
              duration={6}
              colors={['#9900ef', '#ff6900', '#fcb900', '#7bdcb5', '#eb144c', '#F7B801', '#A30000']}
              colorsTime={[59, 40, 30, 20, 10, 5]}
              onComplete={() => {
                
                if (!isRestMove) {
                  setCurrentCalories(currentCalories + currentMove?.calories);
                  setCurrentScore(currentScore + currentMove?.score);

                  dispatch(addCalories(currentMove?.calories));
                  dispatch(addScore(currentMove?.score));
                }

                let move = moves?.filter(({ id }) => id === workoutInProgress[currentMoveIndex])?.pop()
                let isRest = workoutInProgress[currentMoveIndex] === 0;

                console.log('setting next move: ', move, isRest);

                if (move) {
                  setIsRestMove(false);
                  setCurrentMove(move);
                  setCurrentMoveIndex(currentMoveIndex + 1);
                  setOpen(true);
                  speechHandler(motivationalMessages[(currentMoveIndex) % 8 ]);
                  speechHandler(move?.instructions);
                  return { shouldRepeat: true };
                } else if (isRest) {
                  setCurrentMoveIndex(currentMoveIndex + 1);
                  setIsRestMove(true)
                  speechHandler('Rest time!');
                  setOpen(true);
                  speechHandler(motivationalMessages[(currentMoveIndex) % 8 ]);
                  return { shouldRepeat: true };
                } else {
                  setIsRestMove(false);
                  setCurrentMoveIndex(0);
                  setCurrentMove(null);
                  setCurrentWorkoutId(null);
                  setCurrentCalories(0);
                  setCurrentScore(0);
                  dispatch(addWorkout());
                  history.push('/score')
                }
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
          Move: {currentMoveIndex}/{workoutInProgress.length}
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
          Calories: {currentCalories}
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
          Score: {currentScore}
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
        
        <Button onClick={() => {

          if (currentMoveIndex > 1) {
            dispatch(addWorkout());
          }

          history.push('/score');
        }} 
          sx={{ bgcolor: '#006b76', color: 'white', width: '200px', marginLeft: 'auto', marginRight: 'auto'}} variant="contained">
            Finish early</Button>
      </div>
      </div>
      {/* <Button onClick={() => speechHandler(msg)}>Motifit</Button> */}

      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {motivationalMessages[(currentMoveIndex - 1) % 8 ]}
        </Alert>
      </Snackbar>
    
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
