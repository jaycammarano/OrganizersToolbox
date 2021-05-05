import { ChangeEvent, SetStateAction } from 'react';

class SignUp {
  onSubmitHandler = async (
    e: React.FormEvent<HTMLFormElement>,
    submission: Record<string, unknown>
  ): Promise<Promise<boolean>> => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:1337/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submission)
      });

      const parseResponse = await response.json();
      const { token } = parseResponse;
      console.log(parseResponse);
      if (typeof token === 'string') {
        localStorage.setItem('token', parseResponse.token);
        console.log('hello');
      }
      return true;
    } catch (err) {
      console.error(err.message);
      return false;
    }
  };

  onChangeHandler = (
    e: ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<SetStateAction<any>>,
    blob: Record<string, unknown>
  ): void => {
    setter({ ...blob, [e.target.name]: e.target.value });
  };
}

export default SignUp;
