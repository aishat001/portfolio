import React from 'react'

const PortfolioList = ({title, active, id, setSelected } : any) => {
  return (
    <li className={active ? "active" : ""} onClick={() => setSelected(id)}>
        {title}
    </li>
  )
}

export default PortfolioList
