import React, { useCallback } from 'react';
import TextInput from '../../common-components/TextInput';
import Text from '../../common-components/Text';
import useStates from '../../utils/hooks/useStates';
import Button from '../../common-components/Button';
import themeColor from '../../config/themeColor';
import Container from '../../common-components/Container';
import i18n from "./i18n";
import {FlexDirection, HorizontalAlignment, VerticalAlignment} from '../../config/alignment';

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
    );

    const handleForgotPassword = useCallback(
        () => {
            alert('Forgot password');
        },
        []
    );

    const handleRegister = useCallback(
        () => {
            alert('Register');
        },
        []
    );

    return (
        <Container
            horizontalAlignment={HorizontalAlignment.CENTER}
            verticalAlignment={VerticalAlignment.CENTER}
            width='100vw'
            height='100vh'
            backgroundImage='gradient_background.jpeg'
        >
            <Container
                horizontalAlignment={HorizontalAlignment.CENTER}
                verticalAlignment={VerticalAlignment.CENTER}
                width='50%'
                padding='40px'
                borderRadius='20px'
            >
                <Text
                    text={i18n.TITLE}
                    fontSize='30px'
                    fontWeight='bold'
                />
                <TextInput
                    placeholder={i18n.TEXT_INPUT.USERNAME.PLACEHOLDER}
                    label={i18n.TEXT_INPUT.USERNAME.LABEL}
                    value={states.username}
                    onChange={(e) => setStates({ username: e.target.value })}
                    width='100%'
                    margin='15px 0px'
                    borderRadius='10px'
                />
                <TextInput
                    placeholder={i18n.TEXT_INPUT.PASSWORD.PLACEHOLDER}
                    label={i18n.TEXT_INPUT.PASSWORD.LABEL}
                    value={states.password}
                    onChange={(e) => setStates({ password: e.target.value })}
                    width='100%'
                    margin='15px 0px'
                    isPassword={true}
                    borderRadius='10px'
                />
                <Container
                    width='100%'
                    horizontalAlignment={HorizontalAlignment.SPACE_BETWEEN}
                    verticalAlignment={VerticalAlignment.CENTER}
                    flexDirection={FlexDirection.ROW}
                >
                    <Text
                        text={i18n.BUTTON.LABEL.FORGOT_PASSWORD}
                        fontSize='14px'
                        fontWeight='bold'
                        textDecoration='underline'
                        onClick={handleForgotPassword}
                    />
                    <Text
                        text={i18n.BUTTON.LABEL.REGISTER}
                        fontSize='14px'
                        fontStyle='italic'
                        onClick={handleRegister}
                    />
                </Container>
                <Button
                    label={i18n.BUTTON.LABEL.LOGIN}
                    onClick={handleLogin}
                    width='100px'
                    borderColor={themeColor.textPrimary}
                    margin='30px 0px 0px 0px'
                />
            </Container>
        </Container>
    );
}

export default LoginPage;
