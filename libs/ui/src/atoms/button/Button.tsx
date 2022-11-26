import styles from './button.module.scss';

/* eslint-disable-next-line */
export interface ButtonProps {}

export function Button(props: ButtonProps) {
  return (
    <button className='px-3 py-1.5 border border-blue-600 bg-blue-500 text-white'>Button</button>
  );
}

export default Button;
