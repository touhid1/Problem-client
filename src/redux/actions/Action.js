export const Update_FORM_DATA = 'Update_FORM_DATA';
export const Delete_FORM_DATA = 'Delete_FORM_DATA';



export const UpdateFormData = (data) => {
    return {
        type:Update_FORM_DATA, 
        payload: data
    }
    
}
export const DeleteFormData = (data) => {
    return {
        type:Delete_FORM_DATA, 
        payload: data
    }
    
}