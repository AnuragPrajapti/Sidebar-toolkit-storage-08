import React from 'react'
import { useLinkedIn , LinkedIn } from 'react-linkedin-login-oauth2';
// You can use provided image shipped by this package or using your own
import linkedin from 'react-linkedin-login-oauth2/assets/linkedin.png';

const LinkedinContainer = () => {
    // const { linkedInLogin } = useLinkedIn({
    //     clientId: '86vhj2q7ukf83q',
    //     redirectUri: `${window.location.origin}/linkedin`, // for Next.js, you can use `${typeof window === 'object' && window.location.origin}/linkedin`
    //     onSuccess: (code) => {
    //       console.log(code);
    //     },
    //     onError: (error) => {
    //       console.log(error);
    //     },
    //   });
  return (
    <div>
      <LinkedIn
      clientId="776f2p3gmv6web"
      redirectUri={`${window.location.origin}/linkedin`}
      onSuccess={(code) => {
        console.log(code);
      }}
      onError={(error) => {
        console.log(error);
      }}
    >
      {({ linkedInLogin }) => (
        <img
          onClick={linkedInLogin}
          src={linkedin}
          alt="Sign in with Linked In"
          style={{ maxWidth: '180px', cursor: 'pointer' }}
        />
        )}
    </LinkedIn>
      {/* <button onClick={()=>linkedInLogin()} >Quick fill with linkedin</button> */}
     </div>
  )
}

export default LinkedinContainer
