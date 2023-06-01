const FormContact = () => {
  return (
    <>
      <div className="col-lg-6 col-sm-6 ">
        <input type="text" className="form-control" placeholder="Full Name" />
        <input
          type="text"
          className="form-control"
          placeholder="Email Address"
        />
        <input
          type="text"
          className="form-control"
          placeholder="Contact Number"
        />
        <textarea
          rows="6"
          className="form-control"
          placeholder="Message"
        ></textarea>
        <button type="submit" className="btn btn-success" name="Submit">
          Send Message
        </button>
      </div>
    </>
  );
};

export default FormContact;
