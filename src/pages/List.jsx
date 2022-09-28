import React from 'react'
import { useParams } from 'react-router-dom'

export default function ListDemo() {
    const param = useParams()
    const { id } = param
    return (
        <div>列表练习 - {id}</div>
    )
}
