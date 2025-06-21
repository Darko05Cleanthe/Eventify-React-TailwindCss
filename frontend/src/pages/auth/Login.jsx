import '/src/styles/Register.css'
import { Link } from 'react-router-dom'


function Login() {

    return <section className="register">
    <p className="hiddentext">Sign in page</p>
    <div className="intro">
        <img src="/src/assets/Logo.png" alt="LOGO" />
        <p className='text_intro'>Discover tailored<br></br>events.<br></br>
        Sign up for personalized<br></br>recommendations<br></br>today!
        </p>
    </div>
    <div className='input_preform'>
    <div className='input_enter'>
        <p>Login</p>
        <a href="#"><img src="/src/assets/logo-google.png" alt="Logo Google" />Sign up with Google</a>
        <a href="#"><img src="/src/assets/logo-facebook.png" alt="Logo Facebook" />Sign up with Facebook</a>
    </div>
    <hr /><p className='or'>OR</p>
    <hr className='low_hr'/>
    <form action="get" method='' className='formulaire'>
        <label htmlFor="email">E-mail Adress</label>
        <input type="email" name='email' id='email' placeholder='Enter your e-mail' />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" placeholder='Enter password' />
    </form>
    </div>
    <button className='click'>Login</button>
    <h4>Don't have an account ? <Link to="/register">Log in</Link></h4>
    </section>
}

export default Login