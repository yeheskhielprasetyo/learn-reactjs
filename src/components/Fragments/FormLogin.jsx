import InputForm from "../Elements/Input"
import Button from "../Elements/Button"

const FormLogin = () => {
    return (
        <form action="">
            <InputForm    label="Email" type="email" placeholder="example@gmail.com" name="email">
            </InputForm>
            <InputForm label="Password" type="password" placeholder="********" name="password">
            </InputForm>
            <Button classname="bg-blue-600 w-full">Login</Button>
        </form>
    )
} 

export default FormLogin