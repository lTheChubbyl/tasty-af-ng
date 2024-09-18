export interface IAuth {
    userName: string;
    password: string;
}

export interface IAuthRes {
    token: string;
}

export interface IAuthRegister {
    firstName: string;
    lastName: string;
    email: string;
    userName: string;
    password: string;
}

export interface IAuthRegisterRes {
    status: string;
    message: string;
}
