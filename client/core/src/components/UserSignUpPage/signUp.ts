// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/no-unused-vars */
class SignUp {
  onSubmitHandler = (
    e: React.FormEvent<HTMLFormElement>,
    _submission: Record<string, unknown>
  ): boolean => {
    // e.preventDefault;

    return true;
  };

  onChangeHandler = (e: React.ChangeEvent<HTMLElement>): boolean => {
    return true;
  };
}

export default SignUp;
