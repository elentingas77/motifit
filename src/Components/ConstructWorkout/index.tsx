import React from 'react'
import styled from 'styled-components'
import { useHistory } from "react-router-dom"
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import MotifitTitle from 'Components/reusable/MotifitTitle';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import colors from '../../constants/colors';
import { Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { setLeftRed, setRightRed } from 'store/constructMyWorkout/actions/creators';

function not(a: readonly number[], b: readonly number[]) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a: readonly number[], b: readonly number[]) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

function union(a: readonly number[], b: readonly number[]) {
  return [...a, ...not(b, a)];
}


const ConstructWorkout: React.FunctionComponent<{}> = () => {
  let history = useHistory();

  const dispatch = useDispatch();
  const rightRed = useSelector((state: any) => state.constructMyWorkout.right);
  const leftRed = useSelector((state: any) => state.constructMyWorkout.left);
  const moves = useSelector((state: any) => state.constructMyWorkout.moves);
  const myWorkout = useSelector((state: any) => state.constructMyWorkout.myWorkout);

  const [checked, setChecked] = React.useState<readonly number[]>([]);
  const [left, setLeft] = React.useState<readonly number[]>(leftRed);
  const [right, setRight] = React.useState<readonly number[]>(rightRed);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const numberOfChecked = (items: readonly number[]) =>
    intersection(checked, items).length;

  const handleToggleAll = (items: readonly number[]) => () => {
    if (numberOfChecked(items) === items.length) {
      setChecked(not(checked, items));
    } else {
      setChecked(union(checked, items));
    }
  };

  const handleCheckedRight = () => {
    dispatch(setRightRed(right.concat(leftChecked)));
    dispatch(setLeftRed(not(left, leftChecked)));

    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    dispatch(setRightRed(not(right, rightChecked)));
    dispatch(setLeftRed(left.concat(rightChecked)));

    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const customList = (title: React.ReactNode, items: readonly number[]) => (
    <Card>
      <CardHeader
        sx={{ px: 2, py: 1, bgcolor: '#ffcdd2' }}
        avatar={
          <Checkbox
            onClick={handleToggleAll(items)}
            checked={numberOfChecked(items) === items.length && items.length !== 0}
            indeterminate={
              numberOfChecked(items) !== items.length && numberOfChecked(items) !== 0
            }
            disabled={items.length === 0}
            inputProps={{
              'aria-label': 'all items selected',
            }}
          />
        }
        title={title}
        subheader={`${numberOfChecked(items)}/${items.length} selected`}
      />
      <Divider />
      <List
        sx={{
          width: 400,
          height: 530,
          bgcolor: colors.darkRed,
          color: 'background.paper',
          overflow: 'auto',
        }}
        dense
        component="div"
        role="list"
      >
        {items.map((value: number) => {
          const labelId = `transfer-list-all-item-${value}-label`;

          return (
            <ListItem
              key={value}
              role="listitem"
              button
              onClick={handleToggle(value)}
            >
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{
                    'aria-labelledby': labelId,
                  }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`${moves.filter(item => item.id === value)?.pop()?.title}`} />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Card>
  );

  return (
    <Styles>
    <MotifitTitle>Construct my workout</MotifitTitle>
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item>{customList('Workout moves list', left)}</Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            onClick={handleCheckedRight}
            disabled={leftChecked.length === 0}
            aria-label="move selected right"
          >
            &gt;
          </Button>
          <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            onClick={handleCheckedLeft}
            disabled={rightChecked.length === 0}
            aria-label="move selected left"
          >
            &lt;
          </Button>
        </Grid>
      </Grid>
      <Grid item>{customList('My chosen moves (auto saved)', right)}</Grid>
    </Grid>

    <Typography sx={{ textAlign: 'center' }} variant="caption">{right.length < 5 ? 'At least 5 moves must be chosen' : ' '}</Typography>
    
    <Button 
        sx={{ bgcolor: '#1a237e', width: 'min-content', minWidth: '400px', marginLeft: 'auto', marginRight: 'auto', marginBottom: '10px', marginTop: '10px' }} 
        startIcon={<SportsGymnasticsIcon />} 
        variant="contained"
        disabled={right.length < 5}
        onClick={() => {
          history.push('/workout-in-progress/' + myWorkout.id, {workout: myWorkout})
        }}
      >Start my custom workout</Button> 

    </Styles>
  );
}

export default ConstructWorkout;

const Styles = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: start;
  
`
