/// <reference types = "Cypress"/>

import selectors from '../support/selectors_cem.js'


describe('sanity test for consumers energy managment', () => {

  beforeEach(() => {
    cy.visit(' https://consumersenergymanagement.ca/')
  })

  it('passes', () => {
    cy.get(selectors.home_button).click()
    cy.url().should('include', 'https://consumersenergymanagement.ca/')
    cy.get('h1').contains(' About ')
  })
  it('passes', () => {
    cy.get(selectors.about_button).click()
    cy.url().should('include', '/about-us/')
    cy.get('h1').contains('About Consumers Energy Management Inc.')
  })

  it('passes', () => {
    cy.get(selectors.products_button).click()
    cy.url().should('include', '/products/')
    cy.get('h1').contains('Products')
  })

  it('passes', () => {
    cy.get(selectors.services_button).click()
    cy.url().should('include', '/services/')
    cy.get('h1').contains('Services')
  })

  it('passes', () => {
    cy.get(selectors.tools_button).click()
    cy.url().should('include', '/tools-resources/')
    cy.get('h1').contains('Tools & Resources')
  })

  it('passes', () => {
    cy.get(selectors.promotions_button).click()
    cy.url().should('include', '/promotions/')
    cy.get('h1').contains('Promotions')
  })

  it('passes', () => {
    cy.get(selectors.careers_button).click()
    cy.url().should('include', '/careers/')
    cy.get('h1').contains('Careers')
  })

  it('passes', () => {
    cy.get(selectors.blog_button).click()
    cy.url().should('include', '/blog/')
    cy.get('h1').contains('Blog')
  })

  it('passes', () => {
    cy.get(selectors.faqs_button).click()
    cy.url().should('include', '/faq/')
    cy.get('h1').contains('Frequently Asked Questions')
  })

  it('passes', () => {
    cy.get(selectors.contact_button).click()
    cy.url().should('include', '/contact-us/')
    cy.get('h1').contains('Contact Us')
  })



})