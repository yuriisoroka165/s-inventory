export const LoginForm = () => {
    return (
        <>
            <form>
                <h3>Please login</h3>
                <input name="login" type="text" placeholder="E-mail*" />
                <input
                    name="password"
                    type="password"
                    placeholder="Password*"
                />
                <button type="submit">Login</button>
            </form>
        </>
    );
};
