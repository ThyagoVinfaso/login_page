import Image from "next/image";
import { Button, Checkbox, TextField } from "@mui/material";
import { deepOrange } from "@mui/material/colors";

export default function SignCard() {
    const accountIcon = require("../../public/assets/account.svg");
    const termos = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <div className="flex flex-auto justify-end">
            <div className="flex flex-auto justify-end">
                <div className="flex flex-col absolute justify-center items-center h-[100vh] w-full lg:w-[40vw] 2xl:w-[40vw] right-[30wh] bg-black bg-opacity-80 z-10" style={{ backdropFilter: "blur(2px)"}}>
                    <Image className="flex flex-auto absolute aspect-square h-[15vh]  lg:h-[15vh] lg:w-[10vw] top-[10vh]" alt="account-icon" src={accountIcon} />
                    <label className="flex flex-auto mt-[30vh] text-3xl text-vermelho">Sign up</label>
                    <div className="flex flex-col mb-[30vh] w-[40vh] lg:w-[20vw]">{/* mb-[40vh] w-[20vw] */}
                        <TextField id="standard-basic" label="E-mail:" variant="standard" size="medium" />
                        <TextField id="standard-basic" label="Login:" variant="standard" />
                        <TextField id="standard-basic" label="Password:" variant="standard" />
                        <div className="flex flex-row h-[10vh]"> {/* */}
                            <Checkbox {...termos} />
                            <p className="flex flex-auto text-[1rem] overflow-wrap mt-[3vh]">I agree to the all statements in Terms of service </p>
                        </div>
                        <Button className="flex flex-auto m-auto h-[6vh] w-[20vh] lg:w-[16vh] lg:h-[5vh] mt-[4vh]" variant="contained" color="primary" disableElevation size="large" 
                            sx={{ bgcolor: '#AA4040', "&:hover": { bgcolor: '#952020' } }}

                        >
                            Sign Up
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
