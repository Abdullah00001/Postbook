import { useNavigate } from 'react-router-dom';
import Email from '../../components/Email';
import SubmitButton from '../../components/SubmitButton';
import useAuthContext from '../../../../hooks/useAuthContext';
import { useState } from 'react';

const FindAccountForm = () => {
  const navigate = useNavigate();
  const { setEmailFieldError } = useAuthContext();
  const [email, setEmail] = useState(null);
  const handleCancel = () => {
    navigate('/auth/login');
  };
  const handleFindSubmit = e => {
    e.preventDefault();
    setEmailFieldError(null);
    const email = e.target.email.value.toLowerCase();
    if (email === '') {
      setEmailFieldError('Please Provide Email');
    }
    setEmail(email);
  };
  return (
    <form onSubmit={handleFindSubmit}>
      <Email pl={'pl-0'} />
      <div className='flex items-center gap-3 mt-[25px]'>
        <SubmitButton type={'submit'} name={'Find'} />
        <SubmitButton
          type={'button'}
          name={'Cancel'}
          handleClick={handleCancel}
        />
      </div>
    </form>
  );
};

export default FindAccountForm;