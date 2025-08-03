import Menu from "./Menu";

const Resetpassword = () => {
  return (
    <>
    <Menu/>
      <div className="wrapForm">
        <div className="formHeading">
          <h2>Reset Password</h2>
          <p>Lorem ipsum dolor sit.</p>
        </div>
        <form>
          <div className="inputWrapper">
            <label htmlFor="newpassword">New Password</label>
            <input type="password" name="newpassword" id="newpassword" required/>
          </div>
          <div className="inputWrapper">
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input
              type="password"
              name="confirmpassword"
              id="confirmpassword" required
            />
          </div>
          <div className="accountStatus"></div>
          <button type="submit">Save</button>
        </form>
      </div>
    </>
  );
};

export default Resetpassword;
