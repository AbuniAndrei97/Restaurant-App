
export interface IErrorTextProps {
  error: string;
}

export const ErrorText = (props: IErrorTextProps) => {
  const { error } = props;

  if (error === '') return null;

  return (
    <p className = "errorText">{error}</p>
  )
}