import Child from './child';
interface Props {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

function Parent({ message, setMessage }: Props) {
  return (
    <div>
      Parent
      <Child message={message} setMessage={setMessage} />
    </div>
  );
}

export default Parent;
