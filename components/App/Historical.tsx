import React from 'react'

interface HistoricalProps {
    name?: string
    familyName?: string
    email?: string
}


export const Historical : React.FC<HistoricalProps> = ({name, familyName, email}) => {
  return (
    <div>Historical</div>
  )
}
