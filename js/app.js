/**Model start */

const mobilesList =  [ 
    {
        model: 'OnePlus Nord CE',
        brand: 'OnePlus',
        specification : { 
            ram: '8GB',
            rom: '256GB',
            processor: 'Snapdragon 750G',
            display: '6.43 inch'
        },
        price: 'Rs. 27,999/-'

    },
    {
        model: 'Mi 11X',
        brand: 'Mi',
        specification : { 
            ram: '6GB',
            rom: '128GB',
            processor: 'Snapdragon 870 5G',
            display: '6.67 inch'
        },
        price: 'Rs. 29,999/-'

    },

    {
        model: 'IQOO 7 Legend 5G',
        brand: 'IQOO',
        specification : { 
            ram: '8GB',
            rom: '128GB',
            processor: 'Snapdragon 888 5G',
            display: '6.62 inch'
        },
        price: 'Rs. 39,990/-'

    },

    {
        model: 'Vivo X60',
        brand: 'Vivo',
        specification : { 
            ram: '8GB',
            rom: '128GB',
            processor: 'Snapdragon 870',
            display: '6.56 inch'
        },
        price: 'Rs. 37,990/-'

    },

    {
        model: 'realme 8 5G',
        brand: 'OPPO',
        specification : { 
            ram: '8GB',
            rom: '64GB',
            processor: 'MediaTek Dimensity 700',
            display: '6.5 inch'
        },
        price: 'Rs. 15,280/-'

    },

]

/**Model end */

/**Controller start */

const ListView = { 
    
    init() { 
        this.render();
    },
    
    render() {
        let rootElem = document.getElementById('mobile-list');
        let heading1 = document.getElementById('heading1');
        let heading2 = document.getElementById('heading2');
        for (var i=0; i<mobilesList.length; i++) { 
            mobile = mobilesList[i];
            let elem = document.createElement('li');
            elem.textContent = mobile.model;
            elem.style.cursor = 'pointer';
            elem.className = 'list-group-item custom-list-bg';
            elem.addEventListener(
                'click',
              (
                  function(event) { 
                    return function() { 
                        console.table(event);
                        document.title = 'Mobile | ' + event.model;
                    }
                  }
              )(mobile)
            )
            rootElem.appendChild(elem);
        }

     } 


}


/**Contorller end */

/**View start */

/**View end */

//Runner
ListView.init();

function clickButtonTryit() { 
    alert('The button has triggered!!');
}