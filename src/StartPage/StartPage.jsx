import './StartPage.less'

import React from 'react'

import { startPage } from '../services/content'

export default function StartPage() {
  return (
    <div className="Page StartPage">
      <div 
        className="StartPage__text" 
        dangerouslySetInnerHTML={{ __html: startPage }} />
    </div>
  )
}
