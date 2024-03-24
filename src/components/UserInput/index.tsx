import React, { InputHTMLAttributes } from 'react';

export enum UserInputType {
    TEXT = "text",
    EMAIL = "email",
    PASSWORD = "password",

    // Add more types as needed
}
interface UserInputProps extends InputHTMLAttributes<HTMLInputElement> {
    type?: UserInputType;
    placeholderValue?: string;
    id?: string;
    labelText?: string;
}

export const UserInput: React.FC<UserInputProps> = ({
    type = UserInputType.TEXT,
    placeholderValue = "enter input for input type general",
    id = "generalInput",
    labelText = "This Is Input Label",
    ...props
}: UserInputProps) => {

    return (
        <div className="mb-4">
            <label htmlFor={id} className="block text-gray-700">{labelText}</label>
            <input
                id={id}
                type={type}
                placeholder={placeholderValue}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                {...props}
            />
        </div>
    );
};
