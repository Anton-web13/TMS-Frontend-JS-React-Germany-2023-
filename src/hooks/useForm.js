import {useCallback, useState} from "react";

const useForm = (initialFormValues) => {
    const [form, setForm] = useState(initialFormValues);

    // console.log(form);

    const handleChange = useCallback(({target}) => {
        const {name, value, type} = target;

        // if (type === 'checkbox') {
        //     console.log('Is checkbox!');
        // }


        setForm((state) => ({
            ...state,
            [name]: value,
        }));

    }, []);


    const handleReset = useCallback(() => {
        setForm(initialFormValues);
    }, []);


    return {form, handleChange, handleReset};
};

export default useForm;