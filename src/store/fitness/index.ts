import { Constants } from './actions/types'
import { Action } from '../Action.model'
import { challenges } from '../../data/challenges'
import { moves } from '../../data/moves'
import { workouts } from '../../data/workouts'

export interface State {
  workouts: Array<any>
  challenges: Array<any>
  role: string
  thirtyDayPlan: Array<any>
  feedback: any
  healthBenefits: Array<string>
  motivationalMessages: Array<string>
  moves: Array<any>
  caloriesBurnedThirtyDays: number
  caloriesToBurnThirtyDays: number
}

export const initialState: State = {
  workouts: workouts,
  challenges: challenges,
  role: 'Beginner',
  thirtyDayPlan: [
    {
      id: 1,
      isDone: false,
      workoutId: null,
    },
    {
      id: 2,
      isDone: false,
      workoutId: null,
    },
    {
      id: 3,
      isDone: false,
      workoutId: null,
    },
    {
      id: 4,
      isDone: false,
      workoutId: null,
    },
    {
      id: 5,
      isDone: false,
      workoutId: null,
    },
    {
      id: 6,
      isDone: false,
      workoutId: null,
    },
    {
      id: 7,
      isDone: false,
      workoutId: null,
    },
    {
      id: 8,
      isDone: false,
      workoutId: null,
    },
    {
      id: 9,
      isDone: false,
      workoutId: null,
    },
    {
      id: 10,
      isDone: false,
      workoutId: null,
    },
    {
      id: 11,
      isDone: false,
      workoutId: null,
    },
    {
      id: 12,
      isDone: false,
      workoutId: null,
    },
    {
      id: 13,
      isDone: false,
      workoutId: null,
    },
    {
      id: 14,
      isDone: false,
      workoutId: null,
    },
    {
      id: 15,
      isDone: false,
      workoutId: null,
    },
    {
      id: 16,
      isDone: false,
      workoutId: null,
    },
    {
      id: 17,
      isDone: false,
      workoutId: null,
    },
    {
      id: 18,
      isDone: false,
      workoutId: null,
    },
    {
      id: 19,
      isDone: false,
      workoutId: null,
    },
    {
      id: 20,
      isDone: false,
      workoutId: null,
    },
    {
      id: 21,
      isDone: false,
      workoutId: null,
    },
    {
      id: 22,
      isDone: false,
      workoutId: null,
    },
    {
      id: 23,
      isDone: false,
      workoutId: null,
    },
    {
      id: 24,
      isDone: false,
      workoutId: null,
    },
    {
      id: 25,
      isDone: false,
      workoutId: null,
    },
    {
      id: 26,
      isDone: false,
      workoutId: null,
    },
    {
      id: 27,
      isDone: false,
      workoutId: null,
    },
    {
      id: 28,
      isDone: false,
      workoutId: null,
    },
    {
      id: 29,
      isDone: false,
      workoutId: null,
    },
    {
      id: 30,
      isDone: false,
      workoutId: null,
    },
  ],
  caloriesBurnedThirtyDays: 0,
  caloriesToBurnThirtyDays: 0,
  feedback: {
    completedWorkouts: 0,
    completedChallenges: 0,
    calories: 0,
    score: 0,
  },
  healthBenefits: [
    // source: https://medlineplus.gov/benefitsofexercise.html
    'Regular exercise and physical activity may help you control your weight. Along with diet, exercise plays an important role in controlling your weight and preventing obesity. To maintain your weight, the calories you eat and drink must equal the energy you burn. To lose weight, you must use more calories than you eat and drink.',
    'Regular exercise and physical activity may reduce your risk of heart diseases. Exercise strengthens your heart and improves your circulation. The increased blood flow raises the oxygen levels in your body. This helps lower your risk of heart diseases such as high cholesterol, coronary artery disease, and heart attack.',
    'Regular exercise and physical activity may help your body manage blood sugar and insulin levels. Exercise can lower your blood sugar level and help your insulin work better. This can cut down your risk for metabolic syndrome and type 2 diabetes. And if you already have one of those diseases, exercise can help you to manage it.',
    'Regular exercise and physical activity may help you quit smoking. Exercise may make it easier to quit smoking by reducing your cravings and withdrawal symptoms. It can also help limit the weight you might gain when you stop smoking.',
    'Regular exercise and physical activity may improve your mental health and mood. During exercise, your body releases chemicals that can improve your mood and make you feel more relaxed. This can help you deal with stress and reduce your risk of depression.',
    'Regular exercise and physical activity may help keep your thinking, learning, and judgment skills sharp as you age. Exercise stimulates your body to release proteins and other chemicals that improve the structure and function of your brain.',
    'Regular exercise and physical activity may strengthen your bones and muscles. Regular exercise can help kids and teens build strong bones. Later in life, it can also slow the loss of bone density that comes with age. Doing muscle-strengthening activities can help you increase or maintain your muscle mass and strength.',
    'Regular exercise and physical activity may reduce your risk of some cancers, including colon, breast , uterine, and lung cancer.',
    'Regular exercise and physical activity may improve your sleep. Exercise can help you to fall asleep faster and stay asleep longer.',
    'Regular exercise and physical activity may increase your chances of living longer. Studies show that physical activity can reduce your risk of dying early from the leading causes of death, like heart disease and some cancers.',
  ],
  motivationalMessages: [
    'You are doing so great!',
    'Amazing job!',
    'Hard work pays off!',
    'You are so brave!',
    'Keep it up!',
    'Do not give up!',
    'Keep up the great work!',
    'You are unstoppable!',
  ],
  moves: moves,
}

const getCaloriesForWorkout = (workout, movesList) => {
  const result = workout?.workoutInProgress?.reduce(
    (acc, moveId) => {
    let currentMove = movesList.filter(({ id }) => id === moveId)?.pop()

    if (currentMove) {
      return acc + currentMove?.calories;
    }
    return acc
    },
    0
  );

  return result;
}

const calculateCaloriesToBurn = (state, plan): number => {
  let workouts = [...state.workouts]

  const result = plan?.reduce(
    (acc, { workoutId }) => {
    let currentWorkout = workouts.filter((item) => item.id === workoutId)?.pop()

    if (currentWorkout) {
      return acc + getCaloriesForWorkout(currentWorkout, [...state.moves]);
    }
    return acc
    },
    0
  );

  return result;
}

const calculateCaloriesBurned = (state, plan): number => {
  let workouts = [...state.workouts]

  const result = plan?.reduce(
    (acc, { workoutId, isDone }) => {
    let currentWorkout = workouts.filter((item) => item.id === workoutId && isDone)?.pop()

    if (currentWorkout) {
      return acc + getCaloriesForWorkout(currentWorkout, [...state.moves]);
    }
    return acc
    },
    0
  );

  return result;
}

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case Constants.SET_ROLE:
      let beginnerWorkouts = [...state.workouts].filter((item) => item.role === 'Beginner');
      let intermediateWorkouts = [...state.workouts].filter((item) => item.role === 'Intermediate');
      let expertWorkouts = [...state.workouts].filter((item) => item.role === 'Expert');

      let newWorkoutsList: any = [];

      if (action.role === 'Beginner') {
        newWorkoutsList = [...beginnerWorkouts, ...intermediateWorkouts, ...expertWorkouts]
      } else if (action.role === "Intermediate") {
        newWorkoutsList = [...intermediateWorkouts, ...expertWorkouts, ...beginnerWorkouts]
      } else {
        newWorkoutsList = [...expertWorkouts, ...intermediateWorkouts, ...beginnerWorkouts]
      }

      return { ...state, role: action.role, workouts: newWorkoutsList}
    case Constants.START_FROM_SCRATCH:
      return { ...state, thirtyDayPlan: [...initialState.thirtyDayPlan],
        caloriesToBurnThirtyDays: 0,
        caloriesBurnedThirtyDays: 0
      }
    case Constants.AUTOMATICALLY_GENERATE:
      let roleWorkouts = [...state.workouts].filter((wo) => {
        return wo.role === state.role
      })

      let tripleWorkouts = [...roleWorkouts, ...roleWorkouts, ...roleWorkouts].slice(0, 30).map((item, index) => {
        if (index === 14)
          return 0;
        return item.id;
      });

      let autoPlan = [...initialState.thirtyDayPlan].map(({ id }, index) => {
        return {
          id,
          isDone: false,
          workoutId: tripleWorkouts[index],
        }
      });

      let res6 = calculateCaloriesToBurn(state, autoPlan);

      return { ...state, thirtyDayPlan: autoPlan, 
        caloriesToBurnThirtyDays: res6,
        caloriesBurnedThirtyDays: 0,
      }
    case Constants.MARK_DAY_AS_DONE:
      let newPlan = [...state.thirtyDayPlan ]?.
        map(({ id, isDone, workoutId }) => {
          if (id === action.day) {
            return {
              id,
              isDone: action.isDone,
              workoutId,
            }
          } else {
            return {
              id,
              isDone,
              workoutId,
            }
          }
        });

      
      let res3 = calculateCaloriesToBurn(state, newPlan);
      let res4 = calculateCaloriesBurned(state, newPlan);

      return { ...state, 
          thirtyDayPlan: [...newPlan ], 
          caloriesToBurnThirtyDays: res3,
          caloriesBurnedThirtyDays: res4,
        }
    case Constants.SET_WORKOUT_FOR_DAY:
      let newPlan2 = [...state.thirtyDayPlan ]?.
        map(({ id, isDone, workoutId }) => {
          if (id === action.day) {
            return {
              id,
              isDone,
              workoutId: action.workoutId,
            }
          } else {
            return {
              id,
              isDone,
              workoutId,
            }
          }
        });

      let res1 = calculateCaloriesToBurn(state, newPlan2);
      let res2 = calculateCaloriesBurned(state, newPlan2);

      return { ...state, thirtyDayPlan: [...newPlan2 ],
        caloriesToBurnThirtyDays: res1,
        caloriesBurnedThirtyDays: res2
      }
    case Constants.ADD_CALORIES:
      return { ...state, feedback: { ...state.feedback, calories: state.feedback.calories + action.calories }}
    case Constants.ADD_SCORE:
      return { ...state, feedback: { ...state.feedback, score: state.feedback.score + action.score }}
    case Constants.ADD_WORKOUT:
      return { ...state, feedback: { ...state.feedback, completedWorkouts: state.feedback.completedWorkouts + 1 }}
    case Constants.ADD_CHALLENGE:
      return { ...state, feedback: { ...state.feedback, completedChallenges: state.feedback.completedChallenges + 1 }}
    default:
      return state
  }
}
