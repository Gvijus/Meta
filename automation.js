context('Order dress', () => {

  beforeEach(() => {
    cy.visit('http://automationpractice.com/index.php')
 
    cy.viewport(2216, 1082)
 
    cy.get('.container > .row > #search_block_top > #searchbox > #search_query_top').click()
 
    cy.get('.container > .row > #search_block_top > #searchbox > #search_query_top').type('summer')
 
    cy.get('.container > .row > #search_block_top > #searchbox > .btn').click()

    cy.get('.ajax_block_product:nth-child(3)').trigger('mouseover')                     // Užvedame pele ant elemento.
 
    cy.get('.ajax_block_product:nth-child(3) .button:nth-child(2) > span').click()

    cy.get('#center_column > div > .primary_block > .pb-center-column > h1').invoke('text').as('ietem') // Pasiimam prekės pavadinima prieš įdedant į krepšelį.
    
  })

  it('Select Reference currency', function () {

    cy.get('.box-cart-bottom > div > #add_to_cart > .exclusive > span').click()

    cy.get('.clearfix > .layer_cart_cart > .button-container > .button-medium > span').click()
 
    cy.get('.row > #center_column > .cart_navigation > .button > span').click()
 
    cy.get('.col-xs-12 > #login_form > .form_content > .form-group > #email').type('test1@test.lt')
 
    cy.get('#login_form > .form_content > .form-group > span > #passwd').type('labas123')
 
    cy.get('#login_form > .form_content > .submit > #SubmitLogin > span').click()
 
    cy.get('#center_column > form > .cart_navigation > .button > span').click()
 
    cy.get('.order_carrier_content > .checkbox > #uniform-cgv > span > #cgv').click()
 
    cy.get('.order_carrier_content > .checkbox > #uniform-cgv > .checked > #cgv').check('1')
 
    cy.get('#carrier_area > #form > .cart_navigation > .button > span').click()

    cy.get('.product-name > a:nth-child(1)').should('have.text', this.ietem)   // Tikrinam ar užsakyme prisidėjo preke kuria įdėjome į krepšelį.

    cy.get('#HOOK_PAYMENT > .row > .col-xs-12 > .payment_module > .bankwire').click()
 
    cy.get('#center_column > form > #cart_navigation > .button > span').click()

    cy.get('.row > #center_column > #order_step > #step_end > span').should('have.css', 'border-color')
    .and('eq', 'rgb(115, 202, 119) rgb(116, 199, 118) rgb(116, 193, 117)') // Tikrinam ar esam paskutiniam žingsnyje (pagal žalia fono spalva).

    cy.get('.row > #center_column > .box > .cheque-indent > .dark').should('have.text', 'Your order on My Store is complete.')  // Tikrinam ar užsakymas pavyko.

  })

})





