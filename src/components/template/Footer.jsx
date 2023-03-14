const Footer = function() {
    return(
        <footer>
            <p>MusicNotes {(new Date(Date.now()).getFullYear())}</p>
        </footer>
    );
};

export default Footer;
