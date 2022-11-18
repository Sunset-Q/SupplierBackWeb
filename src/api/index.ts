import request from "@/request/index.js";

export const getTableList = () => {
    return request.get('http://localhost:8080/petshop');
};
export const getItem = (data: any) => {
    return request.get(`http://localhost:8080/petshop/${data.id}`);
};
export const deleteItem = (data: any) => {
    return request.delete(`http://localhost:8080/petshop/${data.id}`);
};

