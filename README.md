# Nest Design Website

## Description
Nest Design is a company website aimed at providing interior design and related services. The website offers information about the company, its services, and allows users to explore and purchase design packages.

## Installation
No installation required. Simply open the HTML files in a web browser.

## Usage
Open the HTML files in a web browser to navigate through the website.

## Contributing Guidelines
Contributions are not currently accepted for this project.

## License Information
This project is an open-license developing using:
<img src="https://img.shields.io/badge/web-html-informational?style=for-the-badge&logo=html5&logoColor=white&color=2aa889"/>&nbsp;
<img src="https://img.shields.io/badge/web-css-informational?style=for-the-badge&logo=css3&logoColor=white&color=2aa889"/>&nbsp;
<img src="https://img.shields.io/badge/code-javascript-informational?style=for-the-badge&logo=javascript&logoColor=white&color=2aa889"/>&nbsp;

## Documentation Links
Click [here](https://github.com/Wellfc/nest-designs/index.html) to test the application

## Project Structure
The project consists of HTML, CSS, and JavaScript files organized in the following structure:
```
project/
│
├── assets/
│ ├── style/
│ │ ├── index.css
│ │ ├── reset.css
│ │ ├── detail-page.css
│ │ └── (other CSS files)
│ ├── script/
│ │ └── index.js
│ └── img/
│ └── (image files)
├── index.html
└── services.html
```

## Testing Instructions
1. Open `index.html` in a web browser.
2. Navigate through the website.
3. Perform actions such as signing in, exploring services, and adding items to the cart.
4. Ensure all features and functionalities work as expected.

## Contact Information
For any inquiries or support, please contact Nest Designs at:

## Acknowledgements
This project was a collaborative effort with the following contributors:
- [Andre Cantuaria](https://github.com/andrecantuaria)
- [Wellfc](https://github.com/Wellfc)

## Version History
- v1.0 (November 2023): Initial release.

## Code Example
```<!-- Header-->
    <header>
        <div class="hamburger-icon"><i class="fa-solid fa-bars"></i></div>
        <div class="container flexbox">
            <div class="logo">
                <a href="index.html"><h2 class="logotype"><span class="bold">NEST DESIGN</span></h2></a>
            </div>
            <nav>
                <ul>
                    <li><a href="#about">About us</a></li>
                    <li><a href="#services">Services</a></li>
                </ul>
            </nav>
            <div class="btn btn-1">
                <a href="#ourservices"><i class="fa-solid fa-right-to-bracket"></i></i> Sign in </a>
            </div>
            <div class="cart">
                <a href="#"><i class="fa-solid fa-cart-arrow-down"></i></a>
            </div>
        </div>
    </header>
```
```<!-- LOGIN-MODAL -->
            <div class="modal">
                <div class="login__container">
                    <span class="icon-close">
                        <i class="fa-solid fa-xmark"></i>
                    </span>
                    <div class="form-box login">
                        <h2>Login</h2>
                        <form action="#">
                            <div class="input-box">
                                <span class="icon">
                                    <i class="fa-solid fa-envelope"></i>
                                </span>
                                <input type="email" required>
                                <label>Email</label>
                            </div>
                            <div class="input-box">
                                <span class="icon">
                                    <i class="fa-solid fa-lock"></i>
                                </span>
                                <input type="password" required>
                                <label>Password</label>
                            </div>
                            <div class="remember-forgot">
                                <label><input type="checkbox">
                                Remember me</label>
                                <a href="#">Forgot Password?</a>
                            </div>
                            <button type="submit" class="modal-button">Login</button>
                            <div class="login-register">
                                <p>
                                    Don't have an account?
                                    <a href="#" class="register-link">
                                        Register
                                    </a>
                                </p>
                            </div>
                        </form>
                    </div>
```
