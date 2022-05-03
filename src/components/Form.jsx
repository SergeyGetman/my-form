import React, { useContext } from 'react';
import cl from './style.module.css';
import { FormProvider, useForm } from 'react-hook-form';
import { globalObjectTranslation } from '../localization/useLocalization';
import { globalContext } from '../context/theme-context';

const Form = () => {
  const { objForms, buttonsText } = globalObjectTranslation;
  const methods = useForm();
  const styleFromContext = useContext(globalContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { isValid }
  } = methods;

  const [folowFirstInput, folowSecondtInput] = watch(['firstInput', 'secondInput']);

  return (
    <div className={cl.page_forms}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <label>
            {' '}
            <strong>{objForms.firstInput} </strong>
          </label>
          <input {...register(objForms.firstInput, { required: true, maxLength: 6 })} />
          <label>
            <strong>{objForms.secondInput}</strong>{' '}
          </label>
          <input {...register(objForms.secondInput, { required: true, maxLength: 12 })} />
          <br />
          <div
            style={{
              background: styleFromContext.background,
              color: styleFromContext.textColor
            }}
          >
            {folowFirstInput}
          </div>

          <div
            style={{
              background: styleFromContext.background,
              color: styleFromContext.textColor
            }}
          >
            {folowSecondtInput}
          </div>
          <button className={cl.fourth} type="submit">
            {buttonsText.send}
          </button>
        </form>
      </FormProvider>
    </div>
  );
};

export default Form;
