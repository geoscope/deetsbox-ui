import type { FC } from 'react';
import type { ButtonProps } from './button-props';

const Button: FC<ButtonProps> = (props: ButtonProps) => {
    let buttonClasses = '';
    if (props.displayType === 'primary') {
        buttonClasses =
            'w-32 focus:outline-none text-white bg-pink-700 hover:bg-pink-900 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-900';
    } else if (props.displayType === 'outline') {
        buttonClasses =
            'w-32 text-pink-400 hover:text-white border border-pink-400 hover:bg-pink-600 focus:ring-4 focus:outline-none focus:ring-pink-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-pink-200 dark:text-pink-200 dark:hover:text-white dark:hover:bg-pink-300 dark:focus:ring-pink-700';
    }
    return (
        <button type="button" className={buttonClasses}>
            {props.label}
        </button>
    );
};

export default Button;
