/// <reference types = "Cypress"/>
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

import selectors from '../support/selectors_cem.js'
import { data } from '../fixtures/params.json'

describe('saving calculator - locations tests', () => {

    beforeEach(() => {
        cy.visit('  https://consumersenergymanagement.ca/savings-calculator/')
    })

    it('verifies each province and city in the calculator', () => {
        data.forEach(element => {
            cy.get(selectors.calculator_province).select(element.province).should('contain', element.province)
            cy.get(selectors.calculator_city).select(element.city).should('contain', element.city)

        })
    })

    it('verifies each province and city in the calculator', () => {

        cy.get(selectors.calculator_province).select("New Brunswick").should('contain', "New Brunswick")
        cy.get(selectors.calculator_city).select("Fredericton").should('contain', "Fredericton")

    })
    // New Brunswick is failing due to misspelled "Fredericton"
    // Last 4 tests are failing due to abscense of provinces in the list. 

    it('verifies each province and city in the calculator', () => {

        cy.get(selectors.calculator_province).select("Newfoundland and Labrador").should('contain', "Newfoundland and Labrador")
        cy.get(selectors.calculator_city).select("St. John's").should('contain', "St. John's")

    })

    it('verifies each province and city in the calculator', () => {

        cy.get(selectors.calculator_province).select("Prince Edward Island").should('contain', "Prince Edward Island")
        cy.get(selectors.calculator_city).select("Charlottetown").should('contain', "Charlottetown")

    })

    it('verifies each province and city in the calculator', () => {

        cy.get(selectors.calculator_province).select("Yukon").should('contain', "Yukon")
        cy.get(selectors.calculator_city).select("Whitehorse").should('contain', "Whitehorse")

    })

    it('verifies each province and city in the calculator', () => {

        cy.get(selectors.calculator_province).select("Nanavut").should('contain', "Nanavut")
        cy.get(selectors.calculator_city).select("Iqaluit").should('contain', "Iqaluit")

    })

})