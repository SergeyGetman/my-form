import React, {useEffect, useMemo} from 'react'
import { bindActionCreators } from 'redux'
import * as Light from  "../redux/actions"
import {connect} from "react-redux";
import Firstpage from "./Firstpage";


const SecondPage = (props) => {

    const {dispatch, todo} = props
    const boundActionCreators = useMemo(
        () => bindActionCreators(Light, dispatch),
        [dispatch]
    )
    useEffect(() => {
        let action = Light.setCountry('This is new Country')
        dispatch(action)
    }, [])



    return <Firstpage todo={todo} {...boundActionCreators} />

}
export default connect(state => ({ country: state.country }))(SecondPage)