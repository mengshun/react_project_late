import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Detail() {
    const state = useLocation().state || {}
    return (
        <div>详情页 - {state['username']}</div>
    )
}
