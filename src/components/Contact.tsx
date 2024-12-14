const Contact: React.FC = () => (
    <div>
      <h1>Contact Us</h1>
      <form>
        <label>
          Name: <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email: <input type="email" name="email" />
        </label>
      </form>
    </div>
  );
  
  export default Contact;
  