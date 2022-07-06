import React from "react";
export default

function Counter(props) {

    // let digit1 
    // let digit2 
    // let digit3 
    // let digit4 
    // let digit5 
    // let digit6 

    // if (props.number < 10) {
    //     digit1 = props.number
    // } else if (props.number < 100) {
    //     const digits = props.number.toString().split("")
    //     digit1 = digits[1]
    //     digit2 = digits[0]
    // } else if (props.number < 1000) {
    //     const digits = props.number.toString().split("")
    //     digit1 = digits[2]
    //     digit2 = digits[1]
    //     digit3 = digits[0]
    // }
    // else if (props.number < 10000) {
    //     const digits = props.number.toString().split("")
    //     digit1 = digits[3]
    //     digit2 = digits[2]
    //     digit3 = digits[1]
    //     digit4 = digits[0]
    // }
    // else if (props.number < 100000) {
    //     const digits = props.number.toString().split("")
    //     digit1 = digits[4]
    //     digit2 = digits[3]
    //     digit3 = digits[2]
    //     digit4 = digits[1]
    //     digit5 = digits[0]
    // }
    // else if (props.number < 1000000) {
    //     const digits = props.number.toString().split("")
    //     digit1 = digits[5]
    //     digit2 = digits[4]
    //     digit3 = digits[3]
    //     digit4 = digits[2]
    //     digit5 = digits[1]
    //     digit6 = digits[0]
    // } else {
    //     digit1 = 9
    //     digit2 = 9
    //     digit3 = 9
    //     digit4 = 9
    //     digit5 = 9
    //     digit6 = 9
    // }
    const number = props.number || 0
    const places = number.toString().split("").reverse()


    return <div className="container">
        <div className="box"><h1><i className="far fa-clock"></i></h1></div>
        <div className="box"><h1>{places.length > 5 ? places[5]:0}</h1></div>
        <div className="box"><h1>{places.length > 4 ? places[4]:0}</h1></div>
        <div className="box"><h1>{places.length > 3 ? places[3]:0}</h1></div>
        <div className="box"><h1>{places.length > 2 ? places[2]:0}</h1></div>
        <div className="box"><h1>{places.length > 1 ? places[1]:0}</h1></div>
        <div className="box"><h1>{places[0]}</h1></div>
    </div>
}
