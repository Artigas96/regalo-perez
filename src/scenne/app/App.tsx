import React from 'react';
import './App.scss';
import Snowfall from 'react-snowfall'
import { DivAnimation } from '../div-animation';

export enum AnimationEffectClass {
  on = 'tracking-in-expand',
  off = 'tracking-out-contract'
}

export const App: React.FC = props => {

  const [step, setStep] = React.useState<number>(1)
  const [animation, setAnimation] = React.useState<AnimationEffectClass>(AnimationEffectClass.on)

  const limitButton = 9

  React.useEffect(() => {
    if (step % 2 === 0) {
      setAnimation(AnimationEffectClass.off)
      setTimeout(() => {
        setStep(step + 1)
        setAnimation(AnimationEffectClass.on)
        return true
      }, 1450)
    }
  }
    , [step])

  return (
    <>
      <div className='all-page img-bg'>
        <div>
          <DivAnimation
            stepOn={1}
            stepOff={2}
            currentStep={step}
            animation={animation}
            children={
              <>
                <h1 className='text-white  d-flex align-items-center justify-content-center'>Felicidadeeeees !!!!</h1>
                <label className='text-white d-flex align-items-center justify-content-center'>Esto es un detallito</label>
                <label className='text-white d-flex align-items-center justify-content-center'>Espero que te gusteee!!!!</label>
              </>
            }
          />
          <DivAnimation
            stepOn={3}
            stepOff={4}
            currentStep={step}
            animation={animation}
            children={
              <>
                <div className='text-white'>
                  <label className='d-flex align-items-center justify-content-center'>Gracias por estar a mi lado</label>
                  <label className='d-flex align-items-center justify-content-center'>Eres super buena persona</label>
                  <label className='d-flex align-items-center justify-content-center'>y sigue siendo asi</label>
                  
                </div>
              </>
            }
          />
          <DivAnimation
            stepOn={5}
            stepOff={6}
            currentStep={step}
            animation={animation}
            children={
              <>
                <div className='text-white'>
                  <label className='d-flex align-items-center justify-content-center'>Creo que ya sabes me es dificil</label>
                  <label className='d-flex align-items-center justify-content-center'>expresarme con palabras</label>
                  <label className='d-flex align-items-center justify-content-center'>Te mando un abrazo enorme</label>
                </div>
              </>
            }
          />
          <DivAnimation
            stepOn={7}
            stepOff={8}
            currentStep={step}
            animation={animation}
            children={
              <>
                <div className='text-white'>
                  <label className='d-flex align-items-center justify-content-center'>Espero que pronto</label>
                  <label className='d-flex align-items-center justify-content-center'>nos volvamos a ver</label>
                  <label className='d-flex align-items-center justify-content-center'>Muchas gracias</label>
                  <label className='d-flex align-items-center justify-content-center'>por la compañia los dias que</label>
                  <label className='d-flex align-items-center justify-content-center'>estuve por ahi</label>
                </div>
              </>
            }
          />
          <DivAnimation
            stepOn={9}
            stepOff={10}
            currentStep={step}
            animation={animation}
            children={
              <>
                <h1 className='text-white d-flex justify-content-center align-items-center'>Llego el final {'<3'}</h1>
                <label className='text-white d-flex align-items-center justify-content-center'>Espero que te haya gustado.</label>
                <label className='text-white d-flex align-items-center justify-content-center'>Te quiero {'<3'}</label>
              </>
            }
          />
        </div>
        {
          step < limitButton &&
          <>
            <button className='btn btn-chrismas mt-4' onClick={() => setStep(step + 1)}>Sigue leyendo</button>
          </>
        }
      </div>
    </>
  )
}

