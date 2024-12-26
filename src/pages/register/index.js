import Container from "../../common-components/Container";
import {HorizontalAlignment, VerticalAlignment} from "../../config/alignment";
import Text from "../../common-components/Text";
import i18n from "../register/i18n";
import TextInput from "../../common-components/TextInput";
import React from "react";
import useStates from "../../utils/hooks/useStates";

function RegisterPage() {
    const [states, setStates] = useStates({
        username: '',
        password: '',
        cfmPassword: '',
        fullName: '',
        role: '',
        birthdate: '',
        phoneNumber: '',
        email: '',
        address: '',
        image: '',
        workingBranch: '',
        personalCertificateId: '',
    });

    return (
        <Container
            horizontalAlignment={HorizontalAlignment.CENTER}
            verticalAlignment={VerticalAlignment.CENTER}
            height='100vh'
            width='100vw'
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
                <TextInput
                    placeholder={i18n.TEXT_INPUT.CONFIRMED_PASSWORD.PLACEHOLDER}
                    label={i18n.TEXT_INPUT.CONFIRMED_PASSWORD.LABEL}
                    value={states.cfmPassword}
                    onChange={(e) => setStates({ cfmPassword: e.target.value })}
                    width='100%'
                    margin='15px 0px'
                    isPassword={true}
                    borderRadius='10px'
                />
                <TextInput
                    placeholder={i18n.TEXT_INPUT.PERSONAL_CERTIFICATE_ID.PLACEHOLDER}
                    label={i18n.TEXT_INPUT.PERSONAL_CERTIFICATE_ID.LABEL}
                    value={states.personalCertificateId}
                    onChange={(e) => setStates({ personalCertificateId: e.target.value })}
                    width='100%'
                    margin='15px 0px'
                    borderRadius='10px'
                />
                <TextInput
                    placeholder={i18n.TEXT_INPUT.FULL_NAME.PLACEHOLDER}
                    label={i18n.TEXT_INPUT.FULL_NAME.LABEL}
                    value={states.fullName}
                    onChange={(e) => setStates({ fullName: e.target.value })}
                    width='100%'
                    margin='15px 0px'
                    borderRadius='10px'
                />
                <TextInput
                    placeholder={i18n.TEXT_INPUT.PHONE_NUMBER.PLACEHOLDER}
                    label={i18n.TEXT_INPUT.PHONE_NUMBER.LABEL}
                    value={states.phoneNumber}
                    onChange={(e) => setStates({ phoneNumber: e.target.value })}
                    width='100%'
                    margin='15px 0px'
                    borderRadius='10px'
                />
                <TextInput
                    placeholder={i18n.TEXT_INPUT.EMAIL.PLACEHOLDER}
                    label={i18n.TEXT_INPUT.EMAIL.LABEL}
                    value={states.email}
                    onChange={(e) => setStates({ email: e.target.value })}
                    width='100%'
                    margin='15px 0px'
                    borderRadius='10px'
                />
                <TextInput
                    placeholder={i18n.TEXT_INPUT.ADDRESS.PLACEHOLDER}
                    label={i18n.TEXT_INPUT.ADDRESS.LABEL}
                    value={states.address}
                    onChange={(e) => setStates({ address: e.target.value })}
                    width='100%'
                    margin='15px 0px'
                    borderRadius='10px'
                />
            </Container>
        </Container>
    );
}

export default RegisterPage;
