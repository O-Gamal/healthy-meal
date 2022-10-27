import { useField } from 'formik';

interface TextInputProps {
  label: string;
  name: string;
  id?: string;
  type: string;
  placeholder: string;
}

interface CheckboxProps {
  children: React.ReactNode;
  name: string;
}

interface SelectProps {
  label: string;
  name: string;
  id?: string;
}

export const TextInput = ({ label, ...props }: TextInputProps) => {
  const [field, meta] = useField(props);

  return (
    <div className='flex flex-col'>
      <div className='flex items-center justify-between px-1 md:flex-row'>
        <label className='my-2 text-lg' htmlFor={props.id || props.name}>
          {label}
        </label>
        {meta.touched && meta.error ? (
          <div className='text-center text-red-500'>{meta.error}</div>
        ) : null}
      </div>
      <input className='input text-lg dark:bg-zinc-900' {...field} {...props} />
    </div>
  );
};

export const Checkbox = ({ children, ...props }: CheckboxProps) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });

  return (
    <div className='flex flex-col p-4 md:flex-row md:justify-between'>
      <label className='checkbox-input'>
        <input
          type='checkbox'
          className='layout-border mx-2 rounded-md text-lg dark:bg-zinc-900'
          {...field}
          {...props}
        />
        {children}
      </label>

      {meta.touched && meta.error ? (
        <div className='inline-block text-red-500'>{meta.error}</div>
      ) : null}
    </div>
  );
};

export const Select = ({ label, ...props }: SelectProps) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <div className='flex items-center justify-between gap-1  px-3'>
        <label className='my-2' htmlFor={props.id || props.name}>
          {label}
        </label>
        {meta.touched && meta.error ? (
          <div className='text-center text-red-500'>{meta.error}</div>
        ) : null}
      </div>
      <select
        {...field}
        {...props}
        className='layout-border w-full rounded-md text-lg dark:bg-zinc-900'
      />
    </div>
  );
};
