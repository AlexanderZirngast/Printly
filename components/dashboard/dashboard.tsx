import { useSession } from '@/lib/auth-client'
import React from 'react'

export default function Dashboard() {

    const { data } = useSession();
  return (
    <div>

        <h1>{data?.user.name}</h1>
    </div>
  )
}
