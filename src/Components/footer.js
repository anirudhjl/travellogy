import "../Styles/footer.css";

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <div id="footer">
      <p>&copy;Copyright {year}. All rights reserved</p>
    </div>
  );
};

export default Footer;
