function getData(){
    fetch('../product-list.json')
    .then(response =>{
        return response.json();
    })
    .then(data =>{
        fetch("../product-list.json")
      .then((data)=>{
        return data.json()
      })
      .then((data2)=>{
        let DataArr = data2.responses[0][0].params.userCategories;
        DataArr.forEach((items,index)=>{
  
        let strIndex = items.indexOf(">");
       
        document.getElementById(index+1).innerHTML = (items.substr(strIndex+1));
  
  
        })
      })
      
    })
  }
  
  getData();
  function getProducts(){
    fetch('../product-list.json')
    .then(response =>{
        return response.json();
    }
    )
    .then(data =>{
      
      var html ="";
      data.responses[0][0].params.recommendedProducts.EvDekorasyonBahçeMobilya.forEach(recommendedProducts =>{
        html += ` 
         <div class="carousel-item ">
        <div class="col-md-3">
        <div class="card">
        <img class="card-img-top" src="${recommendedProducts.image}" alt="">
        <div class="card-body">
        <h5 class="card-title">${recommendedProducts.name}</h5>
        <p class="card-text">${recommendedProducts.priceText}</p>
        <p class="card-text">Ücretsiz Kargo</p>
        <a href="#myModal" role="button" class="btn  btn-primary" data-bs-toggle="modal">Sepete Ekle</a>
  
        
        <div id="myModal" class="modal fade" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header bg-dark text-light">
                        <h5 class="modal-title"><i class="fa-solid fa-circle-check text-success"></i>Ürün sepete eklendi.</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body bg-dark text-primary">
                        <a>Sepete Git.</a>
                        
                    </div>
                    
                </div>
            </div>
        </div>
        
        </div>
        </div>
        </div>
        </div>
        `;
        
      });
      document.querySelector('#products').innerHTML = html;
    }).catch(error =>{
        console.log(error);
    });
  
  }
  getProducts();
  
  let items = document.querySelectorAll('.carousel .carousel-item')
  
  items.forEach((el) => {
      const minPerSlide = 4
      let next = el.nextElementSibling
      for (var i=1; i<minPerSlide; i++) {
          if (!next) {
              // wrap carousel by using first child
              next = items[0]
            }
          let cloneChild = next.cloneNode(true)
          el.appendChild(cloneChild.children[0])
          next = next.nextElementSibling
      }
  })
  $(document).ready(function(){
    $(".btn").click(function(){
        $("#myModal").modal('show');
    });
  });