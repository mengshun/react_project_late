import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Home() {

    const [a, b] = useSearchParams()
    const id = a.get('id')

    return (
        <div>首页好看吗 - {id}</div>
    )
}
