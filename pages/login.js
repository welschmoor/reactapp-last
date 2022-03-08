import { firestore, auth, googleProvider } from "../firebase/firebase"


const Login = () => {

  // Google Login
  const signIn = async () => {
    const loginData = await auth.signInWithPopup(googleProvider)

    if (loginData?.additionalUserInfo?.isNewUser) {
      //make user choose username
      const response1 = await firestore.collection("users").where("uid", "==", loginData.user.uid)
      const response2 = await response.get()
      
    }
    console.log(loginData)
  }

  return (
    <div>
      <button onClick={signIn}>Google Sign In </button>
    </div>
  )
}

export default Login