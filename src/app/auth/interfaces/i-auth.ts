export interface IAuth {
    username: string;
    password: string;
}

export interface IAuthRes {
    jwtToken: string;
}

export interface IAuthRegister {
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
}

export interface IAuthRegisterRes {
    status: string;
    message: string;
}
