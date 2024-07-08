import { useState } from 'react'
import Hero from './components/Hero'
import Generator from './components/Generator'
import Workout from './components/Workout'
import { generateWorkout } from './utils/function'


function App() {
  const [workout, setWorkout] = useState(null)
  const [poison, setPoison] = useState('individual')
  const [muscles, setMuscles] = useState([])
  const [goal, setGoal] = useState('strength_power')

  function updateWorkout(){
    console.log(muscles.length);
    if (muscles.length < 1){
      console.log("Line 16 hit!")
      return; 
    }
    let newWorkout = generateWorkout({poison, muscles, goal})
    console.log(newWorkout)
    setWorkout(newWorkout);

    window.location.href = '#workout'
  }

  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r 
    from-slate-800 to-slate-950 text-white text-sm sm:text-base'>
    <Hero/>
    <Generator 
      poison={poison}
      setPoison={setPoison}
      muscles={muscles}
      setMuscles={setMuscles}
      goal={goal}
      setGoal={setGoal}
      updateWorkout={updateWorkout}
    />
    {workout && (<Workout workout={workout}/>)}
    </main>
  )
}

export default App
