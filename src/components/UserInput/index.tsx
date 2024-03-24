
interface UserInputProps {
    type?: string;
    backgroundColor?: string;
    placeHolderValue?:string;
}

export const UserInput = ({
    type="text",
    backgroundColor="",
    placeHolderValue="enter input for input type general",
    ...props
}: UserInputProps) => {
    return (
        <input
            type={type}
            className={backgroundColor}
            placeholder={placeHolderValue}
            {...props}
        />
    );
};
