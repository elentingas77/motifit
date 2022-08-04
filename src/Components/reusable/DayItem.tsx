import React from 'react'
import styled from 'styled-components'
import { Button, Checkbox, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useSelector } from 'react-redux';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import MotifitTitle from './MotifitTitle';

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
    id, isDone, workoutId, isRestDay, onClick = () => {} }) => {

    const workouts = useSelector((state: any) => state.fitness.workouts);
    const [workout, setWorkout] = React.useState('');

    const handleWorkoutChange = (event: any) => {
      setWorkout(event?.target?.value);
    };

    const handleIsDoneChange = (event: any) => {
      console.log(event?.taget?.value);
    };

  return (
    <CustomStyle key={id} style={{ backgroundColor: isDone ? '#b2ebf2' : undefined }} >
      <div style={{ display: 'flex', width: '100%', flexDirection: 'row',  justifyContent: 'space-around', marginTop: '12px', marginBottom: '12px', }} >
        <MotifitTitle>
          {id}
        </MotifitTitle>
        <Button disabled={isDone} size='small' onClick={onClick} sx={{ bgcolor: '#9575cd', color: 'white'}} startIcon={<FitnessCenterIcon />} variant="contained">Start</Button>
        <Checkbox onChange={handleIsDoneChange} checked={isDone} color="success" />  
      </div>

      <FormControl variant="standard" sx={{ minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Workout</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={workout}
          onChange={handleWorkoutChange}
          label="Workout"
          size='small'
          disabled={isDone}
        >
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
