import { RepositoryFactory } from "../../repository/RepositoryFactory";


var animaker = RepositoryFactory.get("animaker");

export const animakerAction = (payload, onSuccess) => async (dispatch) => {
    try {
        let form = new FormData();
        form.append("image", payload.file)
      
     

        const {data}  = await animaker.uploadImageRep(form);
       
        if(data?.name){
            
            // let obj={
            //     image:data?.name,
            //     text:payload?.prompt
            // }
            // const v = await animaker.getResponseRep(obj);
            // console.log("data______",v)
        }
        // if (data?.status==200) {
        //     console.log("data console : ", data.detail);
        //     dispatch({ type: ANIMAKER,payload: data?.detail });
            
        //     toast.success(data?.message);
        //     onSuccess(data?.detail);
        //     console.log("data.details response", data.detail);
        // } else {
            
        //     toast.error(data?.message);
        //     // onSuccess(false);
        // }
    } catch (error) {
        // onSuccess(false); 
        console.error("Error:", error);
    }
}