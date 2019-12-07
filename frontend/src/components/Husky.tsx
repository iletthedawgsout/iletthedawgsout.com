import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { incrementCounter } from '../redux/actions'

interface Props {
  onPress: () => any;
}

export const Husky = (props: Props) => {
  const dispatch = useDispatch()
  const onClick = useCallback(
    () => dispatch(incrementCounter()),
    [dispatch]
  )

  return (<img onClick={onClick} src={'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2019/04/25110707/Dubs-II-51-1024x576.jpg'}></img>)
}
