
export const loginUser= (username,password) =>{
    return {type:'loginUser',
        payload:{user:username,pass:password}}
};

export const logout= () =>{
    return {type:'logout'}
};

export const setUser= (username) =>{
    return {type:'setUser',
        payload:username}
};


export const setPassword= (password) =>{
    return {type:'setPassword',
        payload:password}
};

