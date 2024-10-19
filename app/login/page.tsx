import AuthButton from '@/components/AuthButton'

export default function LoginPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <p className="mb-4">Authentication is currently disabled.</p>
      <AuthButton />
    </div>
  )
}