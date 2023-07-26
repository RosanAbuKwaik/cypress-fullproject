/// <reference types="cypress"/>

describe("testing vendor page", () => {
  it.skip("add vendor ", () => {
    cy.wait(6000);
    cy.visit("/");
    cy.visit("en/pages/single/beginner-guide");
    cy.wait(5000);
    cy.title().should("eq", "Beginner Guide | 7 Jewels");
    cy.get(".menu_item > .btn").click({ force: true });
    cy.get(".menu_item > .dropdown-menu > :nth-child(2) > .p-1").click();
    cy.get(".menu_item > .btn").click({ force: true });
    cy.get(".menu_item > .dropdown-menu > :nth-child(1) > .p-1").click();
    cy.wait(5000);
    cy.get(".container.beginners-guide-banner-container.py-lg-5").should(
      "be.visible"
    );
    cy.get("input[placeholder='Search Here...']")
      .type("KL", { force: true })
      .type("{enter}", { force: true });
    cy.go("back");
    cy.get(
      ".menu_link[href='https://7jewels-stage.nstechs-dev.com/en']"
    ).click();
    cy.url().should("eq", "https://7jewels-stage.nstechs-dev.com/en");
    cy.get(
      "header[class='main-header'] li:nth-child(2) a:nth-child(1)"
    ).click();
    cy.url().should("eq", "https://7jewels-stage.nstechs-dev.com/en/map");
    cy.get(":nth-child(3) > .menu_link").click();
    cy.url().should("eq", "https://7jewels-stage.nstechs-dev.com/en/vendors");
    cy.get(":nth-child(4) > .menu_link").click();
    cy.url().should(
      "eq",
      "https://7jewels-stage.nstechs-dev.com/en/products/new-arrivals"
    );

    cy.get(":nth-child(5) > .menu_link").click();
    cy.url().should("eq", "https://7jewels-stage.nstechs-dev.com/en/products");
    cy.get("li:nth-child(6) a:nth-child(1)").click();
    cy.url().should(
      "eq",
      "https://7jewels-stage.nstechs-dev.com/en/products/offers?only_has_offers=1"
    );
    cy.get(
      "a[href='https://7jewels-stage.nstechs-dev.com/en/pages/single/beginner-guide']"
    ).click({ force: true });
    cy.get("div[class='logo ms-lg-4'] img[alt='7 Jewels']").should(
      "be.visible"
    );
    cy.get(".font-bold.text-dark.h2").should(
      "have.text",
      "\n               Beginner’s Guide to Selling on 7 Jewels\n            "
    );
  });

  it("test vendor that created", () => {
    cy.visit(
      "https://7jewels-stage.nstechs-dev.com/en/user/vendor-settings/69/vendor-verification"
    );
    // login

    cy.visit("https://7jewels-stage.nstechs-dev.com/en/login");
    cy.get(":nth-child(2) > .form-control")
      .clear()
      .type("h6bng0efpy@ezztt.com");
    cy.get('input[name="password"]').clear().type("246810");
    cy.get('button[type="submit"]').click();
    cy.wait(7000);

    // notification page for the vendor that created :
    cy.wait(5000);
    cy.visit(
      "https://7jewels-stage.nstechs-dev.com/en/user/vendor-settings/69/vendor-verification"
    );
    cy.wait(4000);
    cy.get(".flex-4 > :nth-child(3)").click();
    // cy.get(':nth-child(3) > :nth-child(1) > .font-medium').should("be.visible",{force:true});
    cy.get("input[value='passport']").check({ force: true }); //radio button
    cy.get("button[type='button'] input[name='attachment_file']").selectFile(
      "cypress/fixtures/flower4.jpg",
      { force: true }
    );
    cy.get("#form > .text-start > #btn_submit").click({ force: true });
    cy.get(".swal2-popup").should("be.visible", { force: true });
    cy.get(".swal2-confirm").click({ force: true });
    cy.wait(4000);
    cy.get(":nth-child(4) > .d-flex > .text-primary").click({ force: true });

    // form
    cy.get("#form_3 > .text-start > #btn_submit").click({ force: true });
    cy.get(".swal2-popup").should("be.visible");
    cy.get(".swal2-confirm").click({ force: true });
    cy.wait(4000);
    cy.get(":nth-child(5) > .justify-content-between").click({ force: true });
    cy.wait(5000);
    cy.get(".flex-column > .position-relative > .upload-input").selectFile(
      "cypress/fixtures/flower.jpg"
    );
    cy.get("#form_2 > .text-start > #btn_submit").click({ force: true });
    cy.get(".swal2-popup").should("be.visible");
    cy.get(".swal2-confirm").click({ force: true });
    cy.wait(4000);

    cy.get(".toolbar-menu > :nth-child(2)").dblclick({ force: true }); //click on the notifications icon :
  });

  it("Vendor Can Add products", () => {
    // login
    cy.wait(7000);
    cy.visit("https://7jewels-stage.nstechs-dev.com/en/login");
    cy.get(":nth-child(2) > .form-control")
      .clear()
      .type("h6bng0efpy@ezztt.com");
    cy.get('input[name="password"]').clear().type("246810");
    cy.get('button[type="submit"]').click();
    cy.wait(7000);

    //  Vendors add products :
    cy.visit(
      "https://7jewels-stage.nstechs-dev.com/en/user/vendor-settings/69"
    );
    cy.get(".align-items-center > .btn").click({ force: true }); // add prducts to the cart
    cy.get("#nav-en > .form-control").type("Eum quidem et sunt d");
    cy.get(".col-lg-7 > :nth-child(2) > .form-control").type(
      "Ducimus qui nisi ma"
    );
    cy.get(":nth-child(3) > .dropdown > .btn").click({ force: true });
    cy.get(
      ":nth-child(3) > .dropdown > div.dropdown-menu > .bs-searchbox > .form-control"
    )
      .type("Fashion Jewelry", { force: true })
      .type("{enter}");
    cy.get(".section-product_subcategories > .dropdown > .btn").click({
      force: true,
    });
    cy.wait(6000);
    cy.get(
      ".section-product_subcategories > .dropdown > div.dropdown-menu > .bs-searchbox > .form-control"
    )
      .type("Ring", { force: true })
      .type("{enter}");
    cy.wait(6000);
    cy.get("#quantities").type("99", { force: true });
    cy.get("#minimum_quantity_alert").type("60", { force: true });
    cy.get("#uploadImg").selectFile("cypress/fixtures/flower4.jpg", {
      force: true,
    });
    cy.get("#uploadImg-2").selectFile("cypress/fixtures/flower4.jpg", {
      force: true,
    });

    cy.get(":nth-child(3) > .open-tab-product").click({ force: true }); // second tab
    cy.get("#nav-en2 > .form-control").type("Aspernatur voluptate");
    cy.get("#nav-ar2-tab").click({ force: true });
    cy.get("#nav-ar2 > .form-control").type("فقرة خارجية");

    //price
    cy.get(":nth-child(4) > .open-tab-product > .text-main").click({
      force: true,
    });
    cy.get(":nth-child(1) > :nth-child(1) > .input-group > .form-control").type(
      "100"
    );
    cy.get("#is_there_a_discount").click({ force: true });
    cy.get(
      ".discount-section > .col-lg-12 > .input-group > .form-control"
    ).type("20");
    // cy.get('.discount-section > .col-lg-12 > .input-group > .form-control').click("{force:true}");
    cy.get(".discount-section > .col-12 > .m-checkbox").click({ force: true });
    cy.get(".input-group > #mydate").click({ force: true });
    cy.get("tbody > :nth-child(2) > :nth-child(1)").click({ force: true });
    cy.get(".input-group > #mydate2").click({ force: true });
    cy.get("tbody > :nth-child(4) > :nth-child(2)").click({ force: true });

    // tab 3 :
    cy.get(":nth-child(5) > .open-tab-product > .text-main").click({
      force: true,
    });
    cy.get(".col-lg-12 > .form-group > .form-control").type("4");
    cy.get(".col-12 > .d-flex > .ms-2").click({ force: true });
    cy.get(":nth-child(4) > .form-control").type("5");
    cy.get(":nth-child(5) > .form-control").type("10");
    cy.get(":nth-child(6) > .form-control").type("20");
    cy.get(
      ":nth-child(5) > #collapseShipping > .mt-4 > .row > :nth-child(7) > .form-control"
    ).type("2");
    cy.get("#nav-ar > .form-control").type("زهور", { force: true });
    cy.get('[aria-hidden="false"] > a').click({ force: true });
    // sec page of customization
    cy.wait(4000);
    cy.get('option[value="1"]').click({ force: true });
    cy.get("#nav-en3 > .form-control").type("this product is avalible here");
    cy.get('[aria-hidden="false"] > a').click({ force: true });

    cy.get("input[name='seo_title_en']").type("7jewels", { force: true });
    cy.get("input[name='seo_description_en']").type("lorem lorem lorem");
    cy.get(":nth-child(3) > .form-group > .bootstrap-tagsinput").type(
      "keyword"
    );
    cy.get("input[name='seo_title_ar']").type("text");
    cy.get("input[name='seo_description_ar']").type("text2");
    cy.get(":nth-child(6) > .form-group > .bootstrap-tagsinput").type("text");
    cy.get(
      "#steps-uid-0-p-2 > fieldset > .form-card > .bg-dark-light > #collapseShipping > .mt-4 > .row > .mt-3 > .form-control"
    ).type("seo");
    cy.get('[aria-hidden="false"] > a').click({ force: true });
    cy.get('[aria-hidden="false"] > a').click({ force: true });
    // cy.get("button[class='swal2-confirm btn btn-secondary m-btn m-btn--wide swal2-styled']").click({force:true})

    // arrive for the second tab in this page
    //https://7jewels-stage.nstechs-dev.com/en/user/vendor-settings/69/products
    cy.wait(5000);
    cy.get(".nav-account > :nth-child(3) > .font-medium").click({
      force: true,
    }); // the third tab
    cy.get("#title").type("Voluptatem Lorem ap").type("{enter}"); // to search fot he prodcuts
    cy.get(":nth-child(3) > .nav-link").click({ force: true });
    cy.get(":nth-child(2) > .nav-link").click({ force: true }); //low of stock
    cy.get(".nav-account > :nth-child(4) > .font-medium").click({
      force: true,
    });
    cy.get(":nth-child(2) > .nav-link").click({ force: true });
    cy.get(":nth-child(3) > .nav-link").click({ force: true });
    cy.get(":nth-child(4) > .nav-link").click({ force: true });
    cy.get(":nth-child(5) > .nav-link").click({ force: true });
    cy.get(":nth-child(6) > .nav-link").click({ force: true });
    cy.get(":nth-child(7) > .nav-link").click({ force: true });
    cy.get(":nth-child(8) > .nav-link").click({ force: true });
    cy.get(":nth-child(5) > .font-medium").click({ force: true }); //coupons tab
    cy.get(".row > .d-flex > .btn").click({ force: true }); // to put coupons form
    cy.get(".font-bold").should(
      "have.text",
      "\n                                    New Coupon\n                                 "
    );
    cy.get("div[class='form-group'] input[name='title']").type("flowers"); //coupon title

    //  create a random coupon for the products :
    let symobls = "@#$%^*()!$&#";
    let latters = "asdhgfkflmnbvcxzwqetyuioppABEGVDHSJSIWQOEIEWUQTGVSKLMXB";
    let numbers = "1234929218710";
    let coupon = [];
    Array.from({ length: 3 }, () => {
      let element = "";
      Array.from({ length: 5 }, () => {
        element += symobls.charAt(Math.floor(Math.random() * symobls.length));
        element += latters.charAt(Math.floor(Math.random() * latters.length));
        element += numbers.charAt(Math.floor(Math.random() * numbers.length));
        coupon.push(element);
      });
    });
    cy.log(coupon[0]);
    cy.get(":nth-child(2) > .form-group > .form-control").type(coupon[0]); // to identify the coupon code for the product
    cy.get("button[title='Fixed']").click({ force: true });
    cy.get("#coupon_type").select("Fixed", { force: true });
    cy.get("input[name='amount']").type(100);
    cy.get("span[role='combobox']").type("flowers");
    cy.get("input[name='expiry_date']").click({ force: true });
    cy.get(
      ".datepicker.datepicker-dropdown.dropdown-menu.datepicker-orient-left.datepicker-orient-top"
    ).click({ force: true });
    cy.get("table[class=' table-condensed'] th[class='next']").click({
      force: true,
    });
    cy.get("tbody tr:nth-child(1) td:nth-child(2)").click({ force: true }); // to choose the expiry data for the coupon
    cy.get("input[name='minimum_total_invoice']").type("200");
    cy.get(".checkmark").click({ force: true });
    cy.get("#btn_submit").click({ force: true });
    cy.get(".swal2-confirm").click({ force: true }); // to click on ok btn
    cy.get("li[class='active'] a[class='font-medium']").click({ force: true }); //click on the reports
    cy.wait(4000);
    cy.get(":nth-child(6) > .font-medium").click({ force: true });
    cy.get(":nth-child(2) > .nav-link").click({ force: true });
    cy.get("div[class='flex-7'] li:nth-child(1) a:nth-child(1)").click({
      force: true,
    });
    cy.get("div[class='flex-7'] li:nth-child(1) a:nth-child(1)").click({
      force: true,
    });
    cy.get(".nav-link.active").click({ force: true });
    cy.get(":nth-child(8) > .font-medium").click({ force: true }); //tom click on the withdraw btn
    // cy.get("h3[class='font-bold']").should("have.text",' \n Withdraw Funds\n                     ');
    // cy.get(".bg-dark-light.rounded-3.px-lg-4.py-lg-3.px-2.py-3.mb-3").should(
    //   'be.visible'
    // );

    cy.wait(4000);

    cy.get(".col-xl-3 > .bg-dark-light > :nth-child(3)")
      .find("span")
      .invoke("text")
      .then((text1) => {
        const value1 = text1.trim();
        cy.get(".bg-dark-light > :nth-child(3) > span")
          .invoke("text")
          .then((text2) => {
            const value2 = text2.trim();
            expect(value1).to.equal(value2);
          });
      });
    cy.get(".nav-link.filter-status.active").click({ forcew: true });
    cy.get(":nth-child(2) > .nav-link").click({ force: true }); //canale tab
    cy.get(".bg-dark-light.rounded.p-2.p-lg-4").should("be.visible");
    cy.get("div.mb-4").find("td[data-title='Status']").should("contain", "New");
    cy.get("h6:nth-child(5)").should("contain", "10");
    cy.get(":nth-child(9) > .font-medium").click({ force: true });

    // customers and flowers ask not tested how to be tested
    cy.get("li[class='active'] a[class='font-medium']").click({ force: true }); //customers

    cy.get(":nth-child(10) > .font-medium").click({ force: true });
    cy.get(":nth-child(11) > .font-medium").click({ force: true });
    cy.get(".p-2.p-lg-4.mb-3.rounded-3").should("contain", "Congratulations");
    cy.get(":nth-child(12) > .font-medium").click({ force: true });

    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
    cy.wait(3000);

    cy.get(":nth-child(4) > .form-group > .form-control")
      .clear()
      .type("متجر الزهور");
    cy.get(":nth-child(15) > .form-group > .form-control")
      .clear()
      .type(
        "A rose can never be a sunflower, and a sunflower can never be a rose. All flowers are beautiful in their own way, and that’s like women too. – Miranda Kerr She sprouted love like flowers, grew a garden in her mind, and even on the darkest days, from her smile the sun still shined. – Erin Hanson"
      );
    cy.get(":nth-child(16) > .form-group > .form-control")
      .clear()
      .type("كل زهرة تتفتح في وقتها");
    cy.get("#btn_submit").click({ force: true });
    cy.get(".swal2-confirm").click({ force: true });
    cy.get(":nth-child(3) > .font-medium").click({ force: true });
    cy.get(":nth-child(6) > .form-group > .form-control").type("200");
    cy.get("#btn_submit").click({ force: true });
    cy.get(".swal2-confirm").click({ force: true });
    cy.get(":nth-child(4) > .font-medium").click({ forceL: true });
    cy.get(":nth-child(5) > .font-medium").click({ force: true });
    cy.get(":nth-child(6) > .font-medium").click({ force: true });
    cy.get(".bg-dark-light > :nth-child(1) > .form-control").clear().type(
      "https://www.facebook.com/flowershopsz/"
    );
    cy.get(":nth-child(2) > .form-control").clear().type(
      "https://instagram.com/flower.shop.ps?igshid=MzRlODBiNWFlZA=="
    );
    cy.get(":nth-child(3) > .form-control").clear().type(
      "https://www.facebook.com/flowershopsz/"
    );
    cy.get(":nth-child(4) > .form-control").clear().type(
      "https://www.facebook.com/flowershopsz/"
    );
    cy.get("#btn_submit").click({ force: true });
    cy.get(
      "button[class='swal2-confirm btn btn-secondary m-btn m-btn--wide swal2-styled']"
    ).click({ force: true });
    cy.get(":nth-child(7) > .font-medium").click({ force: true });
    cy.get(".row > :nth-child(1) > .form-group > .form-control")
      .clear()
      .type("7jewels");
    cy.get(":nth-child(2) > .form-group > .form-control")
      .clear()
      .type("Eos dolor corrupti ");
    cy.get(":nth-child(3) > .form-group > .bootstrap-tagsinput")
      .clear()
      .type("Ut ea consequatur D");
    cy.get(":nth-child(4) > .form-group > .form-control")
      .clear()
      .type("Ut ea consequatur D");
    cy.get(":nth-child(5) > .form-group > .form-control")
      .clear()
      .type("مجوهرات");
    cy.get(":nth-child(6) > .form-group > .bootstrap-tagsinput")
      .clear()
      .type("Sint natus dolore qu");
    cy.get(":nth-child(7) > .p-4 > :nth-child(1) > .form-control")
      .clear()
      .type("Sint natus dolore qu");
    cy.get(":nth-child(7) > .p-4 > :nth-child(2) > .form-control")
      .clear()
      .type("Nemo nihil totam est");
    cy.get(":nth-child(7) > .p-4 > :nth-child(3) > .form-control")
      .clear()
      .type("Nemo nihil totam est");
    cy.get(":nth-child(7) > .p-4 > :nth-child(4) > .form-control")
      .clear()
      .type("Nemo nihil totam est");
    cy.get(":nth-child(8) > .p-4 > :nth-child(1) > .form-control")
      .clear()
      .type("Nemo nihil totam est");
    cy.get(":nth-child(8) > .p-4 > :nth-child(2) > .form-control")
      .clear()
      .type("Nemo nihil totam est");
    cy.get(":nth-child(8) > .p-4 > :nth-child(3) > .form-control")
      .clear()
      .type("Nemo nihil totam est");
    cy.get(":nth-child(8) > .p-4 > :nth-child(4) > .form-control")
      .clear()
      .type("Nemo nihil totam est");
    cy.get("#btn_submit").click({ force: true });
    cy.get(
      "button[class='swal2-confirm btn btn-secondary m-btn m-btn--wide swal2-styled']"
    ).click({ force: true });

    cy.get(":nth-child(1) > .menu_link").click({ force: true }); //return to home page tp confirm that your store added
    cy.get("div[class='row mb-4'] div:nth-child(3)").click({ force: true });
    cy.get(
      ".swiper-slide-next > .widget_item-stores > .widget_item-name > a"
    ).click({ force: true });
    cy.get(".mt-2 > .btn").click({ force: true });
    cy.get(".menu_item > .btn").click({ force: true });

    // cy.get(".dropdown-menu.show")
    cy.get(".menu_item > .dropdown-menu > :nth-child(2) > .p-1").click({
      force: true,
    });
  });
});
