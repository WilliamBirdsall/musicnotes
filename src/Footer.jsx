const Footer = function() {
    return(
        <footer>
            <p>MusicNotes &copy; {(new Date(Date.now()).getFullYear())}</p>
        </footer>
    );
};

export default Footer;
