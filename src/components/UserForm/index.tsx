import { Button } from "../Button";
import { UserInput, UserInputType } from "../UserInput";

export const UserForm = ({
    ...props
}) => {

    return (
        <form {...props}>
            <UserInput type={UserInputType.EMAIL} id='emailText'
                labelText="Email"
                placeholderValue="Enter your Email here..."
                tabIndex={0} />
            <UserInput type={UserInputType.EMAIL} id='passwordText'
                labelText="Password"
                placeholderValue="Enter your password here..."
                tabIndex={0} />
            <Button label="Login" mode="primary" type="submit" size="small" />
        </form>
    );
};
