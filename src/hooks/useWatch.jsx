import {useEffect} from "react";
import {useForm} from "react-hook-form";


export function useWatching () {
    const {watch} = useForm()
    const watchName = watch('age')

   return useEffect(() => {
        const subscription = watch((value, { name, type }) => console.log(value, name, type));
        return () => subscription.unsubscribe();
    }, [watchName]);
}

