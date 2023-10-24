import { Container, Box } from '@mui/material'
import { useState, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import authUtils from '../../utils/authUtils'
import Loading from '../common/Loading'

const AuthLayout = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      const isAuth = await authUtils.isAuthenticated()
      if (!isAuth) {
        setLoading(false)
      } else {
        navigate('/')
      }
    }
    checkAuth()
  }, [navigate])

  return (
    loading ? (
      <Loading fullHeight />
    ) : (
      <Container component='main' maxWidth='xs'>
        <Box sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          height: '100vh'
        }}>
          <div style={{ fontSize: '20px', fontWeight: '700', letterSpacing: '1px'}}>
            Task Management
          </div>
          <Outlet />
        </Box>
      </Container>
    )
  )
}

export default AuthLayout