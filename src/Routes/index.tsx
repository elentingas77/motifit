import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Workouts from '../Components/Workouts'
import Challenges from '../Components/Challenges'
import ThirtyDayPlan from '../Components/ThirtyDayPlan'
import ConstructWorkout from '../Components/ConstructWorkout'
import Score from '../Components/Score'
import WorkoutInProgress from 'Components/WorkoutInProgress'
import ChallengeInProgress from 'Components/ChallengeInProgress'

const Routes: React.FunctionComponent = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to={{ pathname: '/workouts' }} />
      </Route>
      <Route path="/workouts">
        <Workouts />
      </Route>
      <Route path="/30-day-plan">
        <ThirtyDayPlan />
      </Route>
      <Route path="/challenges">
        <Challenges />
      </Route>
      <Route path="/score">
        <Score />
      </Route>
      <Route path="/construct-workout">
        <ConstructWorkout />
      </Route>
      <Route path="/workout-in-progress/:id">
        <WorkoutInProgress />
      </Route>
      <Route path="/challenge-in-progress/:id">
        <ChallengeInProgress />
      </Route>
    </Switch>
  )
}

export default Routes
