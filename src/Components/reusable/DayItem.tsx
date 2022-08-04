import React from 'react'
import styled from 'styled-components'
import { Button, Checkbox, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import MotifitTitle from './MotifitTitle';
import { markDayAsDone, setWorkoutForDay } from 'store/fitness/actions/creators';
import { useHistory } from "react-router-dom"

interface Props {
  id: any
  isDone: boolean
  workoutId: any
  isRestDay: boolean
  onClick?: () => void
}

const CustomStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 150px;
  align-items: center;
  justify-content: flex-start;
  background: #d9e3f0;
  border-radius: 15px;
`

const DayItem: React.FunctionComponent<Props> = ({ 
    id, isDone, workoutId, onClick = () => {} }) => {

    let history = useHistory();  
    const workouts = useSelector((state: any) => state.fitness.workouts);
    const dispatch = useDispatch();

    const handleWorkoutChange = (event: any) => {
      dispatch(setWorkoutForDay(id, event?.target?.value))
    };

    const handleIsDoneChange = () => {
      dispatch(markDayAsDone(id, !isDone))
    };

  return (
    <CustomStyle key={id} style={{ backgroundColor: isDone ? '#b2ebf2' : undefined }} >
      <div style={{ display: 'flex', width: '100%', flexDirection: 'row',  justifyContent: 'space-around', marginTop: '12px', marginBottom: '12px', }} >
        <MotifitTitle>
          {id}
        </MotifitTitle>
        <Button 
          disabled={isDone || workoutId === 0 || workoutId === null} 
          size='small' 
          onClick={() => history.push('/workout-in-progress/' + workoutId, { workout: workouts.filter(({ id }) => id === workoutId)?.pop()})}
          sx={{ bgcolor: '#9575cd', color: 'white'}} 
          startIcon={<FitnessCenterIcon />} variant="contained"
        >Start</Button>
        <Checkbox onChange={handleIsDoneChange} checked={isDone} color="success" />  
      </div>

      <FormControl variant="standard" sx={{ minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Workout</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={workoutId}
          onChange={handleWorkoutChange}
          label="Workout"
          size='small'
          disabled={isDone}
        >
          <MenuItem key={0} value={0}>Rest Day</MenuItem>
          {workouts.map(({ id, title }) => { 
            return (
              <MenuItem key={id} value={id}>{title}</MenuItem>
            );
          })}
        </Select>
      </FormControl>


    </CustomStyle>
  )
}

export default DayItem;
