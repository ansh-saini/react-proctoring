import React from 'react'
import { useProctoring } from '../hooks/useProctoring'

type Props = {}

const App = (props: Props) => {
  const proctoring = useProctoring({
    preventCopy: true,
    preventUserSelection: true,
  })

  return <h1>App</h1>
}

export default App
