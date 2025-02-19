import Parent from './parent';

interface Props {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

function GrandParent({ message, setMessage }: Props) {
  return (
    <div>
      GrandParent
      <Parent message={message} setMessage={setMessage} />
    </div>
  );
}

export default GrandParent;
