import type { FC } from 'react';
import type { HeadingProps } from './heading-props';

const Heading: FC<HeadingProps> = (props: HeadingProps) => {
    return <div className="light text-2xl text-pink-500 dark:text-pink-400">{props.label}</div>;
};

export default Heading;
