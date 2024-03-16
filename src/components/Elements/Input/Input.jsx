const Input = (props) => {
    const {type, name, placeholder} = props
    return (
        <input type={type} className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-40" placeholder={placeholder} name={name}/>
    )
}

export default Input