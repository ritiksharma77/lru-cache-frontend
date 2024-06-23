export const deleteData = async (key: any, fetchCacheData: any) => {
    try{
        await fetch(`/delete?key=${key}`);
        fetchCacheData();
        alert(`Key Deleted: ${key}`);
    }catch(error: any){
        alert(`Failed to delete the ${key}`)
    }
  };
