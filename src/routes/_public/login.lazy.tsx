import {createLazyFileRoute, useNavigate} from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_public/login')({
  component: FileRoute,
})
function FileRoute(){
  const navigate = useNavigate();

  const login = () => {
    navigate({
      to: '/home'
    })
  }

  return (
      <div>
        <h1>Log In Route</h1>

        <button onClick={login}>Log In</button>
      </div>
  )
}