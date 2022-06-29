import { useState } from "react";

export default function useForm(initVal) {
    const [value, setValue] = useState(initVal)
    const UpdateName = (e) => setValue(e.target.value)
    const reset = () => setValue('')

    return [value, UpdateName, reset]
}