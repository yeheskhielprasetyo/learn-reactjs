import InputForm from "../Elements/Input"
import Button from "../Elements/Button"

const FormRegister = () => {
    return (
        <form action="">
            <InputForm label="Fullname" type="fullname" placeholder="insert your name here.." name="fullname">
            </InputForm>
            <InputForm label="Email" type="email" placeholder="example@gmail.com" name="email">
            </InputForm>
            <InputForm label="Password" type="password" placeholder="********" name="password">
            </InputForm>
            <InputForm label="ConfirmPassword" type="password" placeholder="********" name="confirmPassword">
            </InputForm>
            <Button classname="bg-blue-600 w-full">Register</Button>
        </form>
    )
} 

export default FormRegister