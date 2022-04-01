import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import * as Yup from 'yup'
import cl from './style.module.css'
const Firstpage = () => {
    const [stateRadio, setStateRadio] = useState(false)

    const schema = Yup;
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onRBSubmit = (res) => console.log(res)



    return (
        <div className={cl.page_title}>
            <form onSubmit={handleSubmit(onRBSubmit)}>
                <h2>Checked some question</h2>
                <div className="form-check mt-3">
                    <label htmlFor="pizza">
                        <input
                            {...register('react', { required: true })}
                            type="radio"
                            name="technology"
                            value="React"
                            className="form-check-input"
                            id="react"
                        />{' '}
                        FRONT END DEV ?
                    </label>
                </div>
                <div className="form-check">
                    <label htmlFor="burger">
                        <input
                            {...register('nodejs', { required: true })}
                            type="radio"
                            name="technology"
                            value="Nodejs"
                            className="form-check-input"
                            id="nodejs"
                        />{' '}
                        BACK END DEV ?
                    </label>
                </div>
                <div className="text-danger mt-3">
                    {errors.food?.type === 'required' &&
                        'Tell us what is your favourite food.'}
                </div>
                <button type="submit" className={cl.fourth}>
                    NEXT
                </button>
            </form>
        </div>
    );
};

export default Firstpage;