import { useState } from "react";

export default function useForm(initVal) {
    const [value, setvalue] = useState(initVal)
    const handleChange = (e) => setvalue(e.target.value)
    const reset = () => setvalue('')
    return [value, handleChange, reset]
}