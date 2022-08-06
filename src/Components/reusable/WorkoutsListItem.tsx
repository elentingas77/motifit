import React from 'react'
import styled from 'styled-components'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Button, IconButton, Tooltip, Typography } from '@mui/material';
import colors from '../../constants/colors';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { useSelector } from 'react-redux';

interface Props {
  id: any
  title: string
  description: string
  role: string
  calories: number
  imagePath: string
  workoutInProgress: any
  onClick?: () => void
}

const CustomStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 500px;
  background-color: #c8e6c9;
  border-radius: 15px;
  margin: 5px;
  padding: 10px;
  align-items: center;
  justify-content: flex-start;

`

const WorkoutsListItem: React.FunctionComponent<Props> = ({ 
    id, title, description, role, calories, imagePath, workoutInProgress, onClick = () => {} }) => {

      
  const moves = useSelector((state: any) => state.fitness.moves);

  const getCaloriesForWorkout = () => {
    const result = workoutInProgress?.reduce(
      (acc, moveId) => {
      let currentMove = moves.filter(({ id }) => id === moveId)?.pop()

      if (currentMove) {
        return acc + currentMove?.calories;
      }
      return acc
      },
      0
    );

    return result;
  }

  return (
    <CustomStyle key={id}>
      <Typography variant="body1">
        {title}
        <Tooltip title={"Focus areas: " + description}>
          <IconButton>
            <InfoOutlinedIcon sx={{ color: colors.motifitPink }} />
          </IconButton>
        </Tooltip>
        </Typography>
        <Typography sx={{ 
              borderRadius: '5px',
              border: '1px solid ' + colors.motifitPurple,
              textAlign: 'center',
              padding: '1px',
              paddingRight: '5px',
              paddingLeft: '5px',
            }} 
            color={colors.motifitPurple} variant="caption">
          {role} 
        </Typography>
        <img
          src={require(`../../assets/images/${imagePath}`)}
          alt={title}
          height={"250px"}
          width={"250px"}
          loading="lazy"
          style={{ borderRadius: '50%', marginTop: 11 }}
        />
        
      <Typography variant="overline" gutterBottom component="div">
        {getCaloriesForWorkout()} Calories
      </Typography>

      <Button onClick={onClick} sx={{ bgcolor: colors.motifitPurple }} startIcon={<FitnessCenterIcon />} variant="contained">Start</Button>

    </CustomStyle>
  )
}

export default WorkoutsListItem;
