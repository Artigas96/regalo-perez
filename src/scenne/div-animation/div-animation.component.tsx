import clsx from 'clsx'
import React from 'react'
import { AnimationEffectClass } from '../app'

interface DivAnimationProps {
  stepOn: number
  stepOff: number
  currentStep: number
  animation: AnimationEffectClass
  children: JSX.Element
}

export const DivAnimation: React.FC<DivAnimationProps> = props => {
  const { animation, stepOff, stepOn, currentStep, children } = props
  return (
    <>
      <div className={clsx(animation, (currentStep !== stepOn && currentStep !== stepOff) && 'd-none')}>
        {children}
      </div>
    </>
  )
}