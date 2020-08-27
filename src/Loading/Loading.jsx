import './Loading.less'

import React from 'react'

import { loading } from '../services/content'

export default function Loading() {
  return (
    <h3 className="Loading">
      {loading}
    </h3>
  )
}
