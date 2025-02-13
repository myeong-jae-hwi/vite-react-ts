import { forwardRef, useId } from 'react';

type AnimationControlProps = React.ComponentProps<'input'> & {
  label: string;
};

function AnimationControl({ label, ...inputProps }: AnimationControlProps) {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="range" {...inputProps} />
    </div>
  );
}

export default AnimationControl;
