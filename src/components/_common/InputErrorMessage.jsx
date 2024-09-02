import React from "react";


export default function InputErrorMessage({message}){
        return (
                <>
                 <p className="mt-2 text-sm text-red-600 dark:text-red-500">{message}</p>
                 </>
        )
}