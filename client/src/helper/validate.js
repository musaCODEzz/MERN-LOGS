import toast from 'react-hot-toast';


/*validate login page username */
export async function usernameValidate(values){
    const errors = usernameVerify({}, values);
    return errors;
}  

/** validate password */
export async function passwordValidate(values){
    const errors = passwordVerify({}, values);

    return errors;
}

/**Validate reset password */
export async function resetPasswordValidate(values){
    const errors = passwordVerify({}, values);
 
    if(values.password !== values.confirm_pwd){
        errors.exist = toast.error('Passwords do not match');
    }

    return errors;
}


/**Validate register form */

export async function registerValidation(values){
    
    const errors = usernameVerify({}, values);
    passwordVerify(errors, values);
    emailVerify(errors, values);

    return errors;


}
/** validate profile page */
export async function profileValidation(values){
    const errors = emailVerify({}, values);
    return errors;
}

/********************************************************** */

/* validate password */
function passwordVerify(error = {}, values){
    /* eslint-disable no-useless-escape */

    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if(!values.password){
        error.password = toast.error('Password is required');
    } else if(values.password.includes(' ')){
        error.password = toast.error('Wrong Password');
    }else if(values.password.length < 6){
        error.password = toast.error('Password must be at least 6 characters');
    }else if(!specialChars.test(values.password)){
        error.password = toast.error('Password must contain at least one special character');
    }


    return error;
}

/* validate username */

function usernameVerify(error = {}, values){
    if(!values.username){
        error.username = toast.error('Username is required');
    } else if(values.username.includes(' ')){
        error.username = toast.error('Username cannot contain spaces');
    }

    return error;
}

/* validate email */

function emailVerify(error = {}, values){

    if(!values.email){
        error.email = toast.error('Email is required');
    } else if(!/\S+@\S+\.\S+/.test(values.email)){
        error.email = toast.error('Email is invalid');
    } else if(values.email.includes(' ')){
        error.email = toast.error('Email cannot contain spaces');
    }

    return error;
}