import { useForm } from "react-hook-form";

import {
    StyledLoginForm,
    LoginFormLabel,
    LoginFormInput,
    LoginFormSubmitButton,
} from "./LoginForm.styled";

export const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const loginFormOnSubmit = data => {
        console.log(data);
    };

    return (
        <StyledLoginForm onSubmit={handleSubmit(loginFormOnSubmit)}>
            <LoginFormLabel htmlFor="userName">
                User name (login):
                <LoginFormInput
                    name="userName"
                    type="userName"
                    {...register("userName", { required: true })}
                />
                {errors.userName && <p>Email is required.</p>}
            </LoginFormLabel>
            <LoginFormLabel htmlFor="password">
                Password
                <LoginFormInput
                    name="password"
                    type="password"
                    {...register("password", { required: true })}
                />
                {errors.password && <p>Password is required.</p>}
            </LoginFormLabel>
            <LoginFormSubmitButton type="submit">Login</LoginFormSubmitButton>
        </StyledLoginForm>
    );
};
