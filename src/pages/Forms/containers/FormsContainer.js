import {useState} from "react";
import {useForm} from "../../../hooks";

const FormsContainer = () => {
    // // const [email, setEmail] = useState('');
    //
    // const [form, setForm] = useState({
    //     email: '',
    //     password: '',
    // });
    //
    // // const handleFormChange = ({target}) => {
    // //     // setEmail(event.target.value);
    // //
    // //     const {name, value} = target;
    // //     setForm((state) => ({
    // //         ...state,
    // //         [name]: value,
    // //     }));
    // // }
    //
    // const handleFormChange = (inputKey) => {
    //     return (event) => {
    //         setForm((state) => ({
    //             ...state,
    //             [inputKey]: event.target.value,
    //         }));
    //     }
    // }
    //
    // const onSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(form);
    // }

    const {form, handleChange, handleReset} = useForm({
            email: '',
            password: '',
            type: "",
        }
    )

    const [checked, setChecked] = useState(false);

    const handleCheckboxToggle = (event) => {
        setChecked(event.target.checked);
        // console.log(event)
    }

    return (
        <>
            <h1>Forms</h1>

            {/*<label>*/}
            {/*    <p>Email</p>*/}
            {/*    <input type={"email"}*/}
            {/*           name={'email'}*/}
            {/*           value={form.email}*/}
            {/*           onChange={handleFormChange}*/}
            {/*    />*/}
            {/*</label>*/}

            {/*<label>*/}
            {/*    <p>Password</p>*/}
            {/*    <input type={"password"}*/}
            {/*           name={'password'}*/}
            {/*           value={form.password}*/}
            {/*           onChange={handleFormChange}*/}
            {/*    />*/}
            {/*</label>*/}

{/*-------------------------------------------------------------------------------*/}

            {/*<form onSubmit={onSubmit}>*/}
            {/*    <label>*/}
            {/*        <p>Email</p>*/}
            {/*        <input type={"email"}*/}
            {/*               name={'email'}*/}
            {/*               value={form.email}*/}
            {/*               onChange={handleFormChange("email")}*/}
            {/*        />*/}
            {/*    </label>*/}

            {/*    <label>*/}
            {/*        <p>Password</p>*/}
            {/*        <input type={"password"}*/}
            {/*               name={'password'}*/}
            {/*               value={form.password}*/}
            {/*               onChange={handleFormChange('password')}*/}
            {/*        />*/}
            {/*    </label>*/}

                {/*<button*/}
                {/*    type={'submit'} onClick={() => {*/}
                {/*    console.log(form)*/}
                {/*}}>Submit</button>*/}

{/*-------------------------------------------------------------------------------*/}


            <form onSubmit={(event) => {
                event.preventDefault();

                console.log(form);
            }}>
                <label>
                    <p>Email</p>
                    <input type={"email"}
                           name={'email'}
                           value={form.email}
                           onChange={handleChange}
                    />
                </label>

                <label>
                    <p>Password</p>
                    <input type={"password"}
                           name={'password'}
                           value={form.password}
                           onChange={handleChange}
                    />
                </label>
                <button type={'submit'}>Submit</button>

                <input
                    type={'checkbox'}
                    checked={checked}
                    onChange={handleCheckboxToggle}
                />
            </form>
        </>
    );
};

export default FormsContainer;