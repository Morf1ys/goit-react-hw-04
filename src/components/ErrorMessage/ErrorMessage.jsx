import css from './ErrorMessage.module.css'
import { BiError } from "react-icons/bi";

const ErrorMessage = () => {
  return (
      <div className={css['cont-err']}>
      <BiError size={125} className={ css.BiError} />
      <p className={css['err-msg']}>{"Whoops, something went wrong! Please try reloading this page!"}</p>
    </div>
  );
};

export default ErrorMessage;
