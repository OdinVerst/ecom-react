import Login from '../../components/auth/login/Login';
import Registration from '../../components/auth/registration/Registration';
import {SingInWrapper} from './Singin.style';

const SingIn = () => (
    <div className="login-page">
        <h1>SingIn</h1>
        <SingInWrapper>
            <Login/>
            <Registration/>
        </SingInWrapper>
    </div>
);

export default SingIn;
