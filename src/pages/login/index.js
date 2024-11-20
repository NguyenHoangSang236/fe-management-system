import React, { useCallback } from 'react';
import TextInput from '../../common-components/TextInput';
import useStates from '../../utils/hooks/useStates';
import Button from '../../common-components/Button';
import themeColor from '../../config/themeColor';
import Container from '../../common-components/Container';
import { HorizontalAlignment, VerticalAlignment } from '../../config/alignment';

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
        <Container
            horizontalAlignment={HorizontalAlignment.CENTER}
            verticalAlignment={VerticalAlignment.CENTER}
            width="70%"
            padding="40px"
        >
            <h2>Login</h2>
            <TextInput
                placeholder="Enter your username here"
                value={states.username}
                onChange={(e) => setStates({ username: e.target.value })}
                width="100%"
                margin='20px 0px'
                borderRadius='10px'
            />
            <TextInput
                placeholder="Enter your password here"
                value={states.password}
                onChange={(e) => setStates({ password: e.target.value })}
                width="100%"
                margin='20px 0px'
                isPassword={true}
                borderRadius='10px'
            />
            <Button
                label="Login"
                onClick={handleLogin} 
            />
        </Container>
    );
}

export default LoginPage;
