var clothingTypes = [];
function get_data() {
    var choosed = parseURLParams(window.location.href).type[0];
    var xhr = new XMLHttpRequest();

    xhr.open("Get", "./data.json")

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.response)
            // displayUsers(data);
            console.log(data);

            var x = 0;
            data.forEach(element => {
                console.log(element.clothing_type);
                if (clothingTypes.indexOf(element.clothing_type) == -1) {
                    clothingTypes.push(element.clothing_type);
                }

                var id_link=document.createElement ("a") ;
                var father = document.getElementById("showData"),
                    pro    = document.createElement('div'),
                    des    = document.createElement('div'),
                    clothe = document.createElement("h5"),
                    brand  = document.createElement("span"),
                    image  = document.createElement("img"),
                    stars  = document.createElement("div"),
                    shop   = document.createElement("a"),
                    price  = document.createElement("h4");
                if (element.clothing_type == choosed){
                        pro.setAttribute("class" , "pro");
                        id_link .setAttribute("href","product.html?id="+element.id) ;
                        id_link.innerText="see this product" ;
                        id_link.innerText=element.price;

                        // price.innerText  = element.price;
                        price.appendChild(id_link) ;
                        brand.innerText  = element.brand ;
                        clothe.innerText = element.clothing_type;
                        image.src        = element.image;

                        price.setAttribute("class","test");
                        clothe.setAttribute("class","bls");

                        des.setAttribute("class" , "des");
                        
                        pro.appendChild(image);
                        
                        stars.setAttribute("class" , "star");
                        var starNum = 5;
                        for (var i=0;i<starNum;i++) {
                            var star = document.createElement("i");
                            star.setAttribute("class", "fa fa-star")
                            stars.appendChild(star);
                        }

                        shop.setAttribute("href" , "#");
                        shop.innerHTML = "<i class='fa-solid fa-cart-shopping cart'></i>";

                        des.appendChild(brand);
                        des.appendChild(clothe);
                        des.appendChild(stars);
                        des.appendChild(price);
                        // des.appendChild(id_link);

                        pro.appendChild(des);
                        pro.appendChild(shop);
                        
                        father.appendChild(pro);
                    
                } else if (parseURLParams(window.location.href).type[0] == "all") {
                    pro.setAttribute("class" , "pro");

                    id_link .setAttribute("href","product.html?id="+element.id) ;
                    id_link.innerText="see this product" ;

                    price.innerText  = element.price;
                    brand.innerText  = element.brand ;
                    clothe.innerText = element.clothing_type;
                    image.src        = element.image;

                    price.setAttribute("class","test");
                    clothe.setAttribute("class","bls");

                    des.setAttribute("class" , "des");
                    
                    pro.appendChild(image);
                    
                    
                    stars.setAttribute("class" , "star");
                    var starNum = 5;
                    for (var i=0;i<starNum;i++) {
                        var star = document.createElement("i");
                        star.setAttribute("class", "fa fa-star")
                        stars.appendChild(star);
                    }

                    shop.setAttribute("href" , "#");
                    shop.innerHTML = "<i class='fa-solid fa-cart-shopping cart'></i>";

                    des.appendChild(brand);
                    des.appendChild(clothe);
                    des.appendChild(stars);
                    des.appendChild(price);
                    des.appendChild(id_link);

                    pro.appendChild(des);
                    pro.appendChild(shop);
                    
                    father.appendChild(pro);
                } else if (x == 39) {
                    //   alert("please go to the gome and choose one of our products");
                } else {
                    x++;
                   
                }
                
            });
        }
    }
    xhr.send();
}
function get_id() {
    var choosed_id = parseURLParams(window.location.href).id[0];
    var xhr = new XMLHttpRequest();

    xhr.open("Get", "./data.json")

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.response)
            // displayUsers(data);
            console.log(data);

            var x = 0;
            data.forEach(element => {
                console.log(element.clothing_type);
                if (clothingTypes.indexOf(element.clothing_type) == -1) {
                    clothingTypes.push(element.clothing_type);
                }

                var id_link=document.createElement ("a") ;
                var father = document.getElementById("showData"),
                    pro    = document.createElement('div'),
                    des    = document.createElement('div'),
                    clothe = document.createElement("h5"),
                    brand  = document.createElement("span"),
                    image  = document.createElement("img"),
                    stars  = document.createElement("div"),
                    shop   = document.createElement("a"),
                    price  = document.createElement("h4");
                if (element.id == Number(choosed_id)){
                        pro.setAttribute("class" , "pro");
                        id_link .setAttribute("href","product.html?id="+element.id) ;
                        id_link.innerText=element.price;

                        // price.innerText  = element.price;
                        price.appendChild(id_link) ;
                        brand.innerText  = element.brand ;
                        clothe.innerText = element.clothing_type;
                        image.src        = element.image;

                        price.setAttribute("class","test");
                        clothe.setAttribute("class","bls");

                        des.setAttribute("class" , "des");
                        
                        pro.appendChild(image);
                        
                        stars.setAttribute("class" , "star");
                        var starNum = 5;
                        for (var i=0;i<starNum;i++) {
                            var star = document.createElement("i");
                            star.setAttribute("class", "fa fa-star")
                            stars.appendChild(star);
                        }

                        shop.setAttribute("href" , "#");
                        shop.innerHTML = "<i class='fa-solid fa-cart-shopping cart'></i>";

                        des.appendChild(brand);
                        des.appendChild(clothe);
                        des.appendChild(stars);
                        des.appendChild(price);
                        // des.appendChild(id_link);

                        pro.appendChild(des);
                        pro.appendChild(shop);
                        
                        father.appendChild(pro);
                    
                }  else if (x == 39) {
                    //   alert("please go to the gome and choose one of our products");
                } else {
                    x++;
                   
                }
                
            });
        }
    }
    xhr.send();
}

