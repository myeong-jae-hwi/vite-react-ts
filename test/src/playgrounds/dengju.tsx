import ReactForm from './02-react-form';
import { useState } from 'react';
import FormInput from '@/components/form-input';

function Dengju() {
  const [greeting, setGreeting] = useState<string>('화이팅~~!!');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log('gd');
    setGreeting(e.target.value);
  };

  return (
    <div>
      <label htmlFor="greeting"></label>
      <textarea
        id="greeting"
        value={greeting}
        onChange={handleChange}
      ></textarea>
    </div>
  );
}

export default Dengju;
