import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const inviteCode = searchParams.get('inviteCode')

  if (!inviteCode) {
    return NextResponse.json({ error: 'Invite code is required' }, { status: 400 })
  }

  try {
    const response = await fetch(`https://discord.com/api/invites/${inviteCode}?with_counts=true`)
    
    if (!response.ok) {
      throw new Error('Failed to fetch server details')
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching Discord server details:', error)
    return NextResponse.json({ error: 'Failed to fetch server details' }, { status: 500 })
  }
}

