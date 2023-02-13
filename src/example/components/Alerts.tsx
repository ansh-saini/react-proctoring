import React, { useState, useEffect } from 'react'
import type { ProctoringData } from '../../hooks/useProctoring'
import './Alert.css'

const textContent = {
  fullscreen:
    'Looks like your browser is not in full-screen mode. Press the button below to continue.',
  tabFocus: 'You seem to be accessing a different tab. Press the button below to continue.',
} as const

type AlertType = 'fullscreen' | 'tabFocus'

const Alerts = ({ fullScreen, tabFocus }: ProctoringData) => {
  const [open, setOpen] = useState<AlertType | null>(null)

  useEffect(() => {
    if (fullScreen.status === 'off') {
      setOpen('fullscreen')
      return
    }
    if (tabFocus.status === false) {
      setOpen('tabFocus')
      return
    }

    setOpen(null)
  }, [fullScreen.status, tabFocus.status])

  if (!open) return null

  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <h2>{textContent[open]}</h2>
        <button className="close" onClick={fullScreen.trigger}>
          Continue
        </button>
      </div>
    </div>
  )
}

export default Alerts
