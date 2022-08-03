import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom"
import MotifitTitle from 'Components/reusable/MotifitTitle'
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import LayersClearOutlinedIcon from '@mui/icons-material/LayersClearOutlined';
import { Box, Button, Grid, Slider, Typography } from '@mui/material';
import DayItem from '../reusable/DayItem';
import colors from '../../constants/colors';

export const days: any = [
  {
    id: 1,
    isDone: true,
    workoutId: null,
    isRestDay: false,
  },
  {
    id: 2,
    isDone: false,
    workoutId: null,
    isRestDay: false,
  },
  {
    id: 3,
    isDone: false,
    workoutId: null,
    isRestDay: false,
  },
  {
    id: 4,
    isDone: false,
    workoutId: null,
    isRestDay: false,
  },
  {
    id: 5,
    isDone: false,
    workoutId: null,
    isRestDay: false,
  },
  {
    id: 6,
    isDone: false,
    workoutId: null,
    isRestDay: false,
  },
  {
    id: 7,
    isDone: false,
    workoutId: null,
    isRestDay: false,
  },
  {
    id: 8,
    isDone: false,
    workoutId: null,
    isRestDay: false,
  },
  {
    id: 9,
    isDone: false,
    workoutId: null,
    isRestDay: false,
  },
  {
    id: 10,
    isDone: false,
    workoutId: null,
    isRestDay: false,
  },
  {
    id: 11,
    isDone: false,
    workoutId: null,
    isRestDay: false,
  },
  {
    id: 12,
    isDone: false,
    workoutId: null,
    isRestDay: false,
  },
  {
    id: 13,
    isDone: false,
    workoutId: null,
    isRestDay: false,
  },
  {
    id: 14,
    isDone: false,
    workoutId: null,
    isRestDay: false,
  },
  {
    id: 15,
    isDone: false,
    workoutId: null,
    isRestDay: false,
  },
  {
    id: 16,
    isDone: false,
    workoutId: null,
    isRestDay: false,
  },
  {
    id: 17,
    isDone: false,
    workoutId: null,
    isRestDay: false,
  },
  {
    id: 18,
    isDone: false,
    workoutId: null,
    isRestDay: false,
  },
  {
    id: 19,
    isDone: false,
    workoutId: null,
    isRestDay: false,
  },
  {
    id: 20,
    isDone: false,
    workoutId: null,
    isRestDay: false,
  },
  {
    id: 21,
    isDone: false,
    workoutId: null,
    isRestDay: false,
  },
  {
    id: 22,
    isDone: false,
    workoutId: null,
    isRestDay: false,
  },
  {
    id: 23,
    isDone: false,
    workoutId: null,
    isRestDay: false,
  },
  {
    id: 24,
    isDone: false,
    workoutId: null,
    isRestDay: false,
  },
  {
    id: 25,
    isDone: false,
    workoutId: null,
    isRestDay: false,
  },
  {
    id: 26,
    isDone: false,
    workoutId: null,
    isRestDay: false,
  },
  {
    id: 27,
    isDone: false,
    workoutId: null,
    isRestDay: false,
  },
  {
    id: 28,
    isDone: false,
    workoutId: null,
    isRestDay: false,
  },
  {
    id: 29,
    isDone: false,
    workoutId: null,
    isRestDay: false,
  },
  {
    id: 30,
    isDone: false,
    workoutId: null,
    isRestDay: false,
  },
];

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

const ThirtyDayPlan: React.FunctionComponent<{}> = ({ }) => {
  let history = useHistory();  

  return (
    <Styles>
      <div className='buttonsContainer' >
        <Button 
          sx={{ bgcolor: '#607d8b', width: 'min-content', minWidth: '350px', marginLeft: 'auto', marginRight: 'auto', marginBottom: '10px', marginTop: '10px' }} 
          startIcon={<AutoFixHighOutlinedIcon />} 
          variant="contained"
          size={'small'}
        >Automatically generate</Button>
        <MotifitTitle>30 day plan</MotifitTitle>
        <Button 
          sx={{ bgcolor: '#a1887f', width: 'min-content', minWidth: '350px', marginLeft: 'auto', marginRight: 'auto', marginBottom: '10px', marginTop: '10px' }} 
          startIcon={<LayersClearOutlinedIcon />} 
          variant="contained"
          size={'small'}
        >Start from scratch</Button>
      </div>  



    <Box sx={{ width: "100%", marginTop: 1 }}>
      <Grid container rowSpacing={0.5} columnSpacing={0.5}>
        {days.map(({ id, isDone, workoutId, isRestDay }) => {
          return (
            <Grid item xs={2}>
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

export default connect(mapStateToProps, mapDispatchToProps)(ThirtyDayPlan)

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
