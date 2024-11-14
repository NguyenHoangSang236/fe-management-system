import React, { useCallback } from 'react';
import TextInput from '../../common-components/TextInput';
import useStates from '../../utils/hooks/useStates';
import Button from '../../common-components/Button';

function LoginPage() {
    const [states, setStates] = useStates({
        username: '',
        password: '',
    });

    const handleLogin = useCallback(
        () => {
            alert('Login');
        },
        []
    )

    return (
        <div style={{padding: '50px'}}>
            <h2>Login Page</h2>
            <TextInput 
                placeholder="Enter your username here" 
                value={states.username} 
                onChange={(e) => setStates({username: e.target.value})} 
                width="100%"
                height="50px"
                margin='20px 0px'
            />
            <TextInput 
                placeholder="Enter your password here" 
                value={states.password} 
                onChange={(e) => setStates({password: e.target.value})} 
                width="100%" 
                height="50px"
                margin='20px 0px'
                isPassword={true}
            />
            <Button
                label="Login"
                onClick={handleLogin}
            />
        </div>
    );
}

export default LoginPage;
