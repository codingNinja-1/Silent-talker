import "./register.scss";

const Register = () => {
    return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>Silent Talker</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quos veritatis saepe dolore et nesciunt? Quibusdam
                        assumenda vitae doloremque repellendus architecto.
                    </p>
                    <span>Do have an account??</span>
                    <button>Register </button>
                </div>
                <div className="right">
                    <h1>Register</h1>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
