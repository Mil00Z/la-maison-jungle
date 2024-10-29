import "../styles/Footer.css";

//Component CopyRight
const Footer = () => {

  let date = new Date();

  let textCopyright = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();

    return(<footer className="bottom-banner"> By <a href="https://github.com/Mil00Z">Mil00Z</a> in  
      <span className="copyright"> {textCopyright}</span>
    </footer>)
}

export default Footer