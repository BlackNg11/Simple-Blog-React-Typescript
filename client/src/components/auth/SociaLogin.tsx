import React from 'react'
import { useDispatch } from 'react-redux'
import { GoogleLogin, GoogleLoginResponse } from 'react-google-login-lite';

import { googleLogin } from '../../redux/actions/authAction'

const SocialLogin = () => {
  const dispatch = useDispatch()

  const onSuccess = (googleUser: GoogleLoginResponse) => {
    const id_token = googleUser.getAuthResponse().id_token;


    dispatch(googleLogin(id_token))
  }



  return (
    <div className="my-2">
      <GoogleLogin
        client_id='522728779551-kdeh5botd3eijm0b3pjab7im34ujq15l.apps.googleusercontent.com'
        cookiepolicy='single_host_origin'
        onSuccess={onSuccess}
      />
    </div>
  )
}

export default SocialLogin