const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-container">
                <img src="/images/women_perfume.2.jpg" alt="">
                <div class="footer-ul-container">
                    <ul class="category">
                        <li class="category-title">Men</li>
                        <li><a href="#" class="footer-link">Rubio</a></li>
                        <li><a href="#" class="footer-link">Rubio</a></li>
                        <li><a href="#" class="footer-link">Rubio</a></li>
                        <li><a href="#" class="footer-link">Rubio</a></li>
                        <li><a href="#" class="footer-link">Rubio</a></li>
                        <li><a href="#" class="footer-link">Rubio</a></li>
                        <li><a href="#" class="footer-link">Rubio</a></li>
                        <li><a href="#" class="footer-link">Rubio</a></li>
                        <li><a href="#" class="footer-link">Rubio</a></li>
                        <li><a href="#" class="footer-link">Rubio</a></li>
                    </ul>

                    <ul class="category">
                        <li class="category-title">Women</li>
                        <li><a href="#" class="footer-link">Battarya</a></li>
                        <li><a href="#" class="footer-link">Battarya</a></li>
                        <li><a href="#" class="footer-link">Battarya</a></li>
                        <li><a href="#" class="footer-link">Battarya</a></li>
                        <li><a href="#" class="footer-link">Battarya</a></li>
                        <li><a href="#" class="footer-link">Battarya</a></li>
                        <li><a href="#" class="footer-link">Battarya</a></li>
                        <li><a href="#" class="footer-link">Battarya</a></li>
                        <li><a href="#" class="footer-link">Battarya</a></li>
                        <li><a href="#" class="footer-link">Battarya</a></li>
                    </ul>
                </div>
            </div>
            <p class="footer-title">About Company</p>
                <p class="info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa ducimus quas illum provident magnam aperiam ratione cupiditate ipsum maiores sequi?</p>
                <p class="info">Support Email - sweetscents@gmail.com</p>
                <p class="info">Telephone - +212 80576164</p>
                
                <div class="footer-social-container">
                    <div>
                        <a href="#" class="social-link">Terms & services</a>
                        <a href="#" class="social-link">Privacy</a>
                    </div>

                    <div>
                        <a href="https://api.whatsapp.com/send/?phone=2348051426164&text=Hello+SweetScent%21&app_absent=0" class="social-link"><img src="/images/WhatApp..png" alt=""></a>
                        <a href="#" class="social-link"><img src="/images/Daco_1310804.png" alt=""></a>
                    </div>
                </div>
                <p class="footer-credit">Perfumes, Best fragrance online store</p>

    `;
}

createFooter();
