import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { AppBar, Toolbar, IconButton, Typography, FormControl, MenuItem, Select } from "@mui/material";
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import FitnessCenterRoundedIcon from '@mui/icons-material/FitnessCenterRounded';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import StarBorderPurple500RoundedIcon from '@mui/icons-material/StarBorderPurple500Rounded';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import EngineeringIcon from '@mui/icons-material/Engineering';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarRateIcon from '@mui/icons-material/StarRate';
import colors from '../../constants/colors';
import { setRole } from "store/fitness/actions/creators";

const Home: React.FunctionComponent<{ children: any }> = ({ children }) => {
  let history = useHistory();
  let location = useLocation();
  const role = useSelector((state: any) => state.fitness.role);
  const dispatch = useDispatch();

  const handleFitnessLevelChange = (event: any) => {
    dispatch(setRole(event.target.value as string));
  };

  React.useEffect(() => {}, []);

  const isTextInUrl = (text) => {
    return location.pathname.indexOf(text) > -1;
  }

  return (
    <Styles>
      <Box>
        <AppBar position="static" sx={{ bgcolor: colors.motifitGreen }}>
          <Toolbar>
            <IconButton onClick={() => history.push('/')}>
              <SportsGymnasticsIcon style={{ color: "white" }} />
            </IconButton>
            <Typography
            sx={{
              mr: 2,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MOTIFIT
          </Typography>
          <Box sx={{ color: 'white', marginLeft: 'auto', width: 200 }}>
            <FormControl fullWidth sx={{ m: 1, minWidth: 160, color: 'white' }} size="small">
              <Select
                id="fitness-level-select"
                value={role}
                onChange={handleFitnessLevelChange}
              >
                <MenuItem value={"Beginner"}>
                  <Typography variant="caption">Beginner</Typography>
                  <IconButton>
                    <StarBorderPurple500Icon fontSize="small" />
                  </IconButton>
                </MenuItem>
                <MenuItem value={"Intermediate"}>
                  <Typography variant="caption">Intermediate</Typography>
                  <IconButton>
                    <StarHalfIcon fontSize="small" />
                  </IconButton>
                </MenuItem>
                <MenuItem value={"Expert"}>
                  <Typography variant="caption">Expert</Typography>
                  <IconButton>
                    <StarRateIcon fontSize="small" />
                  </IconButton>
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <div className="view">
        <div
          style={{ width: 250, backgroundColor: '#3e2723' }}
        >
          <Divider />
          <List sx={{ color: "white" }}>
              <ListItem disablePadding>
                <ListItemButton onClick={() => history.push('/workouts')}>
                  <ListItemIcon>
                    <FitnessCenterRoundedIcon sx={{ color: isTextInUrl('/workouts') ? colors.motifitGreen : "white" }} />
                  </ListItemIcon>
                  <ListItemText primary={'Workouts'} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => history.push('/30-day-plan')}>
                  <ListItemIcon>
                    <CalendarMonthRoundedIcon sx={{ color: isTextInUrl('/30-day-plan') ? colors.motifitGreen : "white" }} />
                  </ListItemIcon>
                  <ListItemText primary={'30 Day Plan'} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => history.push('/challenges')}>
                  <ListItemIcon>
                    <EmojiEventsRoundedIcon sx={{ color: isTextInUrl('/challenges') ? colors.motifitGreen : "white" }} />
                  </ListItemIcon>
                  <ListItemText primary={'Challenges'} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => history.push('/score')}>
                  <ListItemIcon>
                    <StarBorderPurple500RoundedIcon sx={{ color: isTextInUrl('/score') ? colors.motifitGreen : "white" }} />
                  </ListItemIcon>
                  <ListItemText primary={'Score'} />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <ListItemButton onClick={() => history.push('/construct-workout')}>
                  <ListItemIcon>
                    <EngineeringIcon sx={{ color: isTextInUrl('/construct-workout') ? colors.motifitGreen : "white" }} />
                  </ListItemIcon>
                  <ListItemText primary={'Construct My Workout'} />
                </ListItemButton>
              </ListItem>
          </List>
        </div>
        <div className="page">
          {children}
        </div>
      </div>
    </Styles>
  );
};

export default Home;

const Styles = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;

  .view {
    display: flex;
    flex-direction: row;
    flex: 1;
  }

  .page {
    display: flex;
    flex-direction: row;
    flex: 1;
  }

`;
