const siteFunc = () => {
    // openNav
    window.openNav = () => {
        document.getElementById("mySidebar").style.width = "60%";
        document.getElementById("mySidebar").style.display = "block";
    }

    // closeNav
    window.closeNav = () => {
        document.getElementById("mySidebar").style.display = "none";
    }
}

export default siteFunc;