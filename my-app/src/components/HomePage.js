import React from 'react'
import PageNavbar from './PageNavbar'
import PageAboutme from './PageAboutme'
import PageSkill from './PageSkill'
import PagePersonalinfo from './PagePersonalinfo'

const HomePage = () => {
  return (
    <div>
      <PageNavbar/>
      <PageAboutme/>
      <PageSkill/>
      <PagePersonalinfo/>
    </div>
  )
}

export default HomePage