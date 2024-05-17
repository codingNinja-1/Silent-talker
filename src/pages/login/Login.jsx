import "./login.scss";

const Login = () => {
    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Silent Talker</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quos veritatis saepe dolore et nesciunt? Quibusdam
                        assumenda vitae doloremque repellendus architecto.
                    </p>
                    <span>Don't have an account??</span>
                    <button>Register </button>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input
                            type="text"
                            placeholder="Username"
                            name=""
                            id=""
                        />
                        <input type="password" name="" id="" placeholder="Password" />
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
