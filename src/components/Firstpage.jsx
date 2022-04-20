import React, {useEffect, useReducer} from 'react';
import cl from './style.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getMinNumber, setColunm, setCountry, setCountryTwo, setDoubleNumber} from "../redux/actions";
import {useForm} from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';


const Firstpage = () => {

    const dispatch = useDispatch();
    const cityOfAction = useSelector(state => state.country)
    const numberOfAction = useSelector(state => state.num)
    const seaTown = useSelector(state => state.town)
    const {number, name, age} = useSelector(state => state)


    /*react hooks forms*/
    const {
        register,
        handleSubmit,
        setValue,
        reset,
        getValues,
        getFieldState,
        watch,
        formState : {errors, submitCount}
    } = useForm({   mode : "onChange"})


    const valuesInputs = getValues(['firstname', 'age', 'email']);


    console.log('this is valuesInputs', valuesInputs )


    const onSubmit2 = (data) => {
        console.log('this is data', data)
    }

    // const watchName = watch('name')
    //
    // useEffect(() => {
    //     const subscription = watch((value, { name, type }) => console.log(value, name, type));
    //     return () => subscription.unsubscribe();
    // }, [watchName]);




    const checkCity = () => {
        dispatch(setCountry("AMSTERDAM"))
    }
    const numberOfActionTake = () => {
         dispatch(setDoubleNumber(10, 5))
    }
    const numberMinus = () => {
         dispatch(getMinNumber(5,3))
    }
    const getInformation = () => {
        dispatch(setColunm(1, "Sergo", 33))
    }

    useEffect(() => {
        setTimeout(() => {
            dispatch(setCountryTwo("Mayami-Bitch"))
        },3000)
    },[])


    return (
                <div className={cl.page_title}>
                        <br/>
                    <br/>
                    <div>{`this is town ${cityOfAction}`}</div>
                    <button className={cl.fourth} onClick={checkCity}>Find Town</button>
                    <input type="text" />
                    <br/>
                    <div>{`this is number ${numberOfAction } `}</div>
                    <button  className={cl.fourth} onClick={numberOfActionTake}>Give the number</button>
                    <button  className={cl.fourth} onClick={numberMinus}>Minus the number</button>

                    <div>
                        {`this is new town ${seaTown}`}
                    </div>
                    <br/>
                    <div>
                        {/*{`this is ${number} ${age} ${name}`}*/}
                        <button className={cl.fourth} onClick={getInformation}>GET Information</button>
                    </div>
                    <br/>
                    <br/>
                    <form
                        onSubmit={handleSubmit(onSubmit2)}
                    >
                        <h1>Forms</h1>
                        <ErrorMessage
                            errors={errors}
                            name="firstname"
                            render={({ message }) => <p style={
                                {
                                    color : 'red',
                                    backgroundColor : "white",
                                    width : "200px",
                                    textAlign: "center",
                                    marginLeft: "200px"

                                }}>You must put input</p>}
                        />
                        <input
                            placeholder="first name"
                            {...register('firstname', {required: true})}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="name"
                            render={({ message }) => <p style={
                                {
                                    color : 'red',
                                    backgroundColor : "white",
                                    width : "200px",
                                    textAlign: "center",
                                    marginLeft: "200px"

                                }}>All inputs</p>}
                        />

                        <div>
                            {errors?.age && <div style={{color : "red"}}>{errors.age.type}</div>}
                            <input
                                placeholder="age"
                                {...register('age', {onChange : true})}
                            />
                        </div>

                        <div>
                            {errors?.email && <div style={{color : "red"}}>{errors.email.type}</div>}
                            <input
                                placeholder="email"
                                {...register('email', {required : true})}
                            />
                        </div>

                        <div>
                           <button type='submit'>
                                SEND
                           </button>

                                        <div>
                                            {valuesInputs.map((number, i) =>
                                            <li key={i}>{number}</li>
                                            )};
                                        </div>

                        </div>


                    </form>
                    <div>
                        <button onClick={() => {
                            setValue('firstname', "Sergo Djan")
                            setValue('email', "linter@gmail.com")
                        }}>change type input</button>
                    </div>


                </div>


    )}


export default Firstpage;