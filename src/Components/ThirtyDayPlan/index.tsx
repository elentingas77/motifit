import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom"
import MotifitTitle from 'Components/reusable/MotifitTitle'
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import LayersClearOutlinedIcon from '@mui/icons-material/LayersClearOutlined';
import { Box, Button, Grid, Slider, Typography } from '@mui/material';
import DayItem from '../reusable/DayItem';
import colors from '../../constants/colors';
import { automaticallyGenerate, startFromScratch } from 'store/fitness/actions/creators'

const CaloriesSlider = styled(Slider)({
  marginTop: 30,
  color: "#52af77",
  height: 200,
  "& .MuiSlider-track": {
    border: "none"
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit"
    },
    "&:before": {
      display: "none"
    }
  },
  "& .Mui-disabled": {
      color: '#52af77'
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#52af77",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)"
    },
    "& > *": {
      transform: "rotate(45deg)"
    }
  },
});

const ThirtyDayPlan: React.FunctionComponent<{}> = () => {
  let history = useHistory();  

  const thirtyDayPlan = useSelector((state: any) => state.fitness.thirtyDayPlan);
  const dispatch = useDispatch();

  return (
    <Styles>
      <div className='buttonsContainer' >
        <Button 
          sx={{ bgcolor: '#607d8b', width: 'min-content', minWidth: '350px', marginLeft: 'auto', marginRight: 'auto', marginBottom: '10px', marginTop: '10px' }} 
          startIcon={<AutoFixHighOutlinedIcon />} 
          variant="contained"
          size={'small'}
          onClick={() => dispatch(automaticallyGenerate())}
        >Automatically generate</Button>
        <MotifitTitle>30 day plan</MotifitTitle>
        <Button 
          sx={{ bgcolor: '#a1887f', width: 'min-content', minWidth: '350px', marginLeft: 'auto', marginRight: 'auto', marginBottom: '10px', marginTop: '10px' }} 
          startIcon={<LayersClearOutlinedIcon />} 
          variant="contained"
          size={'small'}
          onClick={() => dispatch(startFromScratch())}
        >Start from scratch</Button>
      </div>  



    <Box sx={{ width: "100%", marginTop: 1 }}>
      <Grid container rowSpacing={0.5} columnSpacing={0.5}>
        {thirtyDayPlan.map(({ id, isDone, workoutId, isRestDay }) => {
          return (
            <Grid key={id} item xs={2}>
              <DayItem 
                id={id}
                isDone={isDone}
                workoutId={workoutId}
                isRestDay={isRestDay}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>

    <Typography variant="button" sx={{ textAlign: "center", maginTop: "10", }}>
      
    </Typography>

    
    <Typography sx={{ 
              borderRadius: '5px',
              border: '1px solid ' + colors.motifitPurple,
              textAlign: 'center',
              padding: '1px',
              paddingRight: '5px',
              paddingLeft: '5px',
              width: 'min-content',
              minWidth: '400px',
              marginTop: '20px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }} 
            color={colors.motifitPurple} variant="button">
          Calories burned in 30 days
        </Typography>

    <div style={{ background: colors.motifitPink, borderRadius: '15px', height: '85px', marginTop: '10px' }}>
      <CaloriesSlider
        valueLabelDisplay="on"
        aria-label="pretto slider"
        defaultValue={341}
        min={0}
        max={3532}
        disabled
        />
    </div>

    </Styles>
  )
}

export default ThirtyDayPlan;

const Styles = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: start;
  padding: 20px;

  .buttonsContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  &.-MuiSlider-track: {
    background-color: green;
  }
  
`
