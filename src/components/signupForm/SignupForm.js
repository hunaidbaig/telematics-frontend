import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignupForm() {
  const nav = useNavigate()
   const [username, setUsername] = useState("")
   const [email, setEmail] = useState("")
   const [number, setNumber] = useState("")
   const [password, setPassword] = useState("")

   async function handleSubmit(e) {
    e.preventDefault();

      const signupData = {
        username: username,
        email: email,
        number: number,
        password: password,
      };

      try {
        const response = await fetch("http://localhost:4000/addadmin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(signupData),
        });

        if (response.ok) {
          console.log("signup successful!");
          localStorage.setItem("user", JSON.stringify({ email, password }));
          nav("/")
        } else {
          console.error("signup failed");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }

    return (
        <main className="main-content  mt-0">
            <section>
                <div className="page-header min-vh-75">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
                                <div className="card card-plain mt-8">
                                    <div className="card-header pb-0 text-left bg-transparent">
                                        <h3 className="font-weight-bolder text-info text-gradient">Welcome</h3>
                                        <p className="mb-0">Enter your email and password to sign up</p>
                                        {/* <center><p className="font-weight-bolder text-info text-gradient" style="margin-top:1rem;"><?php echo $error ?></p></center> */}

                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={handleSubmit}>
                                            <label>Name</label>
                                            <div className="mb-3">
                                                <input type="text" className="form-control" placeholder="Name" aria-label="Name" name="name" aria-describedby="name-addon" required value={username} onChange={(e)=>setUsername(e.target.value)}/>
                                            </div>
                                            <label>Email</label>
                                            <div className="mb-3">
                                                <input type="email" className="form-control" placeholder="Email" aria-label="Email" name="email" aria-describedby="email-addon" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                                            </div>
                                            <label>Number</label>
                                            <div className="mb-3">
                                                <input type="number" className="form-control" placeholder="Number" aria-label="Number" name="Number" aria-describedby="number-addon" required value={number} onChange={(e)=>setNumber(e.target.value)}/>
                                            </div>
                                            <label>Password</label>
                                            <div className="mb-3">
                                                <input type="password" className="form-control" placeholder="Password" aria-label="Password" name="password" aria-describedby="password-addon" required  value={password} onChange={(e)=>setPassword(e.target.value)}/>
                                            </div>
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox" id="rememberMe" checked="" />
                                                <label className="form-check-label" for="rememberMe">Remember me</label>
                                            </div>
                                            <div className="text-center">
                                                <button type="submit" className="btn bg-gradient-info w-100 mt-4 mb-0">Sign up</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="oblique position-absolute top-0 h-100 d-md-block d-none me-n8">
                                    <div className="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6" style={{ backgroundImage:`url(${process.env.PUBLIC_URL}/assets/img/curved-images/curved6.jpg)`}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default SignupForm;