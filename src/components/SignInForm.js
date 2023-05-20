import React from 'react';
import './css/index.css';
import './css/signform.css';
import logo from './images/logo2.png';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import {useForm} from 'react-hook-form';


function SignInForm() {
    const { register,handleSubmit, formState: { errors }} = useForm();
    const onSubmit = data => console.log(data);

    return (
       
        <div>
            <div width="100%" style={{ backgroundColor: "#05060a" }}>
                <div className="container" style={{ backgroundColor: "#05060a" }}>
                    <div className="row">
                        <div className="col-md-6 pt-2">
                            {/* First div start*/}
                            <img src={logo} width="100%" className="log-img" alt='Logo' />
                            <center>
                                <h1 className="brand-1">PROCART</h1>
                            </center>
                        </div>
                        {/* First div end*/}
                        <div className="col-md-6 pt-4">
                            {/* Second div start*/}
                            <form
                                style={{ backgroundColor: "#05060a" }}
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <center>
                                    <h1>Sign Here</h1>
                                </center>
                                <div className="row">
                                    <div className="col-md-6">
                                        <span htmlFor="">First name:</span>
                                        <input
                                            type="text"
                                            className="input-form form-control"
                                            id="f_name"
                                            defaultValue=""
                                            name="f_name"
                                            pattern='^[a-zA-Z\\s]+$'
                                            placeholder="Enter your First name."
                                            {...register("firstname",{ required: true })}
                                        />
                                         {errors.firstname && <span className='react-error'>This field is required</span>}
                                        <span
                                            className="error1 error"
                                            style={{
                                                fontSize: 10,
                                                color: "red",
                                                fontFamily:
                                                    '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif'
                                            }}
                                        />
                                        <br />
                                        <span htmlFor="">Email:</span>
                                        <input
                                            type="email"
                                            className="input-form form-control"
                                            id="email"
                                            defaultValue=""
                                            name="email"
                                            placeholder="Enter your Email."
                                            {...register("email",{ required: true })}
                                        />
                                         {errors.email && <span className='react-error'>This field is required</span>}
                                        <span
                                            className="error2 error"
                                            style={{
                                                fontSize: 10,
                                                color: "red",
                                                fontFamily:
                                                    '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif'
                                            }}
                                        />
                                        <br />
                                        <span htmlFor="">Phone NO:</span>
                                        <input
                                            type="text"
                                            className="input-form form-control"
                                            id="p_num"
                                            defaultValue=""
                                            name="number"
                                            pattern=''
                                            placeholder="Enter your Password."
                                            {...register("phonenumber",{ required: true })}
                                        />
                                        {errors.phonenumber && <span className='react-error'>This field is required</span>}
                                        <span
                                            className="error3 error"
                                            style={{
                                                fontSize: 10,
                                                color: "red",
                                                fontFamily:
                                                    '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif'
                                            }}
                                        />
                                        <br />
                                    </div>
                                    <div className="col-md-6">
                                        <span htmlFor="">Last name:</span>
                                        <input
                                            type="text"
                                            className="input-form form-control"
                                            id="l_name"
                                            defaultValue=""
                                            name="l_name"
                                            placeholder="Enter your Last name."
                                            {...register("lastname",{ required: true })}
                                        />
                                        {errors.lastname && <span className='react-error'>This field is required</span>}
                                        <span
                                            className="error4 error"
                                            style={{
                                                fontSize: 10,
                                                color: "red",
                                                fontFamily:
                                                    '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif'
                                            }}
                                        />
                                        <br />
                                        <span htmlFor="">Password:</span>
                                        <input
                                            type="password"
                                            className="input-form form-control"
                                            id="pass"
                                            defaultValue=""
                                            name="pass"
                                            placeholder="Enter your Password."
                                            {...register("password",{ required: true })}
                                        />
                                        {errors.password && <span className='react-error'>This field is required</span>}
                                        <span
                                            className="error5 error"
                                            style={{
                                                fontSize: 10,
                                                color: "red",
                                                fontFamily:
                                                    '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif'
                                            }}
                                        />
                                        <br />
                                        <span htmlFor="">Date of Birth:</span>
                                        <input
                                            type="date"
                                            className="input-form form-control"
                                            id="dob"
                                            defaultValue=""
                                            name="date"
                                            pattern='/(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/'
                                            placeholder="Enter your Date of Birth."
                                            {...register("dob",{ required: true })}
                                        />
                                        {errors.dob && <span className='react-error'>This field is required</span>}
                                        <span
                                            className="error6 error"
                                            style={{
                                                fontSize: 10,
                                                color: "red",
                                                fontFamily:
                                                    '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif'
                                            }}
                                        />
                                        <br />
                                    </div>
                                </div>
                                <span htmlFor="">Gender:</span>
                                <br />
                                <lable
                                    htmlFor="male"
                                    style={{ color: "white", marginRight: 4, marginLeft: 10 }}
                                >
                                    Male
                                </lable>
                                <input
                                    type="radio"
                                    className="input-form "
                                    defaultValue="male"
                                    name="gender"
                                    id='Male'
                                    {...register("gender",{ required: true })}
                                    
                                />
                                <lable
                                    htmlFor="female"
                                    style={{ color: "white", marginRight: 4, marginLeft: 10 }}
                                >
                                    Female
                                </lable>
                                <input
                                    type="radio"
                                    className="input-form "
                                    defaultValue="female"
                                    name="gender"
                                    id='female'
                                    {...register("gender",{ required: true })}
                                />
                                <lable
                                    htmlFor="other"
                                    style={{ color: "white", marginRight: 4, marginLeft: 10 }}
                                >
                                    Other
                                </lable>
                                <input
                                    type="radio"
                                    className="input-form "
                                    defaultValue="other"
                                    name="gender"
                                    id='other'
                                    {...register("gender",{ required: true })}
                                />
                                <br />
                                <span
                                    className="error7 error"
                                    style={{
                                        fontSize: 10,
                                        color: "red",
                                        fontFamily:
                                            '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif'
                                    }}
                                />
                                <br />
                                <span htmlFor="">Address:</span>
                                <br />
                                <textarea
                                    className="input-form form-control"
                                    id="adr"
                                    name="adr"
                                    placeholder="Enter your Your address."
                                    {...register("address",{ required: true })}
                                />
                                {errors.address && <span className='react-error'>This field is required</span>}
                                <span
                                    className="error8 error"
                                    style={{
                                        fontSize: 10,
                                        color: "red",
                                        fontFamily:
                                            '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif'
                                    }}
                                />
                                <br />
                                <span htmlFor="">Country:</span>
                                <select
                                    name="country"
                                    id="country"
                                    className="input-form form-control"
                                    placeholder="Enter your Your Country."
                                    {...register("country",{ required: true })}
                                >
                                {errors.country && <span className='react-error'>This field is required</span>}
                                    <option name="country" value="Select your Country">
                                        Select your Country
                                    </option>
                                    <option name="country" value="India">
                                        India
                                    </option>
                                    <option name="country" value="Bangladesh">
                                        Bangladesh
                                    </option>
                                    <option name="country" value="Pakistan">
                                        Pakistan
                                    </option>
                                    <option name="country" value="China">
                                        China
                                    </option>
                                    <option name="country" value="Afganistan">
                                        Afganistan
                                    </option>
                                </select>
                                <span
                                    className="error9 error"
                                    style={{
                                        fontSize: 10,
                                        color: "red",
                                        fontFamily:
                                            '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif'
                                    }}
                                />
                                <br />
                                <button  className="btn-1 p-2 mt-2">
                                    Submit
                                </button>
                                <button type="reset" className="btn-2 p-2 mt-2">
                                    Reset
                                </button>
                            </form>
                        </div>
                        {/* Second div end*/}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SignInForm