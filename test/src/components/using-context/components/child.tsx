import GrandChild from './grand-child';

interface Props {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

function Child({ message, setMessage }: Props) {
  return (
    <div>
      Child
      <GrandChild message={message} setMessage={setMessage} />
    </div>
  );
}

export default Child;
