"use server"
const BACKEND_URL = `${process.env.BACKEND_URL}/auth`;

export const signUpApi = async (form: { name: string; email: string; password: string }): Promise<boolean> => {
    const requestPayload = {
        userName : form.name,
        password : form.password,
        email : form.email,
    }

    const response = await fetch(`${BACKEND_URL}/register`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestPayload)
    });
    
    if (!response.ok) {
        console.log("Error creating account");
        return false;
    }

    return true;
};