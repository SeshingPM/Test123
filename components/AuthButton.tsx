"use client"

import { Button } from '@/components/ui/button'

export default function AuthButton() {
  const handleAuth = () => {
    console.log('Authentication functionality is currently disabled')
    // When ready to implement authentication, replace the console.log with actual auth logic
  }

  return (
    <Button onClick={handleAuth}>
      Sign In (Disabled)
    </Button>
  )
}