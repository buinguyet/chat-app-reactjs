
import axios from 'axios';

export const getToken = () => {
    try {
	    return localStorage.getItem('TOKEN');
    } catch (error) {
        return false;
    }
};

export const setToken = (value) => {
    try {
        return localStorage.setItem('TOKEN', value);
    } catch (error) {
        return false;
    }
};

export const clearToken = () => {
    try {
	    return localStorage.clear();
    } catch (error) {
        return false;
    }
};

export const axiosBodyToAPI = async (method, uri, body, json = true) => {
    try {
        const xAccessToken = getToken() ? getToken() : '';
        const headerConfig = {
            headers: {
	            Authorization: `Bearer ${xAccessToken}`,
            },
        };
        let result;
        if (method === 'POST') {
            result = await axios.post(uri, body, headerConfig);
        } else if (method === 'PUT') {
            result = await axios.put(uri, body, headerConfig);
        } else if (method === 'DELETE') {
            const config = {
                ...headerConfig,
                data: body,
            };
            result = await axios.delete(uri, config);
        } else {
            result = await axios.post(uri, body, headerConfig);
        }
        return result;
    } catch (error) {
        return error;
    }
};
export const sendQueryToAPI = async (uri) => {
    try {
        const xAccessToken = getToken() ? getToken() : '';
        const headerConfig = {
            headers: {
                Authorization: `Bearer ${xAccessToken}`,
            },
        };
        const result = await axios.get(uri, headerConfig);
	    return result;
    } catch (error) {
	    return error;
    }
};

export const isEmail = (value) => {
    const filter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return !!filter.test(value);
};

export const isName= (value)=>{
    const filter =  /^[\s0-9a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]+$/;
    return !!filter.test(value); 
};

export const isPassword= (value)=>{
    const filter = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/;
    return !!filter.test(value); 
} 